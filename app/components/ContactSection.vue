<script setup lang="ts">
import { COMPANY_INFO } from '~/utils/constants'
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-navy-800 rounded-lg overflow-hidden shadow-2xl">

            <!-- Info Sidebar -->
            <div class="bg-navy-900 text-white p-10 md:p-16 flex flex-col justify-center">
                <h3 class="text-3xl font-display font-bold mb-10 text-gold-500 border-b border-navy-800 pb-4">Info</h3>

                <div class="space-y-10">
                    <!-- Address -->
                    <div class="flex items-start gap-5 group">
                        <div
                            class="bg-navy-800 p-3 rounded-md group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                            <UIcon name="i-heroicons-map-pin" class="w-7 h-7" />
                        </div>
                        <div>
                            <h4 class="font-bold text-xl mb-1 text-gray-200">Address</h4>
                            <p class="text-lg font-medium">{{ COMPANY_INFO.address }}</p>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-start gap-5 group">
                        <div
                            class="bg-navy-800 p-3 rounded-md group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                            <UIcon name="i-heroicons-phone" class="w-7 h-7" />
                        </div>
                        <div>
                            <h4 class="font-bold text-xl mb-1 text-gray-200">Phone Line</h4>
                            <a :href="`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`"
                                class="text-3xl font-display font-black hover:text-gold-500 transition-colors block">
                                {{ COMPANY_INFO.phone }}
                            </a>
                        </div>
                    </div>

                    <!-- Email -->
                    <div class="flex items-start gap-5 group">
                        <div
                            class="bg-navy-800 p-3 rounded-md group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                            <UIcon name="i-heroicons-envelope" class="w-7 h-7" />
                        </div>
                        <div>
                            <h4 class="font-bold text-xl mb-1 text-gray-200">Email</h4>
                            <a :href="`mailto:${COMPANY_INFO.email}`"
                                class="text-lg hover:text-gold-500 transition-colors">
                                {{ COMPANY_INFO.email }}
                            </a>
                        </div>
                    </div>

                    <!-- Hours -->
                    <div class="flex items-start gap-5 pt-10 border-t border-navy-800">
                        <div class="bg-navy-800 p-3 rounded-md">
                            <UIcon name="i-heroicons-clock" class="w-7 h-7 text-white" />
                        </div>
                        <div class="w-full">
                            <h4 class="font-bold text-xl mb-4 text-gray-200">Operating Hours</h4>
                            <div class="flex justify-between border-b border-navy-800 pb-2 text-lg">
                                <span class="font-medium">Mon - Fri:</span>
                                <span class="font-bold">8:00AM - 6:00PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <ContactForm />
        </div>
    </div>
</template>
