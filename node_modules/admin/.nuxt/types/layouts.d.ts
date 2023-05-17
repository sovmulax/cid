import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "body"
declare module "C:/Users/GSK-PREMIUM/Desktop/Projets professionnels/CID/cid/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}