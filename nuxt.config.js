import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    mode: 'universal',

    css: [
        '~/assets/css/bootstrap.min.css'
    ],
    js: [
        '~/assets/js/bootstrap.min.js'
    ]
})
