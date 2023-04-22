<template>
  <section class="flex flex-col items-center py-16">
    <h1 class="text-6xl font-bold tracking-tight">Nos Projets</h1>
    <p class="md:w-1/2 my-9 text-xl leading-6 text-neutral-800">
      La CID aborde des projets divers et repartis en plusieurs catégories. Cette diversité nous permet d'atteindre
      plusieurs domaines d'activité satifaisant ainsi une majeure partie de la population.
    </p>
    <div class="flex">
      <NuxtLink v-for="project in projects" :key="project.name" :to="project.link" class="w-96" title="En savoir plus">
        <img
          :src="project.image"
          :alt="`Image du projet ${project.name}`"
          class="h-80 object-cover hover:scale-110 transition-all mb-3"
        />
        <h2 class="text-xl font-semibold uppercase tracking-tight">{{ project.name }}</h2>
        <p class="leading-6 text-neutral-800">{{ project.description }}</p>
      </NuxtLink>
    </div>
    <NuxtLink to="/projets" class="btn btn--primary m-9"> Voir tous les projets </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
const projects = [
  {
    name: 'Système de diagnostic',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://drkoch.dk/wp-content/uploads/2016/10/IMG_0628.jpg',
    link: '/projets',
  },
  {
    name: 'Système de drone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image:
      'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2019/11/DJI-Mavic-Mini-23-of-26.jpg',
    link: '/projets',
  },
  {
    name: 'Agriculture',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'https://straydoginstitute.org/wp-content/uploads/2021/07/shutterstock_1282334635.jpg',
    link: '/projets',
  },
];
</script>

<style lang="scss"></style>
