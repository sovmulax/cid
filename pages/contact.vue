<template>
  <main class="flex flex-col items-center gap-12 bg-neutral-50 py-24">
    <h1 class="text-center text-6xl font-bold tracking-tight">Nous contacter</h1>
    <div class="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
      <div v-for="form in forms" :key="form" class="">
        <input :id="form" v-model="picked" type="radio" :value="form" class="peer hidden" />
        <label
          :for="form"
          class="inline-block cursor-pointer rounded-md border-[1px] px-9 py-3 text-xl font-bold transition-colors checked:bg-primary peer-checked:border-none peer-checked:bg-primary peer-checked:text-white"
        >
          {{ form }}
        </label>
      </div>
    </div>

    <ContactFormBusiness v-if="picked === 'Entreprise'" />
    <ContactFormStudent v-else />
  </main>
</template>

<script setup lang="ts">
const forms = ['Entreprise', 'Étudiant'];
const picked = ref('Entreprise');
</script>
