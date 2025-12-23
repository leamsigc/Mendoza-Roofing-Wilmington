<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface TrustItem {
    icon: string;
    title: string;
    desc: string;
}
interface Props {
    trustItems: TrustItem[];
}
const {
    trustItems = [
        { icon: 'i-heroicons-trophy', title: 'Credibility', desc: 'Respected members of the local community and business groups.' },
        { icon: 'i-heroicons-users', title: 'Local Crews', desc: 'We are a local company with local crews. We don\'t outsource.' },
        { icon: 'i-heroicons-shield-check', title: 'Fully Insured', desc: 'Required Liability and Workman’s Comp Insurance on all employees.' },
        { icon: 'i-heroicons-check-circle', title: 'Dependable', desc: 'We keep our word. Contract terms are clear with no hidden costs.' }
    ]
} = defineProps<Props>();
</script>

<template>
    <div class="grid md:grid-cols-2 gap-8 not-prose my-16">
        <div v-for="item in trustItems" :key="item.title"
            class="flex gap-5 items-start p-6 rounded-sm bg-gray-50 dark:bg-navy-800 border border-gray-100 dark:border-navy-700 shadow-sm hover:shadow-hard transition-shadow">
            <UIcon :name="item.icon" class="text-gold-500 w-8 h-8 shrink-0" />
            <div>
                <h4 class="font-bold text-xl text-navy-900 dark:text-white mb-2 font-display uppercase">{{ item.title }}
                </h4>
                <p class="text-gray-600 dark:text-gray-400 text-base">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>
