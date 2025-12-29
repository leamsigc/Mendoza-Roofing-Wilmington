<script setup lang="ts">
/**
 *
 * Component Description: Global footer with company information and navigation links.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const { t } = useI18n()
const { preference } = useColorMode()
</script>

<template>
    <footer class="bg-navy-900 text-white py-12 border-t border-gold-500">
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <NuxtImg src="/img/logoTransparent.png" alt="Mendoza Roofing Logo" class="w-24 h-16" />
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed mb-4">
                        {{ t('common.licensed_insured') }}
                    </p>
                    <div class="text-gray-400 text-sm">
                        <p>Wilmington, Supply, Brunswick County</p>
                        <p class="mt-2 text-gold-400 font-bold">910-367-7628</p>
                    </div>
                    <!-- Social Links -->
                    <div class="flex items-center gap-2 mt-4">
                        <UButton icon="logos:facebook" variant="ghost" size="sm" color="neutral" title="Facebook"
                            to="https://www.facebook.com/MendozaRoofingCompanyWilmington" />
                        <UButton icon="logos:twitter" variant="ghost" size="sm" color="neutral" title="Twitter"
                            to="https://twitter.com/MendozaRoofingCompanyWilmington" />
                        <UButton icon="logos:instagram" variant="ghost" size="sm" color="success"
                            to="https://www.instagram.com/mendozaroofingnc" title="Instagram" />
                    </div>
                </div>

                <!-- Services Links (Placeholder) -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">{{ t('nav.services') }}</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <NuxtLinkLocale to="/services/" class="hover:text-gold-500">
                                Residential Roofing
                            </NuxtLinkLocale>
                        </li>
                        <li>
                            <NuxtLinkLocale to="/services/" class="hover:text-gold-500">
                                Commercial Roofing
                            </NuxtLinkLocale>
                        </li>
                        <li>
                            <NuxtLinkLocale to="/services/" class="hover:text-gold-500">
                                Repairs & Maintenance
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">Links</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <NuxtLinkLocale to="/about/" class="hover:text-gold-500">
                                {{ t('nav.about') }}
                            </NuxtLinkLocale>
                        </li>
                        <li>
                            <NuxtLinkLocale to="/contact/" class="hover:text-gold-500">
                                {{ t('nav.contact') }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="mt-12 pt-8 border-t border-navy-800 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
                <span>&copy; {{ new Date().getFullYear() }} Mendoza Roofing LLC.</span>
                <span class="mt-2 md:mt-0">Leamsigc</span>
            </div>
        </UContainer>
    </footer>
</template>
