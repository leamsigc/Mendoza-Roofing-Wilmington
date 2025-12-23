<script setup lang="ts">
/**
 *
 * Component Description: Customer testimonials section with ratings.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { TESTIMONIALS } from '~/utils/constants'
</script>

<template>
    <section class="py-24 bg-concrete-100 dark:bg-navy-900">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-display font-bold text-navy-900 dark:text-white uppercase mb-4">
                    What Neighbors Say</h2>
                <div
                    class="inline-flex items-center gap-2 bg-white dark:bg-navy-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-navy-700">
                    <span class="font-bold text-navy-900 dark:text-white">5.0</span>
                    <div class="flex text-gold-500">
                        <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" class="w-4 h-4" />
                    </div>
                    <span class="text-gray-500 dark:text-gray-400 text-sm">on Google Reviews</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="t in TESTIMONIALS" :key="t.id"
                    class="bg-white dark:bg-navy-950 p-8 rounded-sm shadow-sm border-t-4 border-gold-500 relative flex flex-col h-full">
                    <div class="flex text-gold-500 mb-4">
                        <UIcon v-for="i in t.rating" :key="i" name="i-heroicons-star-solid" class="w-4 h-4" />
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-lg italic mb-6 flex-grow">"{{ t.content }}"</p>
                    <div class="pt-4 border-t border-gray-100 dark:border-navy-800">
                        <p class="font-display font-bold text-navy-900 dark:text-white uppercase">{{ t.name }}</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest">{{ t.role }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
