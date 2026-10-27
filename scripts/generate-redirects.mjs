import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

/**
 * Builds `_redirects` for the static export.
 *
 * 1. Scans the prerendered output for meta-refresh redirect shells
 *    (Spanish routes with no ES content) and converts them to real 301s,
 *    BEFORE Nitro's `/* /404.html 404` catch-all (Netlify: first match wins).
 * 2. Generates legacy-locale redirects from the route inventory so that:
 *      - `/es/<english-slug>` 301 -> `/es/<translated-slug>` when a Spanish
 *        translation exists under a different slug
 *      - `/es/<english-slug>` 301 -> `/<english-slug>` when there is no
 *        Spanish translation
 *      - `/<translated-slug>` 301 -> `/es/<translated-slug>` for Spanish
 *        slugs requested at the root
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

// ---------- route inventory ----------
const contentRoot = join(process.cwd(), 'content')
const markdown = []
function collect(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) collect(full)
    // Skip the blog index: it maps to the section root, not a page slug.
    else if (entry.endsWith('.md') && entry !== 'index.md') markdown.push(full)
  }
}
collect(contentRoot)

function routeOf(file) {
  const isEs = file.startsWith(join(contentRoot, 'es'))
  const rel = relative(isEs ? join(contentRoot, 'es') : join(contentRoot, 'en'), file)
    .replace(/\.md$/, '')
    .replace(/\\/g, '/')
  return { isEs, slug: `/${rel}` }
}

const enRoutes = new Set()
const esRoutes = new Set()
for (const file of markdown) {
  const { isEs, slug } = routeOf(file)
  ;(isEs ? esRoutes : enRoutes).add(slug)
}
// Section roots.
enRoutes.add('/blog')
esRoutes.add('/blog')

const localeRedirects = []
const pairs = JSON.parse(readFileSync(join(process.cwd(), 'i18n/translation-pairs.json'), 'utf8')).pairs
const enToEs = new Map(pairs.map((pair) => [pair.en, pair.es]))
for (const en of enRoutes) {
  const translated = enToEs.get(en)
  if (translated) {
    // Spanish translation may live under a different slug.
    if (translated !== en) localeRedirects.push([`/es${en}`, `/es${translated}`])
  } else {
    // No Spanish translation: legacy /es/<english-slug> -> English page.
    localeRedirects.push([`/es${en}`, en])
  }
}
for (const es of esRoutes) {
  // Spanish slug requested at the root (missing /es prefix).
  if (!enRoutes.has(es)) localeRedirects.push([es, `/es${es}`])
}

const STATIC_REDIRECTS = [
  ['/free-inspection', '/free-roof-inspection-wilmington-nc'],
  ['/es/free-inspection', '/es/inspeccion-gratis-de-techo-wilmington-nc'],
  ['/blog/roofing-contractor-shallotte-nc', '/blog/roofing-company-shallotte-nc'],
]

const seen = new Set()
const generated = []
for (const [from, to] of [...STATIC_REDIRECTS, ...localeRedirects]) {
  if (from === to || seen.has(from)) continue
  seen.add(from)
  generated.push(`${from}\t${to}\t301!`)
}

const redirectsPath = join(PUBLIC_DIR, '_redirects')
const existingLines = existsSync(redirectsPath)
  ? readFileSync(redirectsPath, 'utf8').split('\n').filter(Boolean)
  : []
const shellSet = new Set(redirects)
const generatedSet = new Set(generated)
// Keep only framework-level rules (catch-all, API proxy); everything else is
// regenerated on every build so stale locale rules cannot accumulate.
const preserved = existingLines.filter(
  (l) => (l.startsWith('/*') || l.startsWith('/api/') || l.startsWith('/.netlify/'))
    && !shellSet.has(l) && !generatedSet.has(l),
)

writeFileSync(
  redirectsPath,
  '# Auto-generated: meta-refresh shells + legacy locale redirects\n'
  + generated.join('\n') + '\n'
  + redirects.join('\n') + '\n'
  + (preserved.length ? `\n${preserved.join('\n')}\n` : ''),
)

console.log(
  `_redirects written to ${relative(process.cwd(), redirectsPath)}: `
  + `${generated.length} locale/static + ${redirects.length} shell redirects`,
)
