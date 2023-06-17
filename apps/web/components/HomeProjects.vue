<template>
  <section class="flex flex-col items-center px-9 py-16">
    <h1 class="text-center text-6xl font-bold tracking-tight">Nos Projets</h1>
    <p class="my-9 text-xl leading-6 text-neutral-800 md:w-1/2">
      La CID aborde des projets divers et repartis en plusieurs catégories. Cette diversité nous permet d'atteindre
      plusieurs domaines d'activité satifaisant ainsi une majeure partie de la population.
    </p>
    <div class="flex flex-wrap">
      <div v-for="project in projects" :key="project.title" class="flex w-80 flex-col md:w-96">
        <div class="zoom-in-effect mb-3 inline-block overflow-hidden">
          <img :src="project.cover" :alt="`Image du projet ${project.title}`" class="h-80 object-cover" />
        </div>
        <div>
          <h2 class="text-xl font-semibold uppercase tracking-tight">{{ project.title }}</h2>
          <p class="leading-6 text-neutral-800">
            {{ project.description.length > 80 ? project.description.substring(0, 80) + '...' : project.description }}
          </p>
        </div>
      </div>
    </div>
    <NuxtLink to="/projets" class="btn btn--primary m-9"> Voir tous les projets </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
const { $pb } = useNuxtApp();
const response = await $pb.collection('projects').getList(1, 3, {
  filter: 'featured=true',
});
const projects = response.items as unknown as Project[];
projects.map((project) => getFileUrl(project, 'cover'));
</script>
