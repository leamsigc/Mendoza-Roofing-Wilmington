<script setup lang="ts">
</script>

<template>
    <div
        class="min-h-screen flex flex-col font-sans text-navy-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <AppHeader />
        <main class="flex-grow">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
