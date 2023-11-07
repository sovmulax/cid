<template>
  <main class="flex flex-col items-center gap-12 bg-neutral-50 py-24">
    <h1 class="text-center text-6xl font-bold tracking-tight">Actualités</h1>

    <div v-if="!pending" class="flex flex-wrap justify-center gap-9">
      <BlogPost v-for="post in response.items" :key="post.id" :post="post" />
    </div>
    <AppLoader v-else />

    <BlogPagination v-if="response" :current-page="currentPage" :total-pages="response.totalPages" />
  </main>
</template>

<script setup lang="ts">
const { query } = useRoute();
const { $pb } = useNuxtApp();
const currentPage = query.page ? parseInt(query.page as string) : 1;
const { data: response, pending } = await useLazyAsyncData<{ items: Post[]; totalPages: number }>(
  'posts',
  () => $pb.collection('posts').getList(currentPage, 6, { sort: '-created' }),
  {
    transform: ({ items, totalPages }) => ({
      totalPages,
      items: items.map((post) => getFileUrl(post, 'cover')),
    }),
  }
);
</script>
