# SEO change log — 2026-10-27 (translation, Ahrefs cleanup, new AI-ready page)

Baseline pulled live on 2026-10-27 from GSC (28 days): **29 clicks / 8.91K
impressions / 0.3% CTR / avg position 18.8**. Live site checked with
chrome-devtools against production (`roofingmendoza.com`).

## 1. Root cause of the Spanish translation "glitch"

`/supply-nc-roofing` linked to `/es/supply-nc-roofing`. The Spanish page is
actually published at `/es/techos-supply-nc`, so the URL 301'd back to the
English page. The user saw a flash and stayed in English.

Why: the site renders every content page through one catch-all route
(`app/pages/[...slug].vue`). `@nuxtjs/i18n` can only infer translated paths for
static page files, so `switchLocalePath`, `useLocalePath` and `useLocaleHead`
all assumed "same slug, different prefix". That single assumption caused:

- the broken language switcher (both directions),
- **68** hreflang links pointing at redirects,
- **85** internal links pointing at redirects (header/footer/nav on every
  Spanish page),
- **71** 3XX redirects in Ahrefs.

### Fix

- New registry: `i18n/translation-pairs.json` (EN slug ↔ ES slug for every
  translated page, plus blog posts).
- New helpers: `app/utils/i18n-routes.ts` (`localizePath`, `switchLocalePath`,
  `alternateUrls`, `findPair`).
- New component `app/components/LocaleLink.vue`; all `NuxtLinkLocale` usages in
  components/layouts now use it.
- `app/app.vue`: hreflang + canonical are generated from the registry instead
  of `useLocaleHead`'s same-slug assumption. Pages with no translation emit
  **no** es hreflang (instead of a broken one).
- `AppHeader` switcher uses the registry (EN ↔ ES translated slug, no bounce).
- `scripts/generate-redirects.mjs` now derives legacy redirects from the
  registry: `/es/<en-slug> -> /es/<translated-slug>` when a translation exists,
  otherwise `-> /<en-slug>`; Spanish slugs requested at root redirect to `/es/`.
- Removed the duplicate `content/es/brunswick-county-roofing.md` (consolidated
  into `/es/techos-condado-brunswick-nc`, links repointed).
- Removed `content/es/free-inspection.md` (the only 4xx URL in the sitemap) and
  301'd it to `/es/inspeccion-gratis-de-techo-wilmington-nc`.

## 2. Rest of the Ahrefs issue list

| Ahrefs issue | Count | Fix |
|---|---|---|
| Hreflang to redirect / broken page | 68 | registry-backed hreflang, 0 broken in build |
| Page has links to redirect | 85 | `LocaleLink` + repointed content links, 0 left |
| 3XX redirect | 71 | legacy locale 301s regenerated (single hop, no chains) |
| 404 page / 4XX / 4XX in sitemap | 1 each | `/es/free-inspection` 301 + removed |
| Meta description too long | 38 | all trimmed to ≤160 chars |
| Meta description too short | 4 | rewritten to 120–160 chars |
| H1 missing or empty | 2 | `#` added to 2 ES blog posts |
| (new) duplicate H1 from PageHero | 28 | body `#` demoted to `##` on ES pages |
| Image file size too large | 2 | 5 multi-MB PNGs converted to JPEG (2.9 MB → 184 KB etc.) |

Also fixed a YAML bug: `description: 'Use Mendoza Roofing's ...'` truncated the
meta description to `"Use Mendoza Roofing"` on
`/blog/checklist-good-roofing-company`.

## 3. New page for the highest-impression queries

GSC top queries (28 d, all 0 clicks):

| Query | Impressions | Position |
|---|---|---|
| roofing wilmington nc | 254 | 25.9 |
| roofing company wilmington nc | 225 | 21.3 |
| roof repair wilmington nc | 225 | 27.0 |
| roofing contractor | 224 | 9.9 |
| roofing wilmington | 204 | 21.9 |
| roof replacement wilmington nc | 186 | 22.5 |
| roofing contractors wilmington nc | 170 | 30.4 |
| roofer wilmington nc | 144 | 25.2 |

All of those already have dedicated pages, so a new page for them would
cannibalise. The measured intent gap is **"roof repair near me"**: the
informational post `/blog/mendoza-roofing-50-years-brunswick-county` was
absorbing those impressions at position ~12 with a service-intent mismatch.

Created **`/roof-repair-near-me`** (EN) targeting `roof repair near me`,
`roofer near me`, `emergency roof repair near me` + Wilmington/Brunswick
modifiers:

- direct 40–60 word answer block (extractable by AI overviews),
- cost table, repair-vs-replace decision table, local-trust section,
- 7 FAQs written as standalone Q&A with verbatim `FAQPage` JSON-LD,
- internal links from `/wilmington-nc-roofing` and `/roof-repair-wilmington-nc`,
- automatically included in sitemap + `llms.txt` + `llms-full.txt`
  (`nuxt-ai-ready`).

## Verification (local `nuxt generate`)

- 427 routes prerendered, 0 errors.
- 106 HTML pages audited: **0 broken hreflang**, **0 pages without exactly one
  H1**, **0 internal links to redirects or missing pages**, **0 meta
  descriptions outside 120–160** (except noindex `/success`).
- Sitemap: 102 URLs, 0 missing, 0 redirect sources, `/es/free-inspection` gone.
- Browser-tested EN→ES→EN on `/supply-nc-roofing` (now lands on
  `/es/techos-supply-nc` with Spanish title/H1) and on a translated blog post.
- Untranslated page (`/shallotte-nc-roofing`): ES switch goes to `/es` (200),
  no hreflang emitted.

## Next steps

- Deploy, then re-crawl in Ahrefs/GSC (hreflang validation takes 1–2 weeks).
- Add an ES version of `/roof-repair-near-me` for the Spanish funnel.
- Watch `/wilmington-nc-roofing` (0 clicks / 1,978 impressions) — ranking is the
  constraint there, not the snippet.
