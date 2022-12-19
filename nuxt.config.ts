// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindForms from '@tailwindcss/forms'
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        config: {
            plugins: [
                tailwindForms({ strategy: 'base' })
            ]
        }
    }
})
