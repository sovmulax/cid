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
import logoSIIN from '@/assets/img/logo-siin.jpg';
import logoINPH from '@/assets/img/logo-inph.png';
import logoLaPoste from '@/assets/img/logo-laposte.jpg';
import logoLanfiaTech from '@/assets/img/logo-lanfiatech.png';
import logoOnBusiness from '@/assets/img/logo-onbusiness.png';

const companies = [
  {
    name: 'SIIN',
    logo: logoSIIN,
    link: 'https://www.easyassur.net/',
  },
  {
    name: 'La Poste',
    logo: logoLaPoste,
    link: 'https://laposte.ci.post/',
  },
  {
    name: 'INPH',
    logo: logoINPH,
    link: 'http://www.inhp.ci/',
  },
  {
    name: 'LanfiaTech',
    logo: logoLanfiaTech,
    link: 'https://lanfiatech.ci/',
  },
  {
    name: 'OnBusiness',
    logo: logoOnBusiness,
    link: 'https://www.eciob.com/',
  },
];
</script>

<style lang="sass"></style>
