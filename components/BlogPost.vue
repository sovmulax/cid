<template>
  <article class="max-w-md overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
    <img :alt="`Couverture de l'article : ${post.title}`" :src="post.cover" class="h-56 w-full object-cover" />

    <div class="p-4 sm:p-6">
      <span class="mt-2 line-clamp-3 text-xs/relaxed text-gray-500">Publié {{ timeago(post.created) }}</span>

      <NuxtLink :to="`/actualites/${post.slug}`">
        <h2 class="text-lg font-medium text-gray-900">{{ post.title }}</h2>
      </NuxtLink>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {{ post.excerpt.length > 150 ? post.excerpt.substring(0, 150) + '...' : post.excerpt }}
      </p>

      <NuxtLink
        :to="`/actualites/${post.slug}`"
        class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
      >
        <span>En savoir plus</span>
        <Icon name="ic:round-arrow-right-alt" size="24px" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});
</script>
