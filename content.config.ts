import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import {
  defineOgImageSchema,
  defineRobotsSchema,
  defineSchemaOrgSchema,
  defineSitemapSchema,
} from '@nuxtjs/seo/content'


const baseFields = {
  layout: z.enum(['default', 'blog-layout']).default('blog-layout'),
  title: z.string(),
  description: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()).optional(),
  date: z.string(),
  publishedAt: z.string(),
  head: z.object({
    meta: z.array(z.object({
      name: z.string(),
      content: z.string(),
    })),
    htmlAttrs: z.object({
      lang: z.string(),
    }).optional(),
    bodyAttrs: z.object({
      class: z.string(),
    }).optional(),
  }),
  category: z.string(),
  featured: z.boolean().default(false),
  author: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    social: z.string(),
  }),
  ogImage: defineOgImageSchema(),
  robots: defineRobotsSchema(),
  schemaOrg: defineSchemaOrgSchema(),
}

const enSchema = z.object({
  ...baseFields,
  sitemap: defineSitemapSchema({ name: 'content_en', z }),
})

const esSchema = z.object({
  ...baseFields,
  sitemap: defineSitemapSchema({
    name: 'content_es',
    z,
    onUrl: (url) => {
      if (!url.loc.startsWith('/es')) {
        url.loc = `/es${url.loc}`
      }
    },
  }),
})

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: enSchema,
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: 'es',
      },
      schema: esSchema,
    }),
  },
})
