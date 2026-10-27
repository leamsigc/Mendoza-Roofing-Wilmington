<script setup lang="ts">
/**
 * Locale-aware internal link.
 *
 * `to` is always the canonical English route. The component resolves the
 * translated slug for the active locale through `i18n/translation-pairs.json`
 * so Spanish pages never link to `/es/<english-slug>` (which 301s back to
 * English and shows up in Ahrefs as "link to redirect").
 */
defineOptions({ inheritAttrs: false })

const props = defineProps<{ to: string }>()
const { locale } = useI18n()

const target = computed(() => localizePath(props.to, locale.value))
</script>

<template>
  <NuxtLink :to="target" v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>
