<script setup lang="ts">
/**
 *
 * Component Description: Call to Action section.
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
    title: '',
    description: "Don't wait for a leak to become a disaster. Get your free professional evaluation today."
});

const displayTitle = computed(() => props.title || t('common.need_help'))
</script>

<template>
    <section class="py-20 bg-teal-700 dark:bg-teal-900 text-white relative overflow-hidden">
        <!-- Grid Pattern Overlay -->
        <div
            class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light">
        </div>

        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 class="text-5xl md:text-7xl font-display font-bold mb-8 uppercase leading-none">
                <slot name="title" mdc-unwrap="p"> {{ displayTitle }} </slot>
            </h2>
            <p class="text-2xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
                <slot name="description" mdc-unwrap="p">
                    {{ description }}
                </slot>
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a :href="`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`"
                    class="bg-navy-900 text-white px-10 py-5 rounded-sm font-display font-bold text-2xl hover:bg-navy-800 transition-colors shadow-hard border-2 border-navy-900 uppercase flex items-center justify-center gap-2">
                    Call {{ COMPANY_INFO.phone }}
                </a>
                <NuxtLinkLocale to="/contact"
                    class="bg-white text-teal-800 px-10 py-5 rounded-sm font-display font-bold text-2xl hover:bg-gray-100 transition-colors shadow-hard uppercase flex items-center justify-center gap-2">
                    {{ t('common.cta_quote') }}
                </NuxtLinkLocale>
            </div>
        </div>
    </section>
</template>
