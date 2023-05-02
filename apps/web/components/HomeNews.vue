<template>
  <section class="flex flex-col items-center py-16 gap-12">
    <h1 class="text-6xl font-bold tracking-tight text-center">À la une</h1>
    <div class="flex flex-wrap justify-around">
      <div v-for="post in posts" :key="post.id" class="flex flex-col gap-1 mb-3">
        <NuxtLink :to="`/actualites/${post.slug}`" class="post__wrapper w-80 md:w-96 overflow-hidden inline-block">
          <img
            :src="post.cover"
            :alt="`Couverture de l'article : ${post.title}`"
            class="h-80 object-cover block transition-all"
          />
        </NuxtLink>
        <NuxtLink :to="`/actualites/${post.slug}`" title="Lire l'article">
          <h2 class="text-xl font-semibold uppercase tracking-tight hover:text-primary transition-colors">
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
const posts: Post[] = response.items;
posts.map((post) => getFileUrl(post, 'cover'));
</script>

<style lang="scss">
// Image zoom in on hover effect -- I don't know how to do it with Tailwind
.post__wrapper:hover img {
  transform: scale(1.1);
  transform-origin: 50% 50%;
}
</style>
