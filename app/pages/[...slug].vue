<script setup lang="ts">
import type { Collections } from '@nuxt/content'

/**
 *
 *
 * @author Leamsigc<leamsigc@gmail.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { withLeadingSlash } from 'ufo'
const route = useRoute()
const collectionType = 'content'
const { locale, localeProperties } = useI18n()

const slug = computed(() => {
    const raw = route.params.slug
    if (raw === undefined || raw === '') return '/'
    if (Array.isArray(raw)) {
        if (raw.length === 0) return '/'
        return withLeadingSlash(raw.filter(Boolean).join('/'))
    }
    return withLeadingSlash(String(raw))
})
const collection = (`${collectionType}_${locale.value}`) as keyof Collections

const { data: pageData, refresh } = await useAsyncData(`page-${collection}-${slug.value}`, async () => {
  // Build collection name based on current locale
  const collection = ('content_' + locale.value) as keyof Collections
  const finalPath = `${locale.value === 'en' ? '' : `/${locale.value}`}${slug.value}`
  const content = await queryCollection(collection).path(finalPath).first()
  // Optional: fallback to default locale if content is missing
  if (!content && locale.value !== 'en') {
    const fallback = await queryCollection('content_en').path(slug.value).first()
    return { content: fallback, wasFallback: !!fallback }
  }

  return { content, wasFallback: false }
}, {
  watch: [locale], // Refetch when locale changes
})

const page = computed(() => pageData.value?.content || null)

// Spanish-only pages are served at the root (default locale) by i18n as empty
// shells. Redirect them to their canonical /es/ URL so Google doesn't index
// duplicate, empty pages and dilute crawl budget.
if (locale.value === 'en' && !page.value && slug.value !== '/') {
  const esDoc = await queryCollection('content_es').path(`/es${slug.value}`).first()
  if (esDoc) {
    await navigateTo(`/es${slug.value}`, { redirectCode: 301 })
  }
}

// Conversely, English-only pages that fall back to the default locale get an
// /es/ shell. Redirect them back to their canonical root URL.
if (locale.value === 'es' && pageData.value?.wasFallback && slug.value !== '/') {
  await navigateTo(slug.value, { redirectCode: 301 })
}

useHead(page.value?.head || {})

useSeoMeta(page.value?.seo || {})

defineOgImage('BlogOgImage',
  {
    ...page.value?.ogImage?.props 
  }
)

</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
