<script setup lang="ts">
/**
 *
 * Component Description: Checklist section highlighting company standards.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface ChecklistItem {
    title: string;
    desc: string;
}

interface Props {
    list?: ChecklistItem[];
}

const props = withDefaults(defineProps<Props>(), {
    list: () => [
        { title: "Fully Insured", desc: "Required Liability and Workman’s Comp Insurance on all employees." },
        { title: "State Licensed", desc: "In good current standing with all local and state regulations." },
        { title: "Local Crews", desc: "Brunswick County natives. We know the local weather and architecture." },
        { title: "Clear Contracts", desc: "Transparent pricing. No hidden costs. We keep our word." },
        { title: "Established Reputation", desc: "Credibility in the community with references of previous work." },
        { title: "Free Estimates", desc: "Detailed inspections and reports before we start." }
    ]
})
</script>

<template>
    <section class="py-24 bg-concrete-50 dark:bg-navy-900 text-white relative border-y border-navy-800">
        <div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20">

            <div class="lg:w-1/2">
                <div class="sticky top-32">
                    <h2
                        class="text-4xl md:text-6xl font-display font-bold mb-8 text-gray-600 dark:text-white uppercase leading-none">
                        <slot name="title" mdc-unwrap="p">
                            The Mendoza <br />
                            <span class="text-gold-500">Standard</span>
                        </slot>
                    </h2>
                    <p class="text-xl text-gray-400 mb-10 leading-relaxed">
                        <slot name="description" mdc-unwrap="p">
                            We don't just meet industry standards; we set them. Our checklist ensures every project is
                            delivered with maximum security and quality.
                        </slot>
                    </p>

                    <div class="p-8 bg-navy-900 border border-navy-800 rounded-sm relative shadow-hard-sm">
                        <div class="absolute -left-1 top-8 h-12 w-1 bg-gold-500"></div>
                        <blockquote class="text-2xl font-display italic text-gray-200">
                            <slot name="quote" mdc-unwrap="p">
                                "The job is not done until you are satisfied! We restore your roof to the original
                                look."
                            </slot>
                        </blockquote>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2">
                <div class="space-y-6">
                    <div v-for="(item, idx) in list" :key="idx" class="flex gap-6 group">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-12 h-12 bg-navy-800 border border-navy-700 text-teal-500 rounded-sm flex items-center justify-center font-bold text-xl group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:border-gold-500 transition-all shadow-hard">
                                {{ idx + 1 }}
                            </div>
                            <div v-if="idx !== 5" class="w-px h-full bg-navy-800 my-2 group-hover:bg-navy-700"></div>
                        </div>
                        <div class="pb-8">
                            <h3
                                class="text-2xl font-display font-bold text-gray-600 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                                {{ item.title }}
                            </h3>
                            <p class="text-gray-400 leading-relaxed">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
