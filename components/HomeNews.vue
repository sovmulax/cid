<template>
  <section class="flex flex-col items-center gap-12 py-16">
    <h1 class="text-center text-6xl font-bold tracking-tight">À la une</h1>
    <div v-if="!pending" class="flex flex-wrap justify-around">
      <div v-for="post in posts" :key="post.id" class="m-3 flex flex-col gap-1">
        <NuxtLink :to="`/actualites/${post.slug}`" class="zoom-in-effect inline-block w-80 overflow-hidden md:w-96">
          <img :src="post.cover" :alt="`Couverture de l'article : ${post.title}`" class="m-auto h-80 object-contain" />
        </NuxtLink>
        <NuxtLink :to="`/actualites/${post.slug}`" title="Lire l'article">
          <h2 class="text-xl font-semibold uppercase tracking-tight transition-colors hover:text-primary">
            {{ post.title }}
          </h2>
        </NuxtLink>
        <span>Publié {{ timeago(post.created) }}</span>
      </div>
    </div>
    <AppLoader v-else />
    <NuxtLink to="/actualites" class="btn btn--primary"> Voir toutes l'actualités </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { $pb } = useNuxtApp();
const { data: posts, pending } = await useLazyAsyncData<Post[]>(
  'posts',
  () => $pb.collection('posts').getList(1, 3, { sort: '-created' }) as Promise<any>,
  {
    transform: (posts: any) => posts.items.map((post: Post) => getFileUrl(post, 'cover')),
  }
);
</script>
