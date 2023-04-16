<template>
  <div class="flex flex-col h-1/2 border-t-2 mt-9 py-9 gap-16">
    <div class="flex justify-center gap-12 flex-wrap">
      <div v-for="contact in contacts" :key="contact.link">
        <NuxtLink :to="contact.link" class="flex gap-3 items-center">
          <Icon :name="contact.icon" size="32px" :class="'text-primary'" />
          <div class="flex flex-col gap-1">
            <h3 class="font-black">{{ contact.title }}</h3>
            <span>{{ contact.text }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col gap-3 md:flex-row md:gap-16 justify-center items-center font-bold flex-wrap">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="#">Projets</nuxt-link>
      <nuxt-link to="#">Actualités</nuxt-link>
      <nuxt-link to="#">À propos</nuxt-link>
      <nuxt-link to="#">Nous contacter</nuxt-link>
    </div>

    <div class="text-center">
      <p>
        &copy; 2017 - {{ new Date().getFullYear() }} Cellule d'Innovation et de Développement. Tous droits réservés.
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
</script>

<style></style>
