<script setup lang="ts">
const localePath = useLocalePath()
const { t, locale, setLocale } = useI18n()
const colorMode = useColorMode()

const links = computed(() => [
    { label: t('nav.home'), to: '/', icon: 'i-heroicons-home' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.tools'), to: '/tools' },
    { label: t('nav.insights'), to: '/blog' },
    { label: t('nav.contact'), to: '/contact' }
])

const toggleLanguage = () => {
    setLocale(locale.value === 'en' ? 'es' : 'en')
}

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-gray-100/10 dark:bg-gray-900/75 backdrop-blur-md">
        <UContainer class="flex items-center justify-between h-16">
            <div class="flex items-center gap-1.5">
                <NuxtLinkLocale to="/"
                    class="flex items-center gap-1 font-oswald text-xl font-bold text-navy-900 dark:text-white overflow-hidden">
                    <NuxtImg
                        :src="colorMode.preference === 'dark' ? '/img/logoTransparent-1-5-exact.png' : '/img/logoWhite.jpg'"
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
                <UButton color="secondary" variant="ghost" icon="i-heroicons-language" @click="toggleLanguage"
                    class="hidden md:flex" title="Language toggle" />
                <UButton color="secondary" variant="ghost"
                    :icon="colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'" @click="toggleTheme"
                    title="Theme toggle" />
                <UButton to="/contact" color="neutral" variant="solid" class="hidden md:flex font-oswald font-bold">
                    910-367-7628
                </UButton>
                <!-- Mobile Menu Button Placeholder -->
                <UButton icon="i-heroicons-bars-3" color="neutral" variant="ghost" class="md:hidden"
                    title="Menu toggle" />
            </div>
        </UContainer>
    </header>
</template>
