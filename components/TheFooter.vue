<template>
  <div class="flex h-1/2 flex-col justify-center gap-16 px-3 py-9" :class="{ 'border-t-[1px]': $route.path !== '/' }">
    <div class="mx-auto inline-flex flex-col flex-wrap gap-12 px-3 md:flex-row md:justify-center">
      <div v-for="contact in contacts" :key="contact.link">
        <NuxtLink :to="contact.link" class="flex items-center gap-3">
          <Icon :name="contact.icon" size="32px" :class="'text-primary'" />
          <div class="flex flex-col gap-1">
            <span class="font-black">{{ contact.title }}</span>
            <span>{{ contact.text }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col flex-wrap items-center justify-center gap-3 font-bold md:flex-row md:gap-16">
      <nuxt-link v-for="link in links" :key="link.path" :to="link.path">{{ link.name }}</nuxt-link>
    </div>

    <div class="text-center">
      <p>
        &copy; 2017 - {{ new Date().getFullYear() }} Cellule d'Innovation et de Développement. Tous droits réservés.
      </p>
      <p class="mt-1">
        Développé par
        <a class="font-bold" href="https://sovmulax.me" target="_blank" rel="noopener noreferrer">sovmulax</a>
        x
        <a class="font-bold" href="https://marcaureln.com?ref=cid" target="_blank" rel="noopener noreferrer">
          marcaureln
        </a>
        x
        <a
          class="font-bold"
          href="https://konankouameaimefabrice.000webhostapp.com/index.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          konan-fabrice
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  {
    icon: 'material-symbols:location-on',
    title: 'Nous trouver',
    text: 'Bd de Marseille, Treichville, Abidjan',
    link: 'https://goo.gl/maps/xcAmSAucNQ3uWZF3A',
  },
  {
    icon: 'material-symbols:phone-enabled',
    title: 'Appelez-nous',
    text: '+225 07 08 82 81 11',
    link: 'tel:+2250708828111',
  },
  {
    icon: 'material-symbols:mail-outline',
    title: 'Envoyez-nous un e-mail',
    text: 'cid@esatic.edu.ci',
    link: 'mailto:cid@esatic.edu.ci',
  },
];

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projets' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Nous contacter', path: '/contact' },
];
</script>
