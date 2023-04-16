<template>
  <div class="h-12 w-full p-12 flex justify-between items-center">
    <nuxt-link class="w-12" to="/">
      <img class="object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
    </nuxt-link>

    <div class="flex gap-12 items-center">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="#">Projets</nuxt-link>
      <nuxt-link to="#">Actualités</nuxt-link>
      <nuxt-link to="#">À propos</nuxt-link>
    </div>

    <nuxt-link to="#" class="btn">Contact</nuxt-link>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
