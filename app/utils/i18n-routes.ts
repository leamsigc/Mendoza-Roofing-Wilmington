import data from '../../i18n/translation-pairs.json'

export interface TranslationPair {
  en: string
  es: string
}

/**
 * Canonical EN <-> ES route registry.
 *
 * The site is content-driven through a single catch-all route
 * (`app/pages/[...slug].vue`), so @nuxtjs/i18n cannot infer translated
 * slugs on its own. Every place that needs to cross the locale boundary
 * (language switcher, footer links, hreflang, redirects) reads this map.
 *
 * `es` values are stored WITHOUT the `/es` prefix.
 */
export const translationPairs: TranslationPair[] = data.pairs
export const canonicalSiteUrl: string = data.siteUrl

export function normalizePath(path: string): string {
  const clean = path.split(/[?#]/)[0] || '/'
  if (clean === '/') return '/'
  return clean.replace(/\/+$/, '') || '/'
}

/** Strip the `/es` prefix so both locales resolve to the same key. */
export function localeKey(path: string): string {
  const clean = normalizePath(path)
  if (clean === '/es') return '/'
  if (clean.startsWith('/es/')) return clean.slice(3)
  return clean
}

/** Whether the given pathname is served under the Spanish prefix. */
export function isSpanishPath(path: string): boolean {
  const clean = normalizePath(path)
  return clean === '/es' || clean.startsWith('/es/')
}

/** Full URL path for a pair in a given locale. */
export function pairPath(pair: TranslationPair, locale: string): string {
  if (locale === 'es') return pair.es === '/' ? '/es' : `/es${pair.es}`
  return pair.en
}

export function findPair(path: string): TranslationPair | undefined {
  const key = localeKey(path)
  return (
    translationPairs.find((pair) => pair.es === key)
    ?? translationPairs.find((pair) => pair.en === key)
  )
}

export function findPairForSpanishPath(path: string): TranslationPair | undefined {
  const key = localeKey(path)
  return translationPairs.find((pair) => pair.es === key)
}

/**
 * Resolve an English canonical route to the path of the given locale.
 * Falls back to the Spanish homepage when no translation exists (the
 * language switcher then always lands on a 200 page instead of a redirect).
 */
export function localizePath(enRoute: string, locale: string): string {
  const pair = findPair(enRoute)
  // No translation? Link to the English page directly instead of bouncing the
  // reader to the Spanish homepage (and instead of a redirect hop).
  if (locale === 'es') return pair ? pairPath(pair, 'es') : normalizePath(enRoute)
  return pair ? pair.en : normalizePath(enRoute)
}

/** Target for the EN/ES switcher on the current page. */
export function switchLocalePath(path: string, targetLocale: string): string {
  const pair = findPair(path)
  if (!pair) return targetLocale === 'es' ? '/es' : '/'
  return pairPath(pair, targetLocale)
}

/** Absolute URLs used for hreflang alternates. */
export function alternateUrls(path: string) {
  const pair = findPair(path)
  if (!pair) return []
  const en = `${canonicalSiteUrl}${pair.en === '/' ? '/' : pair.en}`
  const es = `${canonicalSiteUrl}${pair.es === '/' ? '/es' : `/es${pair.es}`}`
  return [
    { rel: 'alternate', hreflang: 'en-US', href: en },
    { rel: 'alternate', hreflang: 'es-ES', href: es },
    { rel: 'alternate', hreflang: 'x-default', href: en },
  ]
}
