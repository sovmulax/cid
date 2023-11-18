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
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://cid.pockethost.io/', // You can override this value at runtime with NUXT_PUBLIC_API_BASE_URL env var
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
  ssr: false,
});
