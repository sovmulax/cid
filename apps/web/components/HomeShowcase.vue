<template>
  <div class="flex flex-col items-center py-12">
    <h1 class="text-xl uppercase font-bold tracking-wide leading-none">Ils nous font confiance</h1>
    <div class="flex gap-9 justify-between my-9">
      <a
        v-for="company in companies"
        :key="company.link"
        :href="company.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="company.logo" :alt="`Logo de ${company.name}`" class="class h-24" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $pb } = useNuxtApp();
const companies: Company[] = await $pb.collection('clients').getFullList();
companies.map((company) => getFileUrl(company, 'logo'));
</script>

<style lang="sass"></style>
