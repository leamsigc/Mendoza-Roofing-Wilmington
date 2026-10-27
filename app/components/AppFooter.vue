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
                        <NuxtImg src="/img/logoTransparent.png" alt="Mendoza Roofing Logo" class="w-24 h-auto" width="96" height="45" />
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

                <!-- Services Links -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">{{ t('nav.services') }}</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <LocaleLink to="/residential-roofing-wilmington-nc" class="hover:text-gold-500">
                                Residential Roofing
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/commercial-roofing-wilmington-nc" class="hover:text-gold-500">
                                Commercial Roofing
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/roof-maintenance-wilmington-nc" class="hover:text-gold-500">
                                Repairs & Maintenance
                            </LocaleLink>
                        </li>
                    </ul>
                </div>

                <!-- Service Areas -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">Service Areas</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <LocaleLink to="/wilmington-nc-roofing" class="hover:text-gold-500">
                                Wilmington NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/brunswick-county-roofing" class="hover:text-gold-500">
                                Brunswick County
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/leland-nc-roofing" class="hover:text-gold-500">
                                Leland NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/supply-nc-roofing" class="hover:text-gold-500">
                                Supply NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/oak-island-nc-roofing" class="hover:text-gold-500">
                                Oak Island NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/shallotte-nc-roofing" class="hover:text-gold-500">
                                Shallotte NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/southport-nc-roofing" class="hover:text-gold-500">
                                Southport NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/calabash-nc-roofing" class="hover:text-gold-500">
                                Calabash NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/bolivia-nc-roofing" class="hover:text-gold-500">
                                Bolivia NC
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/holden-beach-nc-roofing" class="hover:text-gold-500">
                                Holden Beach NC
                            </LocaleLink>
                        </li>
                    </ul>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">Links</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <LocaleLink to="/about" class="hover:text-gold-500">
                                {{ t('nav.about') }}
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/services" class="hover:text-gold-500">
                                {{ t('nav.services') }}
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/tools" class="hover:text-gold-500">
                                {{ t('nav.tools') }}
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/faq" class="hover:text-gold-500">
                                FAQ
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/contact" class="hover:text-gold-500">
                                {{ t('nav.contact') }}
                            </LocaleLink>
                        </li>
                        <li>
                            <LocaleLink to="/privacy" class="hover:text-gold-500">
                                Privacy
                            </LocaleLink>
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
