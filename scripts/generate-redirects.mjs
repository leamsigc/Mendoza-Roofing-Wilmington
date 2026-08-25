import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

/**
 * Scans the prerendered ES output for meta-refresh redirect shells
 * (Spanish pages with no ES content) and emits a Netlify _redirects
 * file with real 301s, so Google never sees empty refresh stubs.
 */
const PUBLIC_DIR = join(process.cwd(), '.output', 'public')
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
        redirects.push(`${routePath}\t${match[1]}\t301`)
      }
    }
  }
}

walk(PUBLIC_DIR)

writeFileSync(
  join(PUBLIC_DIR, '_redirects'),
  '# Auto-generated: meta-refresh shells converted to real 301s\n'
  + redirects.join('\n') + '\n',
)

console.log(`_redirects written with ${redirects.length} shell redirects`)
