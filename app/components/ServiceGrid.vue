import { SERVICES } from '~/utils/constants'

const props = defineProps<{ services?: Array<{ id: string title: string description: string iconName: string link:
    string }>
    }>()

    const displayedServices = computed(() => props.services || SERVICES.slice(1, 4))

    <template>
        <section class="py-24 bg-concrete-50 dark:bg-navy-950" id="services">
            <div class="max-w-7xl mx-auto px-4 md:px-8">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span
                            class="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-widest text-sm mb-2 block font-display">
                            <slot name="subtitle" mdc-unwrap="p">Our Expertise</slot>
                        </span>
                        <h2
                            class="text-4xl md:text-6xl font-display font-bold text-navy-900 dark:text-white uppercase leading-none">
                            <slot name="title" mdc-unwrap="p">
                                Built to <span
                                    class="text-transparent bg-clip-text bg-gradient-to-br from-navy-800 to-navy-600 dark:from-white dark:to-gray-400">Last</span>
                            </slot>
                        </h2>
                    </div>
                    <p
                        class="text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed text-right md:text-left">
                        <slot name="description" mdc-unwrap="p">
                            From new constructions to historic restorations, we handle every aspect of roofing with
                            precision.
                        </slot>
                    </p>
                </div>

                <!-- The Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">

                    <!-- Main Feature - Large -->
                    <div
                        class="md:col-span-2 md:row-span-2 bg-navy-900 rounded-sm p-10 relative overflow-hidden group border border-navy-800">
                        <div
                            class="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity">
                        </div>
                        <div class="relative z-10 flex flex-col h-full justify-between">
                            <div
                                class="w-16 h-16 bg-teal-600 rounded-sm flex items-center justify-center text-white mb-6 shadow-hard">
                                <UIcon name="i-heroicons-wrench-screwdriver" class="w-8 h-8" />
                            </div>
                            <div>
                                <h3 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">New
                                    Constructions
                                </h3>
                                <p class="text-gray-300 text-lg mb-8 max-w-lg">
                                    Yes, we also do new constructions. We use only the highest quality products to
                                    insure
                                    that your new roof is built with the integrity and craftsmanship to last for many
                                    years
                                    to come.
                                </p>
                                <NuxtLink to="/contact"
                                    class="text-gold-500 font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">
                                    Start Project
                                    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Service Cards -->
                    <div v-for="(service, idx) in SERVICES.slice(1, 4)" :key="service.id"
                        class="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 p-8 rounded-sm hover:border-gold-500 transition-colors group flex flex-col justify-between shadow-sm hover:shadow-hard min-h-[300px]">
                        <div class="flex justify-between items-start">
                            <UIcon :name="service.iconName"
                                class="w-10 h-10 text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors" />
                            <span
                                class="text-gray-200 dark:text-navy-800 text-6xl font-display font-bold -mt-4 opacity-50 group-hover:opacity-100 transition-opacity">0{{
                                    idx + 2 }}</span>
                        </div>
                        <div>
                            <h3 class="text-2xl font-display font-bold text-navy-900 dark:text-white mb-2">{{
                                service.title
                            }}</h3>
                            <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">{{ service.description
                            }}
                            </p>
                            <NuxtLink :to="service.link"
                                class="inline-flex items-center justify-center p-2 bg-gray-100 dark:bg-navy-800 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-colors">
                                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Dark Card -->
                    <div
                        class="bg-teal-700 p-8 rounded-sm flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[300px]">
                        <UIcon name="i-heroicons-shield-check" class="w-12 h-12 text-white mb-4" />
                        <h3 class="text-2xl font-display font-bold text-white mb-2">EDS Waterproofing</h3>
                        <p class="text-teal-100 mb-6">Approved Installers for high-performance membranes.</p>
                        <NuxtLink to="/contact"
                            class="bg-white text-teal-800 px-6 py-2 rounded-sm font-bold uppercase text-sm hover:bg-navy-900 hover:text-white transition-colors">
                            Learn More
                        </NuxtLink>
                    </div>
                </div>

                <!-- Chips for SEO -->
                <div class="mt-12 flex flex-wrap gap-2 justify-center">
                    <span
                        v-for="tag in ['Metal Roofs', 'Slate', 'Tile', 'Shingles', 'Flat Roofs', 'Lead Roofing', 'Chimney Repair', 'Soffits', 'Fascia', 'Roof Coating']"
                        :key="tag"
                        class="border border-gray-300 dark:border-navy-700 px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-500 transition-colors cursor-default">
                        {{ tag }}
                    </span>
                </div>
            </div>
        </section>
    </template>
