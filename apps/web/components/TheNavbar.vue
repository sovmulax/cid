<template>
  <nav
    class="flex h-12 w-full items-center justify-between p-12"
    :class="{
      'absolute bg-transparent text-white': $route.path === '/',
      'border-b-[1px] bg-white text-black': $route.path !== '/',
    }"
  >
    <nuxt-link class="w-12" to="/">
      <img class="object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
    </nuxt-link>

    <div class="nav-links hidden items-center gap-9 font-bold lg:flex">
      <nuxt-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="rounded px-9 py-3 hover:bg-neutral-800 hover:bg-opacity-50"
      >
        {{ link.name }}
      </nuxt-link>
    </div>

    <nuxt-link to="/contact" class="btn hidden lg:block">Nous contacter</nuxt-link>
    <HeadlessMenu v-slot="{ open, close }">
      <HeadlessMenuButton id="menu-btn" class="lg:hidden">
        <Icon v-if="open" name="mdi:close" size="32px" @vue:mounted="hideBodyOverflow" />
        <Icon v-else name="mdi:menu" size="32px" @vue:mounted="resetBodyOverflow" />
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
          class="mobile-nav-links absolute left-0 top-0 z-50 flex h-screen w-2/3 flex-col gap-9 bg-background p-12"
        >
          <nuxt-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="font-bold text-foreground"
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
function hideBodyOverflow() {
  if (process.client) {
    document.body.classList.add('h-screen', 'overflow-y-hidden');
  }
}

function resetBodyOverflow() {
  if (process.client) {
    document.body.classList.remove('h-screen', 'overflow-y-hidden');
  }
}

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
