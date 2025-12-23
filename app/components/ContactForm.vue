<script setup lang="ts">
/**
 *
 * Component Description: Contact form with validation and success state.
 *
 * @author Mendoza Roofing <contact@roofingmendoza.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const { t } = useI18n()
const status = ref<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE')
const form = reactive({
    name: '',
    email: '',
    message: ''
})

const handleSubmit = async () => {
    status.value = 'SENDING'
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    status.value = 'SUCCESS'
    form.name = ''
    form.email = ''
    form.message = ''
}
</script>

<template>
    <div class="bg-white dark:bg-navy-800 p-8 md:p-12 h-full">
        <div v-if="status === 'SUCCESS'"
            class="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
            <div
                class="w-24 h-24 bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400 rounded-full flex items-center justify-center mb-6 border-4 border-gold-500">
                <UIcon name="i-heroicons-paper-airplane" class="w-12 h-12" />
            </div>
            <h3 class="text-3xl font-bold text-navy-900 dark:text-white mb-2">Message Sent</h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg mb-8">Thank you! We will be in touch shortly.</p>
            <button type="button" @click="status = 'IDLE'"
                class="text-navy-700 dark:text-navy-400 font-bold hover:underline text-lg uppercase tracking-wide">
                Send another
            </button>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <h3 class="text-3xl font-display font-black text-navy-900 dark:text-white mb-10 uppercase">{{
                t('common.cta_quote') }}</h3>

            <div>
                <label
                    class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                <input v-model="form.name" required type="text"
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white placeholder-gray-400"
                    placeholder="John Doe" />
            </div>

            <div>
                <label
                    class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">E-Mail</label>
                <input v-model="form.email" required type="email"
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white placeholder-gray-400"
                    placeholder="name@example.com" />
            </div>

            <div>
                <label
                    class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea v-model="form.message" required rows="5"
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white placeholder-gray-400 resize-none"
                    placeholder="I need a roof inspection..."></textarea>
            </div>

            <UButton type="submit" :loading="status === 'SENDING'" block size="xl" color="primary" variant="solid"
                class="font-display font-bold uppercase tracking-widest text-navy-900">
                {{ t('common.cta_call') }} Request
            </UButton>
        </form>
    </div>
</template>
