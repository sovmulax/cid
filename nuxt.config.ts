// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Cellule d'Innovation et de Développement — ESATIC",
      meta: [
        {
          name: 'description',
          content:
            "La Cellule d'Innovation et de Dévéloppement (CID) est le centre de recherche de projets innovants de l'ESATIC.",
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'in-out' },
  },
  ssr: false,
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://cid.pockethost.io/', // You can override this value at runtime with NUXT_PUBLIC_API_BASE_URL env var
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-snackbar',
    'nuxt-swiper',
  ],
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  headlessui: {
    prefix: 'Headless',
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: true,
    base64: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  snackbar: {
    duration: 5000,
  },
  experimental: {
    asyncContext: true,
  },
});
