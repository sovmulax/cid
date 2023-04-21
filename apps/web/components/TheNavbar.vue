<template>
  <nav
    class="h-12 w-full p-12 flex justify-between items-center text-white"
    :class="{ 'absolute bg-transparent': $route.path === '/' }"
  >
    <nuxt-link class="w-12" to="/">
      <img class="object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
    </nuxt-link>

    <div class="nav-links flex gap-9 items-center font-bold">
      <nuxt-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="hover:bg-neutral-800 hover:bg-opacity-50 rounded py-3 px-9"
      >
        {{ link.name }}
      </nuxt-link>
    </div>

    <nuxt-link to="/contact" class="btn">Nous contacter</nuxt-link>
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
</style>
