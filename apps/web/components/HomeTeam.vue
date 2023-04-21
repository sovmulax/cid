<template>
  <section class="flex flex-col items-center py-16 gap-12">
    <h1 class="text-6xl font-bold tracking-tight">Une équipe d'experts</h1>
    <div class="flex gap-12">
      <div v-for="member in members" :key="member.fullname" class="w-64 text-center">
        <img
          :src="member.picture"
          :alt="`Photo de ${member.fullname}`"
          class="w-full h-64 object-cover rounded-full mb-3"
        />
        <h2 class="text-xl font-semibold uppercase tracking-tight">{{ member.fullname }}</h2>
        <h3 class="leading-6 text-neutral-800">{{ member.jobTitle }}</h3>
        <div class="flex gap-3 justify-center my-3">
          <a v-if="member.facebook" :href="member.facebook" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:facebook" size="48px" class="text-neutral-800 hover:text-black" />
          </a>
          <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:linkedin" size="48px" class="text-neutral-800 hover:text-black" />
          </a>
        </div>
      </div>
    </div>
    <NuxtLink to="/a-propos" class="btn btn--primary">En savoir plus</NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { $pb } = useNuxtApp();
const members: Member[] = await $pb.collection('members').getFullList();
members.map((member) => getFileUrl(member, 'picture'));
</script>

<style lang="scss"></style>
