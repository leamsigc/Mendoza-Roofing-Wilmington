<script setup lang="ts">
</script>

<template>
    <div
        class="min-h-screen flex flex-col font-sans text-navy-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <AppHeader />
        <main class="grow py-12">
            <UContainer>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <!-- Main Content -->
                    <article
                        class="lg:col-span-8 prose dark:prose-invert max-w-none prose-headings:font-oswald prose-a:text-gold-500">
                        <slot />
                    </article>

                    <!-- Sidebar -->
                    <aside class="lg:col-span-4 space-y-8">
                        <div
                            class="bg-white dark:bg-navy-900 p-6 rounded-sm shadow-hard-sm border border-navy-100 dark:border-navy-800">
                            <h3 class="font-oswald text-lg font-bold mb-4">Categories</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-navy-600 dark:text-navy-300 hover:text-gold-500">Roofing
                                        Tips</a></li>
                                <li><a href="#" class="text-navy-600 dark:text-navy-300 hover:text-gold-500">Storm
                                        Damage</a></li>
                                <li><a href="#"
                                        class="text-navy-600 dark:text-navy-300 hover:text-gold-500">Maintenance</a>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-navy-900 text-white p-6 rounded-sm shadow-hard-md">
                            <h3 class="font-oswald text-lg font-bold mb-2 text-gold-500">Need a Quote?</h3>
                            <p class="text-sm text-gray-300 mb-4">Get a free estimate for your next roofing project.</p>
                            <UButton to="/contact" block color="primary" variant="solid">Contact Us</UButton>
                        </div>
                    </aside>
                </div>
            </UContainer>
        </main>
        <UContainer class='mx-auto p-24'>
            <NuxtLinkLocale to="/blog">
                <UButton variant="ghost"> Back </UButton>
            </NuxtLinkLocale>

        </UContainer>
        <AppFooter />
    </div>
</template>
