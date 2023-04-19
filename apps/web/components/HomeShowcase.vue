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
const companies = [
  {
    name: 'Société Générale',
    logo: 'https://societegenerale.ci/fileadmin/user_upload/logos/logo_SGBCI.png',
    link: '#',
  },
  {
    name: 'MTN',
    logo: 'https://yt3.ggpht.com/a/AGF-l7-oiv32Ut2Q5MlBTgQAQUv4zYXcZeNQQ8FBDA=s900-c-k-c0xffffffff-no-rj-mo',
    link: '#',
  },
  {
    name: 'Orange',
    logo: 'https://cdn.contactcenterworld.com/images/company/orange-uganda-1200px-logo.jpg',
    link: '#',
  },
  {
    name: 'CIE',
    logo: 'https://cme.ci/static/main/images/Logo_CIE.png',
    link: '#',
  },
  {
    name: 'Total Energies',
    logo: 'https://www.todomotorperu.com/wp-content/uploads/2021/06/TotalEnergies_Logo_RGB-840x664.png',
    link: '#',
  },
  {
    name: 'SIR',
    logo: 'https://arda.africa/wp-content/uploads/2022/08/Arda_Sponsor_Logos_Diamond_SIR_update-200x200.png',
    link: '#',
  },
];
</script>

<style lang="sass"></style>
