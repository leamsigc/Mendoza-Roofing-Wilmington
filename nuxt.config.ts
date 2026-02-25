import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import type { NuxtPage } from 'nuxt/schema'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  /* 
    Developer options
  */
  devtools: { enabled: true },
  experimental: {
    viteEnvironmentApi: true,
    typescriptPlugin: true
  },
  runtimeConfig: {
    public: {
      // trailingSlash: false,
    }
  },
  future: {
    compatibilityVersion: 5
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: true,
      // add any routes to prerender
      routes: ['/']
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    'nuxt-seo-utils',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-vitalizer',
    'nuxt-umami',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  // routeRules: {
  //   '/blog/**': {
  //     seoMeta: {
  //       ogType: 'article'
  //     }
  //   },
  //   '/tools/**': {
  //     seoMeta: {
  //       ogType: 'tools'
  //     }
  //   }
  // },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700,],
      styles: ['normal', 'italic'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin'
      ]
    },
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Oswald', provider: 'google' }
    ]
  },

  site: {
    url: 'https://roofingmendoza.com/',
    name: 'Roofing Mendoza LLC - North Carolina Roofing Contractor',
    defaultLocale: 'en',
    // trailingSlash: false
  },
  content: {
    build: {

    }
  },
  // robots: {
  //   disallow: [
  //     "/app/**"
  //   ]
  // },
  sitemap: {
    autoI18n: true,
    autoLastmod: true,
    discoverImages: true,
    discoverVideos: true,
    chunks: false,
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Mendoza Roofing LLC',
      logo: '/img/logo.png',
      image: '/img/MendozaRoofingShallotte.png',
      description: 'Licensed roofing contractors in Wilmington, Supply, and Brunswick County NC with 50+ years of experience. Expert roof repair, replacement, commercial roofing, and emergency services.',
      telephone: '910-367-7628',
      email: 'contact@roofingmendoza.com',
      url: 'https://roofingmendoza.com',
      address: {
        streetAddress: 'P.O. Box 952',
        addressLocality: 'Supply',
        addressRegion: 'NC',
        postalCode: '28462',
        addressCountry: 'US'
      },
      geo: {
        latitude: 33.9416,
        longitude: -78.2733
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00'
        }
      ],
      areaServed: [
        { type: 'City', name: 'Wilmington', containedInPlace: { type: 'State', name: 'North Carolina' } },
        { type: 'City', name: 'Supply', containedInPlace: { type: 'State', name: 'North Carolina' } },
        { type: 'County', name: 'Brunswick County', containedInPlace: { type: 'State', name: 'North Carolina' } },
        { type: 'City', name: 'Shallotte', containedInPlace: { type: 'State', name: 'North Carolina' } },
        { type: 'City', name: 'Oak Island', containedInPlace: { type: 'State', name: 'North Carolina' } },
        { type: 'City', name: 'Leland', containedInPlace: { type: 'State', name: 'North Carolina' } }
      ],
      priceRange: '$$',
      aggregateRating: {
        ratingValue: '5.0',
        reviewCount: '50'
      },
      sameAs: [
        'https://twitter.com/roofingmendoza',
        'https://www.facebook.com/mendozaRoofingCompanyWilmington',
        'https://www.instagram.com/mendozaroofingnc'
      ]
    }
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  umami: {
    id: '3e769e50-daf4-4542-8056-a18c02cf11e1',
    host: 'https://umami.giessen.dev',
    autoTrack: true,
    ignoreLocalhost: true
  },

  /* Hooks */
  hooks: {
    'pages:extend': function (pages) {
      const pagesToRemove: NuxtPage[] = []
      pages.forEach((page) => {
        const pathsToExclude = ['types', 'components', '/api', 'composables', 'utils', '.json']
        if (pathsToExclude.some(excludePath => page.path.includes(excludePath))) {
          pagesToRemove.push(page)
        }
      })
      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1)
      })
    }
  },
})