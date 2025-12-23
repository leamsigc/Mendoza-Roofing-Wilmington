export default defineAppConfig({
    ui: {
        primary: 'gold',
        gray: 'navy',
        button: {
            default: {
                size: 'md',
                color: 'primary',
                variant: 'solid'
            },
            font: 'font-oswald uppercase tracking-wider'
        },
        card: {
            base: 'border border-navy-200 shadow-hard-md',
            background: 'bg-white dark:bg-navy-900',
            divide: 'divide-y divide-navy-100 dark:divide-navy-800',
            ring: 'ring-1 ring-navy-200 dark:ring-navy-800',
            rounded: 'rounded-sm',
            shadow: 'shadow-hard-md'
        }
    }
})
