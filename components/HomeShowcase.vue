<template>
  <div class="flex flex-col items-center py-12">
    <h1 class="text-xl font-bold uppercase leading-none tracking-wide">Ils nous font confiance</h1>
    <div v-if="!pending" class="my-9 flex flex-wrap justify-around gap-9">
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
    <AppLoader v-else />
  </div>
</template>

<script lang="ts" setup>
const { $pb } = useNuxtApp();
const { data: companies, pending } = await useLazyAsyncData<Company[]>(
  'companies',
  () => $pb.collection('clients').getFullList(),
  {
    transform: (companies) => companies.map((company) => getFileUrl(company, 'logo')),
  }
);
</script>
