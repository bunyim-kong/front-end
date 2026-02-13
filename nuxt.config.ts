import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // 1. Tell Nuxt everything is in the 'app' folder
  srcDir: 'app/', 

  // 2. Point to the CSS inside that app folder
  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})