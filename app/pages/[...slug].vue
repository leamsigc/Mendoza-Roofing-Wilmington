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

const slug = computed(() => {
  const params = route.params.slug
  if (!params) return '/'
  return Array.isArray(params) ? withLeadingSlash(params.join('/')) : withLeadingSlash(String(params))
})


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

defineOgImageComponent('BlogOgImage',
  {
    title: page.value?.ogImage?.props.title || 'Roofing Mendoza LLC',
    description: page.value?.ogImage?.props.description || 'Most affordable roofing contractor in North Carolina,wilmington',
    imageUrl: page.value?.ogImage?.props.image || 'https://roofingmendoza.com/img/HomeHeroBg.png',
    headline: page.value?.ogImage?.props.headline || 'Roofing',
  }
)
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
