<script setup lang="ts">
/**
 *
 * Component Description: Statistics section showing company trust metrics.
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
    <section class="bg-gold-500 dark:bg-gold-600 text-navy-950 py-12 relative z-20 shadow-xl">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-navy-900/10">
                <div>
                    <p class="text-4xl md:text-5xl font-display font-bold mb-1">
                        <slot name="stat1-value" mdc-unwrap="p">50+</slot>
                    </p>
                    <p class="text-sm font-bold uppercase tracking-widest opacity-80">
                        <slot name="stat1-label" mdc-unwrap="p">Years Experience</slot>
                    </p>
                </div>
                <div>
                    <p class="text-4xl md:text-5xl font-display font-bold mb-1">
                        <slot name="stat2-value" mdc-unwrap="p">5.0</slot>
                    </p>
                    <p
                        class="text-sm font-bold uppercase tracking-widest opacity-80 flex items-center justify-center gap-1">
                        <UIcon name="i-heroicons-star" class="w-4 h-4 text-black" />
                        <slot name="stat2-label" mdc-unwrap="p">Google Rating</slot>
                    </p>
                </div>
                <div>
                    <p class="text-4xl md:text-5xl font-display font-bold mb-1">
                        <slot name="stat3-value" mdc-unwrap="p">24/7</slot>
                    </p>
                    <p class="text-sm font-bold uppercase tracking-widest opacity-80">
                        <slot name="stat3-label" mdc-unwrap="p">Emergency Support</slot>
                    </p>
                </div>
                <div>
                    <p class="text-4xl md:text-5xl font-display font-bold mb-1">
                        <slot name="stat4-value" mdc-unwrap="p">A+</slot>
                    </p>
                    <p class="text-sm font-bold uppercase tracking-widest opacity-80">
                        <slot name="stat4-label" mdc-unwrap="p">Rated Service</slot>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
