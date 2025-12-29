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
  future: {
    compatibilityVersion: 5
  },
  nitro: {
    experimental: {
      openAPI: true,
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
  routeRules: {
    '/blog/**': {
      seoMeta: {
        ogType: 'article'
      }
    },
    '/tools/**': {
      seoMeta: {
        ogType: 'tools'
      }
    }
  },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@400;500;700&display=swap' }
      ]
    }
  },

  site: {
    url: 'https://roofingmendoza.com/',
    name: 'Roofing Mendoza LLC - North Carolina Roofing Contractor',
    trailingSlash: true
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Roofing Mendoza LLC - North Carolina Roofing Contractor',
      logo: '/logo.png',
      sameAs: ['https://twitter.com/roofingmendoza']
    }
  },

  i18n: {
    langDir: '',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
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