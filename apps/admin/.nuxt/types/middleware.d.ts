import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/GSK-PREMIUM/Desktop/Projets professionnels/CID/cid/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}