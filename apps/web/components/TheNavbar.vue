<template>
  <nav
    class="h-12 w-full p-12 flex justify-between items-center text-white"
    :class="{ 'absolute bg-transparent': $route.path === '/' }"
  >
    <nuxt-link class="w-12" to="/">
      <img class="object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
    </nuxt-link>

    <div v-if="$device.isDesktop" class="nav-links flex gap-9 items-center font-bold">
      <nuxt-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="hover:bg-neutral-800 hover:bg-opacity-50 rounded py-3 px-9"
      >
        {{ link.name }}
      </nuxt-link>
    </div>

    <nuxt-link v-if="$device.isDesktop" to="/contact" class="btn">Nous contacter</nuxt-link>
    <!-- TODO: Overflow hidden when menu opened -->
    <HeadlessMenu v-else v-slot="{ open, close }">
      <HeadlessMenuButton id="menu-btn">
        <Icon v-if="open" name="mdi:close" size="32px" />
        <Icon v-else name="mdi:menu" size="32px" />
      </HeadlessMenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <HeadlessMenuItems
          class="mobile-nav-links flex flex-col left-0 top-0 absolute z-50 bg-background h-screen w-2/3 p-12 gap-9"
        >
          <nuxt-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="text-foreground font-bold"
            @click="close"
          >
            {{ link.name }}
          </nuxt-link>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projets' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'À propos', path: '/a-propos' },
];
</script>

<style lang="scss">
.nav-links .router-link-active {
  background-color: #26262680;
  border-bottom: 2px solid #262626e6;
}

.mobile-nav-links .router-link-active {
  border-bottom: 2px solid #262626e6;
  width: fit-content;
}
</style>
