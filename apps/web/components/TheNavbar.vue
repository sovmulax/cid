<template>
  <div
    class="h-12 w-full p-12 flex justify-between items-center text-white"
    :class="{ 'absolute bg-transparent': $route.path === '/' }"
  >
    <nuxt-link class="w-12" to="/">
      <img class="object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
    </nuxt-link>

    <div class="flex gap-12 items-center font-bold">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="#">Projets</nuxt-link>
      <nuxt-link to="#">Actualités</nuxt-link>
      <nuxt-link to="#">À propos</nuxt-link>
    </div>

    <nuxt-link to="#" class="btn">Nous contacter</nuxt-link>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
