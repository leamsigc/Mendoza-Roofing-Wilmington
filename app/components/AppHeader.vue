<script setup lang="ts">
const localePath = useLocalePath()
const { t, locale, setLocale } = useI18n()
const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

const links = computed(() => [
    { label: t('nav.home'), to: '/', icon: 'i-heroicons-home' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.tools'), to: '/tools' },
    { label: t('nav.insights'), to: '/blog' },
    { label: t('nav.contact'), to: '/contact' }
])
colorMode.preference = 'dark'


const toggleLanguage = (locale: 'en' | 'es') => {
    setLocale(locale)
}
definePageMeta({
    colorMode: 'dark',
})
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-gray-100/10 dark:bg-gray-900/75 backdrop-blur-md">
        <UContainer class="flex items-center justify-between h-16">
            <div class="flex items-center gap-1.5">
                <NuxtLinkLocale to="/"
                    class="flex items-center gap-1 font-oswald text-xl font-bold text-navy-900 dark:text-white overflow-hidden">
                    <img :src="colorMode.preference === 'dark' ? '/img/logoTransparent-1-5-exact.png' : '/img/logoWhite.jpg'"
                        alt="Mendoza Roofing"
                        :class="colorMode.preference === 'dark' ? 'w-14 h-12 object-contain' : 'w-24 h-16 object-contain'" />
                </NuxtLinkLocale>
            </div>

            <nav class="hidden md:flex items-center gap-6">
                <NuxtLinkLocale v-for="link in links" :key="link.to" :to="link.to"
                    class="text-sm cursor-pointer font-medium text-navy-600 hover:text-gold-500 dark:text-gray-300 dark:hover:text-gold-400 transition-colors uppercase tracking-wide font-oswald"
                    active-class="text-gold-600 dark:text-gold-400">
                    {{ link.label }}
                </NuxtLinkLocale>
            </nav>

            <div class="flex items-center gap-2">
                <SwitchLocalePathLink locale="es" :class="{ 'text-gold-600 dark:text-gold-400': locale === 'es' }"
                    @click="toggleLanguage('es')" class="text-sm font-medium min-h-11 flex items-center px-1">
                    ES
                </SwitchLocalePathLink>
                <SwitchLocalePathLink locale="en" @click="toggleLanguage('en')"
                    :class="{ 'text-gold-600 dark:text-gold-400': locale === 'en' }"
                    class="text-sm font-medium min-h-11 flex items-center px-1">
                    EN
                </SwitchLocalePathLink>
                <UButton color="secondary" variant="ghost"
                    :icon="colorMode.preference === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'"
                    @click="$colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'"
                    title="Theme toggle" />
                <UButton to="tel:9103677628" color="neutral" variant="solid"
                    class="md:flex font-oswald font-bold min-h-[44px]">
                    910-367-7628
                </UButton>
                <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" class="md:hidden min-h-[44px]"
                    title="Menu toggle" @click="isMobileMenuOpen = !isMobileMenuOpen" />
            </div>
        </UContainer>
        <div v-if="isMobileMenuOpen"
            class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
            <UContainer class="py-4">
                <nav class="flex flex-col gap-3">
                    <NuxtLinkLocale v-for="link in links" :key="link.to" :to="link.to"
                        class="text-base font-medium text-navy-600 hover:text-gold-500 dark:text-gray-300 dark:hover:text-gold-400 transition-colors uppercase tracking-wide font-oswald min-h-[48px] flex items-center"
                        active-class="text-gold-600 dark:text-gold-400" @click="isMobileMenuOpen = false">
                        {{ link.label }}
                    </NuxtLinkLocale>
                </nav>
            </UContainer>
        </div>
    </header>
</template>
