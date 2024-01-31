// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true,
    buildModules: [
      '@nuxt/http',
    ],
    http: {
      baseURL: '/',
    },
    modules: [
      '@chakra-ui/nuxt',
      '@nuxtjs/emotion',
      '@nuxt/http',
    ],
    build: {
      transpile: ['firebase'],
    },
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/scss/main.scss',
  ],
//   vite: {
//     css: {
//         preprocessorOptions: {
//             scss: {
//                 additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
//             },
//         },
//     },
// },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 
})
