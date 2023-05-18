<script setup>
import pb from '../../pocket.config.js';
// collect data from pocketbase
try {
  records = await pb.collection('projects').getFullList();
} catch (error) {}
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Ajout de Projet </template>
    <template #content>
      <div class="row">

      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
