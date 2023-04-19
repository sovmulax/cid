<template>
  <section class="flex flex-col items-center py-16">
    <h1 class="text-6xl font-bold tracking-tight">Une équipe d'experts</h1>
    <div class="flex mt-12 gap-12">
      <div v-for="member in members" :key="member.fullname" class="w-64 text-center">
        <img
          :src="member.profilePicture"
          :alt="`Photo de ${member.fullname}`"
          class="w-full h-64 object-cover rounded-full mb-3"
        />
        <h2 class="text-xl font-semibold uppercase tracking-tight">{{ member.fullname }}</h2>
        <h3 class="leading-6 text-neutral-800">{{ member.jobTitle }}</h3>
        <div class="flex gap-3 justify-center my-3">
          <a :href="member.facebook" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:facebook" size="48px" class="text-neutral-800 hover:text-black" />
          </a>
          <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:linkedin" size="48px" class="text-neutral-800 hover:text-black" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import drKouassiPicture from '@/assets/img/dr-kouassi.jpg';
import prAsseuPicture from '@/assets/img/pr-asseu.jpg';
import prDiabyPicture from '@/assets/img/pr-diaby.jpg';
import drPandryPicture from '@/assets/img/dr-pandry.jpg';

const members = [
  {
    fullname: 'Dr KOUASSI Franklin',
    jobTitle: 'Responsable',
    profilePicture: drKouassiPicture,
    linkedin: 'https://ci.linkedin.com/in/franklin-kouassi-00358113',
    facebook: 'https://www.facebook.com/',
  },
  {
    fullname: 'Pr ASSEU Olivier',
    jobTitle: 'Responsable',
    profilePicture: prAsseuPicture,
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
  },
  {
    fullname: 'Pr DIABY Moustapha',
    jobTitle: 'Responsable',
    profilePicture: prDiabyPicture,
    linkedin: 'https://ci.linkedin.com/in/moustapha-diaby-34040b58',
    facebook: 'https://www.facebook.com/',
  },
  {
    fullname: 'Dr PANDRY Ghislain',
    jobTitle: 'Responsable',
    profilePicture: drPandryPicture,
    linkedin: 'https://www.linkedin.com/in/ghislain-pandry-49b863108/',
    facebook: 'https://www.facebook.com/',
  },
];
</script>

<style scoped></style>
