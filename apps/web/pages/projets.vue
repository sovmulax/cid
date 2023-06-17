<template>
  <main class="flex flex-col items-center gap-12 bg-neutral-50 px-9 py-24">
    <h1 class="text-center text-6xl font-bold tracking-tight">Nos projets</h1>

    <div class="flex flex-col">
      <div v-for="project in projects" :key="project.id" class="flex flex-col gap-3 md:flex-row">
        <img
          :src="project.cover"
          :alt="`Image du projet ${project.title}`"
          class="md:w-180 h-64 rounded-lg object-cover"
        />

        <div class="flex flex-col gap-3">
          <h2 class="text-xl font-semibold uppercase tracking-tight">{{ project.title }}</h2>
          <p class="leading-6 text-neutral-800">
            {{ project.description.length > 250 ? project.description.substring(0, 250) + '...' : project.description }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { $pb } = useNuxtApp();
const projects: Project[] = await $pb.collection('projects').getFullList();
projects.map((project) => getFileUrl(project, 'cover'));
</script>
