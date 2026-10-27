<script lang="ts" setup>
/**
 *
 * Base root page
 *
 * @author Leamsigc <leamsigc@gmail.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [✔] Update the typescript.
 */
const route = useRoute()

// `dir` + `lang` come from i18n. Alternate/canonical links are generated
// below from the translation registry instead of `switchLocalePath`, because
// the catch-all content route cannot infer translated slugs.
const i18nHead = useLocaleHead({ dir: true, lang: true, seo: false })

const canonicalUrl = computed(() => `${canonicalSiteUrl}${route.path === '/' ? '/' : route.path}`)

useHead(() => ({
  ...i18nHead.value,
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    ...alternateUrls(route.path),
  ],
}))
</script>

<template>
  <UApp>
    <div class="data-vaul-drawer-wrapper" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<style scoped></style>
