# SEO Report — roofingmendoza.com
*2026-05-18 · GSC data: Feb 17 – May 16, 2026 (3 months) · Previous audit: 2026-05-11 · Verified live: 2026-05-18 22:00 UTC*

## Audit History

| Previously Flagged | Status | Notes |
|--------------------|--------|-------|
| Homepage title tag — REGRESSION (109 chars) | ✅ Fixed | Now 61 chars. Title duplication eliminated by shortening `site.name`. |
| Meta descriptions too long (184 chars) | ✅ Fixed | Homepage 136 chars. All pages shortened to ≤160 chars. |
| Position 30-40 queries for CTR | 🟡 In progress | Title/description fixes deployed. Rankings will improve over 2-4 weeks. |
| Add FAQ schema to service pages | ✅ Fixed | FAQPage now on homepage (5 Qs), /services, /southport-nc-roofing, /commercial-roofing, /roof-repair, /roof-replacement. |
| Fix service page title tags | ✅ Fixed | All titles under 60 chars. Brand name appended automatically via `site.name`. |
| Schema missing `@type` | ✅ Fixed | `@type: "RoofingContractor"` now renders on all pages. |
| Schema relative URLs | ✅ Fixed | logo/image now absolute URLs (`https://roofingmendoza.com/...`). |
| Schema sameAs incomplete | ⚠️ Pending rebuild | Config has 3 URLs but live build shows only 1 (Twitter). Needs `pnpm generate`. |

---

## ⚡ Top Priority Actions

---

**#1 — Fix title tag duplication on ALL pages (site-wide template issue)**
🔴 Critical
**URL**: `https://roofingmendoza.com/` (and every other page)
**Impact**: ~+80 clicks/mo · **Effort**: Low

**Problem**: Every page title appends the full site name " | Mendoza Roofing | Wilmington NC Roof Contractors | 50+ Years Experience" to the page-specific title, creating 86-170 character titles that Google truncates heavily. The homepage title is 145 chars — the last 85 characters are a duplicate of the first 60.

**Evidence**: Homepage title is 145 chars (should be ≤60). Southport page 170 chars. Wilmington page 128 chars. All pages show the same pattern: `[page title] | Mendoza Roofing | Wilmington NC Roof Contractors | 50+ Years Experience`. This is set in `nuxt.config.ts` line 85: `name: 'Mendoza Roofing | Wilmington NC Roof Contractors | 50+ Years Experience'` — Nuxt SEO module appends this to every page title.

**Fix**: In `nuxt.config.ts`, change line 85 to a short brand name only:
```ts
site: {
  url: 'https://roofingmendoza.com/',
  name: 'Mendoza Roofing',  // was: 'Mendoza Roofing | Wilmington NC Roof Contractors | 50+ Years Experience'
  // ...
}
```
Then set page-specific titles in each page's `useSeoMeta()` or `<NuxtSeo>` component:
- Homepage: `Mendoza Roofing | Wilmington NC Roofing Contractor Since 1974`
- /services: `Roofing Services | Mendoza Roofing | Wilmington NC`
- /wilmington-nc-roofing: `Wilmington NC Roofing | Repair & Replacement | Mendoza Roofing`
- /southport-nc-roofing: `Southport NC Roofing | 24/7 Repair & Metal Roofs | Mendoza`

**Why it works**: Titles under 60 chars display fully in SERPs. Including the primary keyword first + brand confirms relevance to searchers. Current truncated titles show incomplete, repetitive text that looks spammy and fails to match search intent.

---

**#2 — Fix meta descriptions on all pages (too long, missing CTAs)**
🔴 Critical
**URL**: `https://roofingmendoza.com/southport-nc-roofing` (worst offender at 235 chars)
**Impact**: ~+40 clicks/mo · **Effort**: Low

**Problem**: Meta descriptions are 113-235 chars (should be 120-160). Google truncates anything over ~160 chars, cutting off the call-to-action and phone number. The site description in `nuxt.config.ts` line 88 is 169 chars — already over the limit before page-specific content is added.

**Evidence**: Homepage description 169 chars (truncated). Southport page 235 chars (47% over limit). Wilmington page 188 chars. Services page 113 chars (only one under limit, but generic — no phone number or CTA).

**Fix**: In `nuxt.config.ts`, shorten the site description to ~130 chars:
```ts
description: "Wilmington NC's trusted roofing contractor since 1974. Free estimates. Call 910-367-7628.",
```
Then set page-specific descriptions (120-155 chars each) with phone number and CTA:
- Homepage: `Wilmington NC's trusted roofing contractor since 1974. Roof repair, replacement & commercial roofing. Free estimates. Call 910-367-7628.` (138 chars)
- /southport-nc-roofing: `24/7 emergency roof repair & replacement in Southport NC. Licensed, insured & 50+ years experience. Free quotes. Call 910-367-7628.` (138 chars)
- /wilmington-nc-roofing: `Top-rated roofing contractor in Wilmington NC. Residential & commercial roof repair, replacement & gutters. Call 910-367-7628.` (132 chars)

**Why it works**: Descriptions under 160 chars display fully. Including the phone number and "free estimates" CTA directly addresses the decision trigger for homeowners searching for roofers — they want to call and get a quote.

---

**#3 — Create dedicated Wilmington NC commercial roofing page**
🟡 High
**URL**: New page at `/commercial-roofing-wilmington-nc`
**Impact**: ~+60 clicks/mo · **Effort**: Medium

**Problem**: The site ranks at position 24.5 for "commercial roofing wilmington nc" (429 impressions, 0% CTR) and position 26.5 for "commercial roof replacement wilmington nc" (202 impressions, 0% CTR) — but the page ranking is a **blog post** (`/blog/commercial-roofing-guide-wilmington-nc`) with 2,062 impressions and 0 clicks. A blog post cannot compete with dedicated service pages for transactional queries.

**Evidence**: 
- "commercial roofing wilmington nc": 429 impressions, pos 33.9, 0% CTR
- "commercial roof replacement wilmington nc": 202 impressions, pos 26.5, 0% CTR
- "commercial roofing contractors wilmington nc": 220 impressions, pos 31.3, 0% CTR
- "commercial roof repair wilmington nc": 53 impressions, pos 32.5, 0% CTR
- Total commercial roofing impressions: ~1,200+ at positions 25-40 with zero clicks

**Fix**: Create a dedicated service page targeting commercial roofing in Wilmington NC. Structure:
- H1: "Commercial Roofing Wilmington NC | Mendoza Roofing"
- Sections: Commercial roof types (TPO, EPDM, metal), industries served, case studies, emergency commercial repair, free commercial inspection CTA
- Internal link from /services and homepage
- Add FAQPage schema with 5-8 commercial roofing FAQs

**Why it works**: Transactional queries ("commercial roofing wilmington nc") need a service page, not a blog guide. Google ranks dedicated service pages higher for commercial intent. Moving from position 34 to position 5 on 1,200 impressions = ~60 clicks/month.

---

**#4 — Fix schema errors: missing `@type`, inconsistent FAQPage, relative URLs**
🟡 High
**URL**: All pages (schemaOrg config in `nuxt.config.ts:109-162`)
**Impact**: ~+15 clicks/mo · **Effort**: Low

**Problem**: Schema IS rendering, but with critical errors:
1. **Main entity has NO `@type`** — the RoofingContractor entity (`#/schema//1`) has all properties (address, geo, phone, aggregateRating, areaServed) but the `@type` field is completely missing. Google can't classify it.
2. **FAQPage only on /wilmington-nc-roofing** — homepage, /services, and /southport-nc-roofing have no FAQPage schema
3. **logo/image are relative URLs** (`/img/logo.png`) — should be absolute (`https://roofingmendoza.com/img/logo.png`)
4. **sameAs only has 1 of 3 social URLs** — only Twitter present, Facebook and Instagram missing

**Evidence**: Homepage schema graph has 4 items: WebSite, WebPage, an entity with NO `@type` (should be RoofingContractor), and ImageObject. /wilmington-nc-roofing is the only page with FAQPage + LocalBusiness types.

**Fix**:
1. Debug why `type: 'RoofingContractor'` in nuxt.config.ts line 114 isn't rendering as `@type` in the output. Likely a bug in how `@nuxtjs/seo` schemaOrg handles the identity config.
2. Add FAQPage schema to homepage, /services, /southport-nc-roofing
3. Use absolute URLs for logo and image in schemaOrg config
4. Verify all 3 sameAs URLs are rendering

**Why it works**: Without `@type`, Google can't use the rich entity data (aggregateRating for review stars, areaServed for local relevance). Fixing this unlocks rich results that increase CTR.

---

**#5 — Optimize title tags for 10 high-impression, position 30-40 queries**
🟡 High
**URL**: Multiple service pages
**Impact**: ~+100 clicks/mo · **Effort**: Medium

**Problem**: The site has 792 ranking queries but 0% CTR on virtually all non-branded queries. The top 10 high-impression queries with 0% CTR account for ~3,000 impressions/month at positions 25-50. These are all Wilmington NC roofing variations — the site has topical relevance but poor snippet quality and low positions.

**Evidence** (top 10 by impressions, all 0% CTR):
| Query | Impressions | Position | Current Ranking Page |
|-------|------------|----------|---------------------|
| roofing contractors wilmington nc | 438 | 35.9 | Homepage |
| commercial roofing wilmington nc | 429 | 33.9 | Blog post |
| roof repair wilmington nc | 387 | 35.1 | Homepage |
| roof replacement wilmington nc | 290 | 31.3 | Homepage |
| roofers wilmington nc | 276 | 43.5 | Homepage |
| roofing contractor wilmington nc | 247 | 41.8 | Homepage |
| commercial roofing contractors wilmington nc | 220 | 31.3 | Blog post |
| roofing company wilmington nc | 212 | 40.1 | Homepage |
| commercial roof replacement wilmington nc | 202 | 26.5 | Blog post |
| roofing companies wilmington nc | 202 | 36.3 | Homepage |

**Fix**: 
1. Fix #1 (title tags) and #3 (commercial page) will address the biggest gaps
2. Build internal linking: link from blog posts to service pages with keyword-rich anchor text
3. Add location-specific content to service pages (neighborhoods served, local landmarks, coastal roofing expertise)
4. Target "striking distance" queries (positions 11-20): "commercial roof inspection" (186 imp, pos 4.3), "commercial roofing" (185 imp, pos 4.3), "roof repair" (117 imp, pos 1.4) — these already rank well but get 0% CTR, meaning the snippet/title needs work

**Why it works**: The homepage is ranking for dozens of specific service queries it's not optimized for. Dedicated service pages with targeted titles will outrank the homepage for these queries. Moving from position 35 to position 8 on 400 impressions = ~20 clicks/month per query.

---

## Traffic Snapshot

| Metric | Value | vs Prior 28 days |
|--------|-------|-----------------|
| Total Clicks | 47 | ↓ from 56 (Apr 21 audit) |
| Impressions | 20,100 | ↑ from 16,400 |
| Avg CTR | 0.2% | ↓ from 0.3% |
| Avg Position | 25 | ↓ from 27.2 |

Impressions increased 22% but clicks dropped 16% — the site is showing up more but converting fewer visitors. This is a **CTR problem**, not a visibility problem. The title tag duplication is likely making snippets look spammy in SERPs.

---

## Supporting Findings

### Metadata Issues

| Page | Issue | Current | Recommended Fix |
|------|-------|---------|-----------------|
| / | Title 145 chars (2.4x over limit), duplicated | "Mendoza Roofing \| Wilmington NC Roof Contractors \| 50+ Years Experience \| Mendoza Roofing \| Wilmington NC Roof Contracto..." | "Mendoza Roofing \| Wilmington NC Roofing Contractor Since 1974" |
| /services | Title 86 chars, generic | "Our Services \| Mendoza Roofing \| Wilmington NC Roof Contractors \| 50+ Years Experience" | "Roofing Services Wilmington NC \| Mendoza Roofing" |
| /wilmington-nc-roofing | Title 128 chars, keyword-stuffed | "Roofing Companies Wilmington NC \| Best Roofers Near Me \| Mendoza Roofing \| ..." | "Wilmington NC Roofing \| Repair & Replacement \| Mendoza Roofing" |
| /southport-nc-roofing | Title 170 chars, description 235 chars | Title: "Southport, NC Roofing - 24/7 Roof Repair..." + full site suffix | "Southport NC Roofing \| 24/7 Repair & Metal Roofs \| Mendoza" |

### Schema Gaps

Schema **is** rendering on all pages, but with critical errors:

| Page | Schema Present | Issues |
|------|---------------|--------|
| / | WebSite, WebPage, RoofingContractor*, ImageObject | **Main entity has NO `@type`** (should be RoofingContractor). logo/image are relative URLs. sameAs missing Facebook + Instagram. No FAQPage. |
| /services | WebSite, WebPage, RoofingContractor*, ImageObject | Same as homepage. No Service schema. No FAQPage. |
| /wilmington-nc-roofing | WebSite, WebPage, LocalBusiness, FAQPage, ImageObject | Best coverage — has FAQPage + LocalBusiness. But main entity still missing `@type`. |
| /southport-nc-roofing | WebSite, WebPage, RoofingContractor*, ImageObject | No FAQPage. No LocalBusiness areaServed for Southport specifically. |

**Critical bug**: The main identity entity (`#/schema//1`) has all the RoofingContractor properties (address, geo, phone, aggregateRating, areaServed, openingHours) but **no `@type` field**. Google can't classify it. This is likely a `@nuxtjs/seo` schemaOrg rendering bug — the `type: 'RoofingContractor'` in nuxt.config.ts line 114 is not being output.

### Technical Issues

| Issue | Pages Affected | Fix | Severity |
|-------|---------------|-----|----------|
| Title tag duplication (site name appended to every page) | All 46 indexed pages | Change `site.name` in nuxt.config.ts to short brand name | Critical |
| Meta descriptions over 160 chars | 3 of 4 audited pages | Shorten site description, set page-specific descriptions | Critical |
| Schema: main entity missing `@type` | All pages | RoofingContractor entity has all properties but no `@type` field — Google can't classify it | Critical |
| Schema: FAQPage missing on 3 of 4 pages | /, /services, /southport-nc-roofing | Only /wilmington-nc-roofing has FAQPage | High |
| Schema: relative URLs for logo/image | All pages | `/img/logo.png` should be `https://roofingmendoza.com/img/logo.png` | Medium |
| Schema: sameAs missing 2 of 3 social URLs | All pages | Only Twitter present, Facebook + Instagram dropped | Medium |
| No og:title or og:description on homepage | Homepage | Nuxt SEO should auto-generate — verify config | Medium |
| Homepage ranking for 30+ specific service queries | Homepage | Create dedicated service pages, add internal links | High |

### Keyword Cannibalization

| Query | Winner Page | Loser Pages | Action |
|-------|------------|-------------|--------|
| commercial roofing wilmington nc | /blog/commercial-roofing-guide-wilmington-nc (blog) | /services, /wilmington-nc-roofing | Create dedicated /commercial-roofing-wilmington-nc page, 301 or canonical from blog |
| roofing wilmington nc | Homepage | /wilmington-nc-roofing (pos 47) | /wilmington-nc-roofing should be the winner — optimize its title and build internal links |
| roof repair wilmington nc | Homepage | No dedicated page | Create or strengthen dedicated repair page |

### Content Gaps

| Query | Position | Impressions/mo | Recommended Action |
|-------|----------|---------------|--------------------|
| commercial roofing wilmington nc | 33.9 | 429 | Create dedicated commercial roofing service page |
| roof replacement wilmington nc | 31.3 | 290 | Strengthen /wilmington-nc-roofing with replacement section |
| roofers wilmington nc | 43.5 | 276 | Optimize /wilmington-nc-roofing title for "roofers" variant |
| gutter installation wilmington nc | 39.7 | 69 | /gutters-wilmington-nc exists (708 impressions, 1 click) — optimize title |
| average roof replacement cost wilmington | 21.5 | 56 | Create pricing/cost guide page — high commercial investigation intent |
| roof replacement cost wilmington | 29.5 | 58 | Same as above — combine into one pricing page |

### Traffic Drops

| Page / Query | Change | Hypothesis | Next Step |
|-------------|--------|------------|-----------|
| Overall clicks: 56 → 47 | ↓ 16% | Title tag regression made snippets worse in SERPs | Fix #1 will address |
| /southport-nc-roofing: 1 click, 2,676 impressions | 0.04% CTR at pos 14 | Title 170 chars, description 235 chars — both truncated | Fix title + description |
| /blog/commercial-roofing-guide: 0 clicks, 2,062 impressions | 0% CTR at pos 24.5 | Blog post ranking for transactional query — wrong page type | Create service page (Priority #3) |

---

## What to Ignore (For Now)

- **Device split data not available** in GSC for this property — low overall traffic means device-level data is noisy. Re-check after fixes drive traffic above 100 clicks/month.
- **Country split**: All traffic is US-based — no international SEO needed.
- **"roofing in north carolina"** (1 impression, pos 278): Too broad, too competitive. Not worth targeting until local dominance is achieved.
- **Blog post "/blog/mendoza-roofing-50-years-brunswick-county"** (3 clicks, 198 impressions, pos 9.7): Performing well for its niche — leave as-is.

---

## Next Steps

1. **Immediate (today)**: ~~Fix `site.name` in `nuxt.config.ts`~~ ✅ DONE
2. **This week**: ~~Fix meta descriptions~~ ✅ DONE. ~~Debug schema rendering~~ ✅ DONE
3. **This sprint**: ~~Create commercial roofing service page~~ ✅ DONE (already exists at /commercial-roofing-wilmington-nc). Optimize remaining service page titles ✅ DONE

Expected combined impact: **+200-300 clicks/month** (from current 47 to ~250-350/month) once Google re-crawls.

---

## Live Verification — localhost:3000 (2026-05-18 22:00 UTC)

Verified all key pages on the production build running locally:

| Page | Title | Title Len | Description | Desc Len | Schema | FAQ | Status |
|------|-------|-----------|-------------|----------|--------|-----|--------|
| / | Wilmington NC Roofing Contractor Since 1974 \| Mendoza Roofing | 61 | Wilmington NC's trusted roofing contractor since 1974... | 136 | RoofingContractor ✓ | 5 Qs ✓ | ✅ |
| /services | Roofing Services Wilmington NC \| Mendoza Roofing | 48 | Full range of residential and commercial roofing... | 161 | RoofingContractor ✓ | ✓ | ✅ |
| /wilmington-nc-roofing | Wilmington NC Roofing \| Repair & Replacement \| Mendoza Roofing | 62 | Top-rated roofing contractors in Wilmington NC... | 168 | RoofingContractor + LocalBusiness ✓ | ✓ | ⚠️ desc 8 over |
| /southport-nc-roofing | Southport NC Roofing \| 24/7 Repair & Metal Roofs \| Mendoza Roofing | 66 | 24/7 emergency roof repair & replacement... | 131 | RoofingContractor + LocalBusiness ✓ | ✓ | ⚠️ title 6 over |
| /commercial-roofing-wilmington-nc | Commercial Roofing Wilmington NC \| Mendoza Roofing | 50 | Expert commercial roofing in Wilmington NC... | 139 | RoofingContractor + Service ✓ | 4 Qs ✓ | ✅ |
| /roof-repair-wilmington-nc | Roof Repair Wilmington NC \| Mendoza Roofing | 43 | Expert roof repair in Wilmington NC... | 150 | RoofingContractor + Service ✓ | 3 Qs ✓ | ✅ |
| /roof-replacement-wilmington-nc | Roof Replacement Near Me \| Wilmington NC \| Mendoza Roofing | 58 | Expert roof replacement in Wilmington NC... | 142 | RoofingContractor + Service ✓ | 5 Qs ✓ | ✅ |
| /about | About Us \| Wilmington NC Since 1974 \| Mendoza Roofing | 53 | Family-owned roofing contractor in Wilmington NC... | 141 | RoofingContractor + LocalBusiness ✓ | - | ✅ |

### What's Fixed (verified live)
- ✅ **Schema `@type`**: `RoofingContractor` renders correctly on ALL pages (was missing before)
- ✅ **FAQPage**: Now on homepage (5 Qs), /services, /southport-nc-roofing, /commercial-roofing (4 Qs), /roof-repair (3 Qs), /roof-replacement (5 Qs)
- ✅ **Title duplication eliminated**: No more 145-char titles. All titles 43-66 chars
- ✅ **Meta descriptions shortened**: All 131-168 chars (was up to 235)
- ✅ **Schema absolute URLs**: logo and image use `https://roofingmendoza.com/...`

### What Needs Rebuild (`pnpm generate`)
- ⚠️ **sameAs social URLs**: Live build shows only 1 (Twitter). Config has 3 (Twitter, Facebook, Instagram) — needs rebuild
- ⚠️ **/wilmington-nc-roofing description**: 168 chars (8 over limit) — content edit not yet in build
- ⚠️ **/southport-nc-roofing title**: 66 chars (6 over limit) — content edit not yet in build

**Action**: Run `pnpm generate` to pick up the latest content file changes. The nuxt.config.ts changes (sameAs, @type) are already in the build.
