<!-- eslint-disable vue/no-v-html -->
<template>
  <main class="bg-neutral-50 lg:px-72 xl:px-96">
    <img :alt="`Couverture de l'article : ${post.title}`" :src="post.cover" class="max-h-96 w-full object-contain" />

    <div class="mx-auto flex max-w-4xl flex-col gap-3 p-9">
      <div class="text-center">
        <NuxtLink to="/" class="hover:text-gray-500">
          <Icon name="ic:round-home" />
        </NuxtLink>
        <Icon name="ic:round-keyboard-arrow-right" />
        <NuxtLink to="/actualites" class="hover:text-gray-500">Actualités</NuxtLink>
        <Icon name="ic:round-keyboard-arrow-right" />
        <span class="font-bold">{{ post.title }}</span>
      </div>

      <h1 class="text-center text-6xl font-bold tracking-tight">{{ post.title }}</h1>
      <p class="text-center">
        Publié par <span class="font-bold">{{ post.expand.author.name }}</span> ·
        <span class="text-gray-500">
          {{
            new Date(post.created).toLocaleDateString('fr', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </span>
      </p>
      <div class="mb-9 mt-3" v-html="post.content"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const { $pb } = useNuxtApp();
const response = await $pb.collection('posts').getFirstListItem(`slug="${slug}"`, {
  expand: 'author',
});
const post: Post = getFileUrl(response, 'cover');
</script>

<style scoped lang="scss">
// TODO: Add blog content style
</style>
