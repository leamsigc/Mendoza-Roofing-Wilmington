<script setup lang="ts">
/**
 *
 * Component Description: Generic Hero component for content pages.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

interface Props {
    title: string
    subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    subtitle: ''
})
</script>

<template>
    <section class="bg-navy-900 text-white py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
            <h1 class="text-4xl md:text-6xl font-display font-black mb-6 uppercase">
                <slot name="title" mdc-unwrap="p"> {{ title }} </slot>
            </h1>
            <div class="inline-block border-2 border-gold-500 px-6 py-2 rounded-full">
                <p class="text-xl md:text-2xl text-gold-400 font-bold uppercase tracking-widest">
                    <slot name="subtitle" mdc-unwrap="p"> {{ subtitle }} </slot>
                </p>
            </div>
        </div>
    </section>
</template>
