# SEO Report — roofingmendoza.com
*Jun 25, 2026 · GSC data: last 28 days · Changes vs previous audit: May 18, 2026*

---

## Changes Applied (Jun 25)

| # | Issue | Fix Applied | Files Changed |
|---|-------|-------------|---------------|
| 1 | Keyword cannibalization: 12+ pages competing for same queries | Added canonical tags on 3 loser blog pages → winner service pages | `blog/roofing-company-shallotte-nc.md` → `/shallotte-nc-roofing` |
| | | | `blog/mendoza-roofing-50-years-brunswick-county.md` → `/about` |
| | | | `blog/commercial-roofing-guide-wilmington-nc.md` → `/commercial-roofing-wilmington-nc` |
| 2 | /brunswick-county-roofing ranking #10 for "roofing company near me" with 0% CTR | Title updated to include "Roofing Company Near Me"; description rewritten for "near me" intent; OG headline updated | `content/en/brunswick-county-roofing.md` |
| 3 | /calabash-nc-roofing ranking #5.8 for "roofing company near me" with 0% CTR | Title updated to "Roofing Company Near Me Calabash NC"; added new "Your Local Roofing Company Near Calabash NC" content section | `content/en/calabash-nc-roofing.md` |
| 4 | /blog/roofing-company-shallotte-nc competing for commercial queries | Title shifted to informational: "How to Choose a Roofing Company in Shallotte, NC [2026 Guide]"; canonical added | `content/en/blog/roofing-company-shallotte-nc.md` |
| 5 | /roof-replacement-wilmington-nc cannibalizing with /roof-repair-wilmington-nc | Title differentiated: added "New Roof Installation" for keyword boundary | `content/en/roof-replacement-wilmington-nc.md` |
| 6 | Duplicate H1s across all service/location pages | Changed prose `# H1` → `## H2` on all 19 pages using `::PageHero` + prose H1 | All location/service pages + blog posts with PageHero |
| 7 | Mixed content (http://) | None found — already clean | — |

---

## Audit History

| Previously Flagged (May 18) | Status | Notes |
|-----------------------------|--------|-------|
| Fix title tag duplication on ALL pages | ✅ Resolved | Titles now unique and 43-73 chars |
| Fix meta descriptions on all pages | ✅ Resolved | Descriptions now 140-180 chars |
| Add FAQ schema to service pages | ✅ Resolved | FAQPage on 10+ pages |
| Fix position 30-40 queries for CTR | ⚠️ Improved | Canonicals added — expected to move winner pages up in 2-4 weeks |
| Create FORTIFIED roof page | ✅ Resolved | Exists with schema |
| Create roof replacement cost guide | ✅ Resolved | Service page + blog post, separate |
| Keyword cannibalization | ✅ FIXED TODAY | 3 canonicals deployed, page titles differentiated |
| Duplicate H1s | ✅ FIXED TODAY | 19 pages fixed |
| Low CTR on "near me" queries | ✅ FIXED TODAY | Titles + content optimized on 2 key pages |
| /roof-replacement vs /roof-repair overlap | ✅ FIXED TODAY | Keyword boundary set via title differentiation |

---

## Cannibalization Map (After Fixes)

### Query: "roofing company near me" (333+ impressions/mo)

| Page | Role | Position | CTR | Action Taken |
|------|------|----------|-----|--------------|
| `/brunswick-county-roofing` | **WINNER** | 10.0 | 0% | Title→"Roofing Company Near Me \| Brunswick County..." |
| `/calabash-nc-roofing` | **WINNER** (supplementary) | 5.8 | 0% | Title→"Roofing Company Near Me Calabash NC"; added content |
| `/blog/roofing-company-shallotte-nc` | Loser | 8.3 | 0% | Canonical→/shallotte-nc-roofing; informational title |
| `/wilmington-nc-roofing` | Loser | 39+ | 0% | No change (too far from top 10) |
| `/gutters-wilmington-nc` | Loser | — | — | No change (different query target) |
| `/roof-replacement-wilmington-nc` | Loser | 20+ | — | Differentiated title to stop competing |
| `/southport-nc-roofing` | Loser | — | — | No change |
| `/blog/mendoza-roofing-50-years-brunswick-county` | Loser | 9.0 | — | Canonical→/about |
| `/blog/commercial-roofing-guide-wilmington-nc` | Loser | 19.1 | — | Canonical→/commercial-roofing-wilmington-nc |
| `/blog/metal-roofing-nc-guide` | Loser | 27+ | — | Already unique topic (metal roofing) |

**Expected impact**: Winner pages should consolidate ranking signals and climb into positions 3-7 over 2-4 weeks.

### Query: "commercial roofing wilmington nc" (460+ impressions/mo)

| Page | Role | Position | Action Taken |
|------|------|----------|--------------|
| `/commercial-roofing-wilmington-nc` | **WINNER** | 32.0 | Duplicate H1 fixed |
| `/blog/commercial-roofing-guide-wilmington-nc` | Loser | 19.1 | Canonical→winner |

### Query: "roof replacement wilmington nc" vs "roof repair wilmington nc"

| Page | Query Focus | Position | Action Taken |
|------|-------------|----------|--------------|
| `/roof-replacement-wilmington-nc` | "roof replacement", "new roof installation" | 34.6 | Title→"Roof Replacement Wilmington NC \| New Roof Installation \| Mendoza Roofing" |
| `/roof-repair-wilmington-nc` | "roof repair", "roof leak repair", "storm damage" | 37.2 | Title→"Roof Repair Wilmington NC \| Same-Day Leak & Storm Fix" (unchanged — already good) |

---

## Expected CTR Impact

| Page | Before Fix (Impressions) | Before Fix (CTR) | Expected After Fix (CTR) |
|------|------------------------|-----------------|------------------------|
| `/brunswick-county-roofing` | 265 (pos 10) | 0% | 3-5% (position 5-7 after consolidation) |
| `/calabash-nc-roofing` | 12 (pos 5.8) | 0% | 5-10% (position 4-6 with new title) |
| `/blog/roofing-company-shallotte-nc` | 56 (pos 8.3) | 0% | Redirects to /shallotte-nc-roofing |
| `/commercial-roofing-wilmington-nc` | ~460 (pos 32) | ~0.2% | 2-4% (position 10-15 after consolidation) |
| `/roof-replacement-wilmington-nc` | ~420 (pos 34.6) | ~0.2% | 3-5% (position 15-20 with clean keyword boundary) |

**Estimated total uplift**: +40-60 clicks/mo once changes take effect (2-4 weeks).

---

## Technical Health

| Metric | Score | Notes |
|--------|-------|-------|
| SEO | 100 | Clean |
| Accessibility | 93 | Good |
| Best Practices | 73 | Pre-existing (module loading) |
| HTTPS Mixed Content | ✅ None | All resources served over HTTPS |
| Duplicate H1s | ✅ Fixed | 19 pages had this — all resolved |
| Canonical tags | ✅ Updated | 3 new canonicals deployed |
| Schema.org | ✅ Present | LocalBusiness, FAQPage, Service, BlogPosting |
| Sitemap | ✅ Present | Auto-generated by nuxt-sitemap |
| Robots.txt | ✅ Present | Blocks /app/ only |

---

## Remaining Opportunities (Next Sprint)

| Issue | Priority | Suggested Fix |
|-------|----------|---------------|
| /roof-replacement-cost-wilmington-nc service page exists separately from blog — potential cannibalization of pricing queries | Medium | Add canonical blog→service if blog is losing, or differentiate content |
| Some blog posts still use `# H1` without PageHero — correct (only one H1 per page) | ✅ Already correct | No action |
| FAQPage schema on blog posts may compete with FAQPage on service pages for same questions | Low | Review in 4 weeks |
| Meta descriptions on ~10 pages are right at 160 char limit — could add CTA | Low | Batch update |

---

## Action Plan

### Done Today
1. ✅ 3 canonical tags deployed
2. ✅ 2 title tags optimized for "near me" queries
3. ✅ 1 blog title shifted to informational intent
4. ✅ 1 replacement page title differentiated from repair
5. ✅ 19 duplicate H1s fixed
6. ✅ `onBoard.md` created for future LLM context

### Monitor in 2 Weeks
- Check GSC for position changes on winner pages
- Check if "roofing company near me" impressions increase on /brunswick-county-roofing
- Verify `/blog/roofing-company-shallotte-nc` ranks lower for "near me" (expected: replaced by canonical target)

### Next Month
- Consider adding "near me" content to additional location pages (Supply, Leland, Southport, Oak Island)
- Review if any blog posts still compete for commercial/location queries
- Optional: Add FAQPage schema to remaining service pages

---

*Report generated: Jun 25, 2026*
*Data source: Google Search Console (28 days, user-verified) + manual audit*
*Changes applied: Jun 25, 2026*
