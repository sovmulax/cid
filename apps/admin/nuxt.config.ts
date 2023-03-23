// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Projet CID',
      meta: [{ name: 'description', content: 'My awesome Nuxt project' }],
      link: [
        { rel: 'icon', href: 'images/favicon.ico' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/icons.css' },
      ],
      script: [
        { type: 'text/javascript', src: '/js/jquery.min.js' },
        { type: 'text/javascript', src: '/js/bootstrap.bundle.min.js' },
        { type: 'text/javascript', src: '/js/jquery.slimscroll.js' },
        { type: 'text/javascript', src: '/js/waves.min.js' },
        { type: 'text/javascript', src: '/js/app.js' },
      ],
    },
  },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/scss/my-style.scss";', // Auto import scss files your Single-File Component (SFC)
        },
      },
    },
  },
  modules: ['@nuxtjs/device', '@nuxtjs/eslint-module', '@nuxtjs/google-fonts', 'nuxt-headlessui'],
  device: {
    refreshOnResize: true,
  },
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    download: true,
    base64: false,
  },
});
