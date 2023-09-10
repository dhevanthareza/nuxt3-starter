// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["vuetify/lib/styles/main.sass", "@/assets/css/main.css"],
  build: { transpile: ["vuetify"] },
  devtools: { enabled: true },
  // router: {
  //   options: {
  //     hashMode: true
  //   }
  // },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    // ...
    '@pinia/nuxt',
  ],
});
