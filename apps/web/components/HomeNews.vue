<template>
  <section class="flex flex-col items-center gap-12 py-16">
    <h1 class="text-center text-6xl font-bold tracking-tight">À la une</h1>
    <div class="flex flex-wrap justify-around">
      <div v-for="post in posts" :key="post.id" class="mb-3 flex flex-col gap-1">
        <NuxtLink :to="`/actualites/${post.slug}`" class="zoom-in-effect inline-block w-80 overflow-hidden md:w-96">
          <img :src="post.cover" :alt="`Couverture de l'article : ${post.title}`" class="h-80 object-cover" />
        </NuxtLink>
        <NuxtLink :to="`/actualites/${post.slug}`" title="Lire l'article">
          <h2 class="text-xl font-semibold uppercase tracking-tight transition-colors hover:text-primary">
            {{ post.title }}
          </h2>
        </NuxtLink>
        <span>Publié {{ format(post.created, 'fr') }}</span>
      </div>
    </div>
    <NuxtLink to="/actualites" class="btn btn--primary"> Voir toutes l'actualités </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { format, register } from 'timeago.js';
import fr from 'timeago.js/lib/lang/fr';

register('fr', fr);

const { $pb } = useNuxtApp();
const response = await $pb.collection('posts').getList(1, 3, { sort: '-created' });
const posts = response.items as unknown as Post[];
posts.map((post) => getFileUrl(post, 'cover'));
</script>
