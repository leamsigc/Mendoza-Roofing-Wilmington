
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import type { NuxtPage } from 'nuxt/schema'

const currentDir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({

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
    '@nuxtjs/i18n',
    'nuxt-seo-utils',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-vitalizer',
    'nuxt-umami',
    '@nuxt/content',
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
  site: {
    url: 'https://roofingmendoza.com/',
    name: 'Roofing Mendoza  LLC - North Carolina Roofing Contractor'
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Roofing Mendoza  LLC - North Carolina Roofing Contractor',
      logo: '/logo.png',
      sameAs: ['https://twitter.com/roofingmendoza']
    }
  },
  i18n: {
    vueI18n: join(currentDir, './translations/i18n.config.ts'),
    baseUrl: process.env.NUXT_APP_URL,
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'es', language: 'es-ES', name: 'Español' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },

  umami: {
    id: '55b75e65-727f-44ae-',
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