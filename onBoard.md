# Mendoza Roofing Website

## Stack
- **Framework**: Nuxt 4 (`nuxt: 4.3.0`)
- **Content**: `@nuxt/content` (v3) — markdown files in `content/{locale}/`
- **UI**: `@nuxt/ui` (v4) + Tailwind CSS
- **i18n**: `@nuxtjs/i18n` (en/es), strategy `prefix_except_default`
- **SEO**: `@nuxtjs/seo` + `nuxt-seo-utils` + `nuxt-og-image`

## Project Structure
```
content/en/                  # English markdown pages (Nuxt Content)
  index.md                   # Homepage (uses ::AppHero component)
  brunswick-county-roofing.md
  calabash-nc-roofing.md
  commercial-roofing-wilmington-nc.md
  roof-repair-wilmington-nc.md
  roof-replacement-wilmington-nc.md
  shallotte-nc-roofing.md
  about.md
  services.md
  + 20 more location/service pages
  blog/                     # Blog posts (50+ files)
    index.md                # Blog listing
    roofing-company-shallotte-nc.md
    mendoza-roofing-50-years-brunswick-county.md
    commercial-roofing-guide-wilmington-nc.md
    + 25 more posts
content/es/                  # Spanish translations (mirror of en/)

app/                         # Vue app
  components/
    AppHero.vue              # Homepage hero (has <h1>)
    PageHero.vue             # Internal page hero (has <h1>)
    AppCta.vue               # CTA section used at bottom of pages
    [... more components]
  layouts/
    default.vue              # Default layout (AppHeader + main + ContactSection + AppFooter)
    BlogLayout.vue           # Blog-specific layout
  pages/
    [...slug].vue            # Catch-all page renderer for content/*
  utils/constants.ts

nuxt.config.ts               # SEO config, schemaOrg identity, i18n, sitemap
```

## How Pages Get Rendered
1. Markdown files in `content/en/` → rendered by `[...slug].vue` catch-all page
2. Frontmatter controls SEO: `title`, `description`, `head.meta`, `head.link`, `ogImage`, `schemaOrg`
3. `useHead(page.value?.head || {})` renders SEO tags from frontmatter `head` block
4. Body content uses MDC components: `::PageHero`, `::AppCta` etc.

## Frontmatter SEO Fields
```yaml
---
title: 'Page Title (renders in <title> tag)'
description: 'Meta description'
head:
  link:
    - rel: 'canonical'
      href: 'https://roofingmendoza.com/target-page'
  meta:
    - name: 'keywords'
      content: 'kw1, kw2, kw3'
ogImage:
  component: 'BlogOgImage'
  props:
    title: 'OG Title'
    description: 'OG Description'
    image: '/img/image.png'
    headline: 'OG Headline'
schemaOrg:
  - "@type": "LocalBusiness"
    ...
---
```

## SEO Conventions
- **All service pages** use `::PageHero` (renders `<h1>`) → body content should use `## H2` NOT `# H1` to avoid duplicate H1s
- **Blog posts without PageHero** use `# H1` as single page H1
- **Canonical tags**: Add `head.link` with `rel: canonical` for duplicate/cannibalized content
- **Winner pages** get `href` pointing to themselves; **loser blog pages** get canonical pointing to the winner service page
- **Phone**: `910-367-7628` throughout

## Key SEO Pages & Canonical Map
| URL | Role | Canonical | Notes |
|-----|------|-----------|-------|
| `/brunswick-county-roofing` | Winner for "roofing company near me" (Brunswick) | self | Title updated with "Near Me" |
| `/calabash-nc-roofing` | Strong rank (pos 5.8) for "near me" queries | self | Title updated with "Near Me" |
| `/commercial-roofing-wilmington-nc` | Winner for commercial queries | self | |
| `/roof-replacement-wilmington-nc` | Winner for replacement queries | self | Title differentiated from repair |
| `/roof-repair-wilmington-nc` | Winner for repair queries | self | |
| `/shallotte-nc-roofing` | Winner for Shallotte queries | self | |
| `/about` | Company story page | self | |
| `/blog/roofing-company-shallotte-nc` | Loser (informational) | → `/shallotte-nc-roofing` | Title changed to "How to Choose..." |
| `/blog/mendoza-roofing-50-years-brunswick-county` | Loser | → `/about` | |
| `/blog/commercial-roofing-guide-wilmington-nc` | Loser | → `/commercial-roofing-wilmington-nc` | |

## Build & Test
```bash
pnpm dev        # Dev server
pnpm build      # Nuxt generate (static)
pnpm test       # Vitest
pnpm test:nuxt  # Nuxt-specific tests
```

## Content Guidelines
- All service/location pages should target UNIQUE keyword clusters — no overlapping queries
- Blog posts should either complement service pages (informational) or canonical to the relevant service page
- "Near me" queries should be handled by location-specific service pages, not blog posts
- Every page needs unique title (55-75 chars) and description (150-170 chars)
