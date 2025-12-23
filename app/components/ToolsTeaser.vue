<script setup lang="ts">
/**
 *
 * Component Description: Teaser section promoting roofing tools and calculators.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
</script>

<template>
    <section class="py-20 bg-teal-50 dark:bg-navy-800 border-y border-teal-100 dark:border-navy-700">
        <div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-navy-900 dark:text-white mb-6">
                    Planning a Roof Replacement?
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Use our free online tools to get a cost estimate or check for storm damage before calling a
                    professional. Empowering homeowners is our priority.
                </p>
                <div class="flex gap-4">
                    <NuxtLinkLocale to="/tools"
                        class="bg-teal-700 dark:bg-teal-600 text-white px-6 py-3 rounded-sm font-bold uppercase shadow-hard hover:bg-teal-800 dark:hover:bg-teal-700 flex items-center gap-2 transition-colors">
                        <UIcon name="i-heroicons-calculator" class="w-5 h-5" /> Cost Estimator
                    </NuxtLinkLocale>
                    <NuxtLinkLocale to="/tools"
                        class="bg-white dark:bg-navy-800 text-navy-900 dark:text-white border border-gray-300 dark:border-navy-600 px-6 py-3 rounded-sm font-bold uppercase shadow-sm hover:bg-gray-50 dark:hover:bg-navy-700 flex items-center gap-2 transition-colors">
                        <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" /> Safety Checklist
                    </NuxtLinkLocale>
                </div>
            </div>
            <div class="relative h-64 md:h-80 bg-navy-900 rounded-sm overflow-hidden shadow-hard">
                <NuxtImg
                    src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Roof Inspection" class="w-full h-full object-cover opacity-80" />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p class="text-white font-bold flex items-center gap-2">
                        <UIcon name="i-heroicons-wrench" class="w-4 h-4 text-gold-500" /> Free Tools Available
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
