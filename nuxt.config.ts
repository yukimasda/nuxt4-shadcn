// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
      compatibilityVersion: 4,
  },
  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_module"
  },

  modules: ["nitro-cloudflare-dev"]
})
