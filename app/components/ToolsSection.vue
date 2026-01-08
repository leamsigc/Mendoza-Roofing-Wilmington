<script setup lang="ts">
import { SEO_KEYWORDS } from '~/utils/constants'

// Calculator State
const sqFt = ref(4000)
const material = ref('asphalt')
const complexity = ref('average')

const estimate = computed(() => {
    let baseRate = 0
    switch (material.value) {
        case 'asphalt': baseRate = 5; break;
        case 'metal': baseRate = 8; break;
        case 'tile': baseRate = 9; break;
    }

    let complexityMultiplier = 1
    switch (complexity.value) {
        case 'simple': complexityMultiplier = 0.75; break;
        case 'average': complexityMultiplier = 1; break;
        case 'complex': complexityMultiplier = 1.15; break;
    }

    const min = Math.round(sqFt.value * baseRate * complexityMultiplier)
    const max = Math.round(min * 1.25)
    return { min, max }
})

// Checklist State
const checklist = reactive({
    missingShingles: false,
    leaks: false,
    granules: false,
    age: false
})

const checklistResult = computed(() => {
    const count = Object.values(checklist).filter(Boolean).length
    if (count === 0) return { text: "Your roof seems okay, but an annual inspection is recommended.", color: "text-teal-700 dark:text-teal-400", iconColor: "text-teal-600 dark:text-teal-500" }
    if (count <= 2) return { text: "Some warning signs detected. You should schedule a professional inspection soon.", color: "text-gold-700 dark:text-gold-400", iconColor: "text-gold-600 dark:text-gold-500" }
    return { text: "CRITICAL: Major issues detected. Contact us immediately for an emergency evaluation.", color: "text-red-700 dark:text-red-400", iconColor: "text-red-600 dark:text-red-500" }
})
</script>

<template>
    <div class="bg-gray-50 dark:bg-navy-950 py-16">
        <div class="max-w-7xl mx-auto px-4 md:px-8">

            <!-- Tools Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                <!-- Calculator Tool -->
                <div
                    class="bg-white dark:bg-navy-900 rounded-sm shadow-hard border border-gray-200 dark:border-navy-800 overflow-hidden">
                    <div class="bg-teal-600 p-6 flex items-center gap-3 text-white">
                        <UIcon name="i-heroicons-calculator" class="w-8 h-8" />
                        <h2 class="text-2xl font-display font-bold uppercase tracking-wide">Replacement Estimator</h2>
                    </div>
                    <div class="p-8">
                        <p class="mb-8 text-gray-600 dark:text-gray-300">
                            Get a rough estimate for a full roof replacement. Note: This is strictly for planning
                            purposes. Actual costs vary based on site conditions.
                        </p>

                        <div class="space-y-6">
                            <div>
                                <label class="block font-bold text-navy-900 dark:text-white mb-2">Home Size (Square
                                    Feet)</label>
                                <div class="flex items-center gap-4">
                                    <input type="range" min="100" max="5000" step="100" v-model.number="sqFt"
                                        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
                                    <span class="font-mono font-bold w-20 text-right text-navy-900 dark:text-white">
                                        {{ sqFt }} sqft</span>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block font-bold text-navy-900 dark:text-white mb-2">Material</label>
                                    <select v-model="material"
                                        class="w-full p-3 bg-gray-100 dark:bg-navy-800 border border-gray-300 dark:border-navy-700 rounded-sm">
                                        <option value="asphalt">Asphalt Shingles (Standard)</option>
                                        <option value="metal">Metal (Premium)</option>
                                        <option value="tile">Tile/Slate (Luxury)</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block font-bold text-navy-900 dark:text-white mb-2">Complexity</label>
                                    <select v-model="complexity"
                                        class="w-full p-3 bg-gray-100 dark:bg-navy-800 border border-gray-300 dark:border-navy-700 rounded-sm">
                                        <option value="simple">Simple (Gable)</option>
                                        <option value="average">Average (Some Hips/Valleys)</option>
                                        <option value="complex">Complex (Steep/Many Angles)</option>
                                    </select>
                                </div>
                            </div>

                            <div
                                class="mt-8 p-6 bg-navy-50 dark:bg-navy-800 border-2 border-dashed border-teal-500 rounded-sm text-center">
                                <p class="text-sm font-bold uppercase text-gray-500 mb-1">Estimated Range</p>
                                <p class="text-4xl font-display font-bold text-navy-900 dark:text-white">
                                    ${{ estimate.min.toLocaleString() }} - ${{ estimate.max.toLocaleString() }}
                                </p>
                            </div>

                            <UButton to="/contact" block size="xl" color="primary" variant="solid"
                                class="font-display font-bold uppercase tracking-widest text-navy-900">
                                Get Official Quote
                            </UButton>
                        </div>
                    </div>
                </div>

                <!-- Storm Damage Checklist -->
                <div
                    class="bg-white dark:bg-navy-900 rounded-sm shadow-hard border border-gray-200 dark:border-navy-800 overflow-hidden">
                    <div class="bg-navy-800 p-6 flex items-center gap-3 text-white">
                        <UIcon name="i-heroicons-clipboard-document-check" class="w-8 h-8 text-gold-500" />
                        <h2 class="text-2xl font-display font-bold uppercase tracking-wide">Self-Inspection Checklist
                        </h2>
                    </div>
                    <div class="p-8">
                        <p class="mb-8 text-gray-600 dark:text-gray-300">
                            Identify common signs of roof failure before they become expensive leaks. Check all that
                            apply:
                        </p>

                        <div class="space-y-4 mb-8">
                            <label
                                class="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                <UCheckbox v-model="checklist.missingShingles" color="primary" />
                                <span class="font-bold text-navy-900 dark:text-white">Missing or Cracked Shingles</span>
                            </label>

                            <label
                                class="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                <UCheckbox v-model="checklist.leaks" color="primary" />
                                <span class="font-bold text-navy-900 dark:text-white">Water Stains on Ceiling /
                                    Attic</span>
                            </label>

                            <label
                                class="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                <UCheckbox v-model="checklist.granules" color="primary" />
                                <span class="font-bold text-navy-900 dark:text-white">Granules in Gutters (Sand-like
                                    texture)</span>
                            </label>

                            <label
                                class="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                <UCheckbox v-model="checklist.age" color="primary" />
                                <span class="font-bold text-navy-900 dark:text-white">Roof is over 20 years old</span>
                            </label>
                        </div>

                        <div class="bg-gray-100 dark:bg-navy-800 p-6 rounded-sm flex gap-4 items-start">
                            <UIcon name="i-heroicons-exclamation-triangle" class="w-8 h-8 shrink-0 mt-1"
                                :class="checklistResult.iconColor" />
                            <div>
                                <h4 class="font-bold text-lg mb-1" :class="checklistResult.color">Analysis Result:</h4>
                                <p class="text-gray-700 dark:text-gray-300">{{ checklistResult.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SEO List -->
            <div
                class="bg-white dark:bg-navy-900 rounded-sm shadow-hard border border-gray-200 dark:border-navy-800 p-8 md:p-12">
                <h3 class="text-2xl font-display font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
                    <UIcon name="i-heroicons-magnifying-glass" class="w-7 h-7 text-gold-500" /> Local Search Topics
                </h3>
                <div class="flex flex-wrap gap-3">
                    <NuxtLinkLocale v-for="(keyword, idx) in SEO_KEYWORDS.slice(0, 15)" :key="idx" to="/contact"
                        class="group flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-800 rounded-sm text-sm font-bold text-navy-700 dark:text-gray-300 uppercase tracking-wide hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-500 transition-all">
                        <UIcon name="i-heroicons-tag" class="w-3 h-3 text-gray-400 group-hover:text-gold-500" />
                        {{ keyword }}
                    </NuxtLinkLocale>
                </div>
            </div>

        </div>
    </div>
</template>
