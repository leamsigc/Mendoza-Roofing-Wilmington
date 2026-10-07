# SEO change & decision log — GSC-driven audit fixes

Method: SEOO skill pack (`site-audit-orchestrator` + specialists), upgraded with
live GSC data pulled 2026-10-07 via chrome-devtools (property
`sc-domain:roofingmendoza.com`, Ismael Garcia session).

## Baseline (2026-10-07, 28-day window, recorded before deploy)

- Performance: **21 clicks / 10,220 impressions / 0.2% CTR / avg pos 20.3**
- Clicks only from brand (`mendoza roofing` 1/57 pos 3.0). All money queries
  0 clicks: `roof replacement wilmington nc` 0/223 pos 19.0,
  `roof repair wilmington nc` 0/209 pos 27.8,
  `roofing contractors wilmington nc` 0/186 pos 35.1.
- Top pages: `/` 11/5220, `/roof-replacement-cost-wilmington-nc` 2/535,
  `/brunswick-county-roofing` 2/399, `/shallotte-nc-roofing` 2/231,
  `/wilmington-nc-roofing` **0/1978**, `/southport-nc-roofing` 0/347 pos 12.5.
- Indexing: **55 indexed / 86 not** — redirect 21 (healthy i18n/slash/www),
  alternate-canonical 4 (index.html + 3 slash variants), crawled-not-indexed 9,
  duplicate-canonical 2 (both ES), **discovered-not-indexed 50** incl. money
  pages (`/roof-repair-*`, `/emergency-*`, `/storm-damage-*`, `/fortified-*`,
  both inspection pages, `/contact`, Ogden/Porters Neck/Bolivia/Leland).
- Links: external 3,391 of which **3,361 from mexican-goodies.com**
  ("visit project" anchors — single-domain dependence, investigate, do NOT
  mass-disavow). Internal top: 5 template pages × 52 inbound; homepage 36;
  money hubs not in top set.

## Changes deployed (2026-10-07, uncommitted — commit after owner review)

1. `app/pages/success.vue` — `noindex, nofollow`. `nuxt.config.ts` sitemap
   `exclude: ['/success', '/es/success']`. Thank-you page out of index.
2. Deleted `content/en/free-inspection.md` → 301 `/free-roof-inspection-wilmington-nc`
   (netlify.toml). Fixed inbound link in `commercial-roofing-wilmington-nc.md`.
3. Deleted `content/en/blog/roofing-contractor-shallotte-nc.md` → 301 survivor
   `/blog/roofing-company-shallotte-nc` (better GSC: pos 11.8 vs 23.6).
   Blog index entry repointed; bidirectional hub links added
   (service ↔ guide + new closing CTA in guide).
4. Deleted 4 stray Spanish slugs from `content/en/` (costo…, reparacion…,
   inspeccion…, techos…) → 301 to `/es/` canonicals (netlify.toml + existing
   `[...slug].vue` runtime + generated `_redirects` shells verified).
5. `content/es/*` internal links: 4 files had ES targets without `/es/` prefix
   (redirect chains) — prefixed to canonical `/es/` URLs.
6. Cost intent split made explicit: service page links to 2026 deep-guide blog
   and vice versa (was one-directional).
7. Footer Service Areas 5 → 10 towns (Shallotte, Southport, Calabash, Bolivia,
   Holden Beach added) + Privacy link. Homepage areas + Ogden/Porters Neck.
   Wilmington hub "Other services" 7 → 17 links (leak, cost, residential,
   metal, FORTIFIED, inspection, maintenance, financing, Ogden, Porters Neck).
8. ES homepage: rewrote keyword-stuffed filler (`techos de ladrillos…` ×5),
   passed translated `ChecklistSection list`, made `ServiceGrid` (feature/EDS/
   chips), `ToolsTeaser`, `Testimonials` heading, `AppHero` eyebrow
   locale-aware. Built `/es.html` verified 100% Spanish in those sections.
9. Homepage FAQ now visible (EN 5 Q&As match `FAQPage` schema verbatim; ES 5
   Q&As added). Previously schema-without-visible-content = mismatch risk.
10. Hours unified to 8am–6pm Mon–Fri everywhere (ContactSection, homepage,
    contact.md ×3) + schema `opens 07:00 → 08:00`.
11. New `/privacy` + `/es/privacy` (plain-language, attorney-review notice) +
    footer link. Contact form now has a policy to point at.

## Judgment calls (no obviously-correct answer)

- **Kept both cost pages** (service + 2026 blog) instead of merging: intents
  differ (converter vs deep guide); GSC shows service earning (2/535) while
  blog undiscovered — revisit if blog never indexes after link push.
- **Did NOT rewrite Wilmington-hub title for CTR** (0/1978): per
  `ctr-snippet-optimization`, snippet work pays at pos 3–15; its queries sit
  27–38. Rank first (links/indexation), then test titles.
- **ES kept indexed**: `/es` ranks pos 9.3 (0/390) — worth fixing, not noindexing.
  Untranslated EN-only towns in ES footer 301 to EN canonicals (existing
  pattern); acceptable, revisit with full ES area coverage.
- **Hours 8am (not 7am)**: 2 of 3 visible surfaces said 8am. Owner to confirm.

## To verify (2 / 4 / 8–12 weeks after deploy, per measurement-discipline)

- Indexed 55 → up; Discovered 50 → down; validate-fix on 3 sample URLs only
  (repair, leak, Wilmington hub) before bulk requests.
- Wilmington hub 0/1978 → clicks; Southport pos 12.5 → top 10.
- Check GSC Sitemaps for submitted-vs-indexed per `en-US`/`es-ES` sitemap.
- Manual: open mexican-goodies.com backlinks (footer/link-scheme? followed?);
  no disavow without that review.
- Owner confirmations: real opening hour (7 vs 8am); attorney review of privacy
  pages; reviewCount 50 still current.

## Verification of this change set

- `nuxt generate` build: 631 routes, 0 errors (104 warnings = 1 pre-existing
  `link-text` a11y nit × site, untouched).
- eslint on touched Vue files: 0 new issues (3 errors pre-existing at baseline).
- Built output spot-checked: success noindex ✓, sitemap excludes success ✓,
  privacy in both sitemaps ✓, deleted URLs leave no 200 shells (netlify 301s) ✓,
  `/es.html` fully Spanish in fixed sections ✓.
- Test runners (vitest/playwright) not installed in repo (scripts reference
  them, devDeps lack them; only placeholder example tests exist) — flagged,
  not introduced by this change.
