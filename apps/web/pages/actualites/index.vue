<template>
  <main class="flex min-h-screen flex-col items-center gap-9 bg-neutral-50 p-9">
    <h1 class="text-6xl font-bold tracking-tight">Actualités</h1>

    <div class="flex flex-wrap gap-9">
      <BlogPost v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <BlogPagination :current-page="currentPage" :total-pages="response.totalPages" />
  </main>
</template>

<script setup lang="ts">
const { query } = useRoute();
const { $pb } = useNuxtApp();
const currentPage = query.page ? parseInt(query.page as string) : 1;
const response = await $pb.collection('posts').getList(currentPage, 6, { sort: '-created' });
const posts = response.items as unknown as Post[];
posts.map((post) => getFileUrl(post, 'cover'));
</script>
