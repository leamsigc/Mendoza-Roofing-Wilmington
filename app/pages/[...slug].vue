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
const collectionType = route.path.startsWith('/blogs/') ? 'blog' : 'content'
const { locale, localeProperties } = useI18n()

const slug = computed(() => withLeadingSlash(String(route.params.slug)))


const { data: page } = await useAsyncData(`page-${slug.value}`, async () => {

  const collection = (`${collectionType}_${locale.value}`) as keyof Collections
  const path = collectionType === 'blog' ? `${route.path.replace('/blogs', '')}` : slug.value


  let content = await queryCollection(collection).path(`${path}`).first()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== 'en') {
    const defaultCollection = (`${collectionType}_en`) as keyof Collections;
    content = await queryCollection(defaultCollection).path(`${slug.value}`).first()
  }

  return content
}, {
  watch: [locale],
})

useHead(page.value?.meta || {})

useSeoMeta(page.value?.seo || {})
if (page.value?.ogImage) {
  defineOgImage(page.value?.ogImage)
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
