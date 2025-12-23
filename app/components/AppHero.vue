<script setup lang="ts">
/**
 *
 * Component Description: Main Hero component for the Landing Page.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { COMPANY_INFO } from '~/utils/constants'
const { t } = useI18n()

interface Props {
    title?: string;
    description?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "MASTERING <br /> <span class='text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200'>THE ART OF</span> <br /> ROOFING",
    description: "Specializing in <strong class='text-white'>Residential</strong> and <strong class='text-white'>Commercial</strong> projects in Wilmington, Supply, and Brunswick County."
});
</script>

<template>
    <section class="relative bg-navy-900 text-white min-h-[85vh] flex items-center overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <NuxtImg src="/img/heroImage.png" alt="Roofing Construction Detail"
                class="w-full h-full object-cover opacity-30 mix-blend-luminosity" loading="eager" />
            <div class="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full pt-10">
            <div class="max-w-3xl">
                <div
                    class="flex items-center gap-2 text-gold-500 font-display font-bold tracking-widest uppercase mb-6 animate-fade-in">
                    <UIcon name="i-heroicons-star" class="w-5 h-5" />
                    <span>Premier Solutions since 1974</span>
                </div>

                <h1
                    class="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 text-white drop-shadow-2xl">
                    <slot name="title" mdc-unwrap="p">
                        <span v-html="title"></span>
                    </slot>
                </h1>

                <p
                    class="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed border-l-4 border-gold-500 pl-6">
                    <slot name="description" mdc-unwrap="p">
                        <span v-html="description"></span>
                    </slot>
                </p>

                <div class="flex flex-col sm:flex-row gap-4">
                    <a :href="`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`"
                        class="bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-display font-bold text-xl hover:bg-white transition-all shadow-hard flex justify-center items-center gap-3 uppercase tracking-wider">
                        <UIcon name="i-heroicons-phone" class="w-6 h-6" /> {{ t('common.cta_call') }}
                    </a>
                    <NuxtLinkLocale to="/contact"
                        class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-display font-bold text-xl hover:bg-white hover:text-navy-900 transition-all flex justify-center items-center gap-3 uppercase tracking-wider">
                        {{ t('common.cta_quote') }}
                    </NuxtLinkLocale>
                </div>
            </div>
        </div>

        <!-- Scroll Down Indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
            <UIcon name="i-heroicons-arrow-right" class="w-8 h-8 rotate-90" />
        </div>
    </section>
</template>
