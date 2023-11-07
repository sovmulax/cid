<template>
  <section class="flex flex-col items-center gap-12 py-16">
    <h1 class="text-center text-6xl font-bold tracking-tight">Une équipe d'experts</h1>
    <div v-if="!pending" class="flex flex-wrap justify-around gap-12">
      <div v-for="member in members as Member[]" :key="member.fullname" class="w-64 text-center">
        <img
          :src="member.picture"
          :alt="`Photo de ${member.fullname}`"
          class="mb-3 h-64 w-full rounded-full object-cover"
        />
        <h2 class="text-xl font-semibold uppercase tracking-tight">{{ member.fullname }}</h2>
        <h3 class="leading-6 text-neutral-800">{{ member.jobTitle }}</h3>
        <div class="my-3 flex justify-center gap-3">
          <a v-if="member.facebook" :href="member.facebook" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:facebook" size="48px" class="text-neutral-800 hover:text-black" />
          </a>
          <a v-if="member.linkedin" :href="member.linkedin" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:linkedin" size="48px" class="text-neutral-800 hover:text-black" />
          </a>
        </div>
      </div>
    </div>
    <AppLoader v-else />
    <NuxtLink to="/a-propos" class="btn btn--primary">En savoir plus</NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { $pb } = useNuxtApp();
const { data: members, pending } = await useLazyAsyncData<Member[]>(
  'members',
  () => $pb.collection('members').getList(1, 4, { sort: 'created' }) as Promise<any>,
  {
    transform: (members: any) => members.items.map((member: Member) => getFileUrl(member, 'picture')),
  }
);
</script>
