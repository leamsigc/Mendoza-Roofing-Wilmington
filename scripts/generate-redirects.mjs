import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

/**
 * Scans the prerendered output for meta-refresh redirect shells
 * (Spanish pages with no ES content) and prepends real 301s to the
 * _redirects file, BEFORE Nitro's `/* /404.html 404` catch-all
 * (Netlify processes rules in order, first match wins).
 *
 * Output dir differs by environment:
 *  - Netlify (nitro netlify preset): dist/
 *  - Local build: .output/public/
 */
const candidates = process.env.NETLIFY
  ? ['dist', '.output/public']
  : ['.output/public', 'dist']
const PUBLIC_DIR = candidates
  .map((d) => join(process.cwd(), d))
  .find((d) => existsSync(d))

if (!PUBLIC_DIR) {
  console.error('No build output directory found (dist or .output/public)')
  process.exit(1)
}

const redirects = []

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walk(full)
    } else if (entry.endsWith('.html') && !entry.endsWith('.md.html')) {
      const html = readFileSync(full, 'utf8')
      const match = html.match(
        /<meta http-equiv="refresh" content="0; url=([^"]+)">/,
      )
      if (match) {
        const routePath = '/' + relative(PUBLIC_DIR, full)
          .replace(/\.html$/, '')
          .replace(/\/index$/, '')
        // `!` forces the redirect even though the shell .html file exists
        // in the publish dir — without it Netlify serves the static stub.
        redirects.push(`${routePath}\t${match[1]}\t301!`)
      }
    }
  }
}

walk(PUBLIC_DIR)

const redirectsPath = join(PUBLIC_DIR, '_redirects')
const existingLines = existsSync(redirectsPath)
  ? readFileSync(redirectsPath, 'utf8').split('\n').filter(Boolean)
  : []
const shellSet = new Set(redirects)
// keep Nitro's own rules (404 catch-all, route rules), drop any duplicated shells
const preserved = existingLines.filter((l) => !shellSet.has(l))

writeFileSync(
  redirectsPath,
  '# Auto-generated: meta-refresh shells converted to real 301s\n'
  + redirects.join('\n') + '\n'
  + (preserved.length ? `\n${preserved.join('\n')}\n` : ''),
)

console.log(
  `_redirects written to ${relative(process.cwd(), redirectsPath)}: `
  + `${redirects.length} shell redirects prepended before catch-all rules`,
)
