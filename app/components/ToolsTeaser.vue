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
const { locale } = useI18n()
const isEs = computed(() => locale.value === 'es')
</script>

<template>
    <section class="py-20 bg-teal-50 dark:bg-navy-800 border-y border-teal-100 dark:border-navy-700">
        <div class="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-3xl md:text-5xl font-display font-bold text-navy-900 dark:text-white mb-6">
                    {{ isEs ? '¿Planea reemplazar su techo?' : 'Planning a Roof Replacement?' }}
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {{ isEs
                        ? 'Use nuestras herramientas gratuitas para estimar costos o revisar daños por tormentas antes de llamar a un profesional. Empoderar a los propietarios es nuestra prioridad.'
                        : 'Use our free online tools to get a cost estimate or check for storm damage before calling a professional. Empowering homeowners is our priority.' }}
                </p>
                <div class="flex gap-4">
                    <NuxtLinkLocale to="/tools"
                        class="bg-teal-700 dark:bg-teal-600 text-white px-6 py-3 rounded-sm font-bold uppercase shadow-hard hover:bg-teal-800 dark:hover:bg-teal-700 flex items-center gap-2 transition-colors">
                        <UIcon name="i-heroicons-calculator" class="w-5 h-5" /> {{ isEs ? 'Calculadora de Costos' : 'Cost Estimator' }}
                    </NuxtLinkLocale>
                    <NuxtLinkLocale to="/tools"
                        class="bg-white dark:bg-navy-800 text-navy-900 dark:text-white border border-gray-300 dark:border-navy-600 px-6 py-3 rounded-sm font-bold uppercase shadow-sm hover:bg-gray-50 dark:hover:bg-navy-700 flex items-center gap-2 transition-colors">
                        <UIcon name="i-heroicons-clipboard-document-check" class="w-5 h-5" /> {{ isEs ? 'Lista de Seguridad' : 'Safety Checklist' }}
                    </NuxtLinkLocale>
                </div>
            </div>
            <div class="relative h-64 md:h-80 bg-navy-900 rounded-sm overflow-hidden shadow-hard">
                <NuxtImg src="/img/roofingMendozaSolarPanels.png" :alt="isEs ? 'Inspección de techo' : 'Roof Inspection'"
                    class="w-full h-full object-cover opacity-80" />
                <div class="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/80 to-transparent">
                    <p class="text-white font-bold flex items-center gap-2">
                        <UIcon name="i-heroicons-wrench" class="w-4 h-4 text-gold-500" /> {{ isEs ? 'Herramientas Gratis Disponibles' : 'Free Tools Available' }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
