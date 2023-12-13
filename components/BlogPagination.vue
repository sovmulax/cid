<template>
  <div class="inline-flex items-center justify-center gap-3">
    <NuxtLink
      :to="prev"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Page précédente</span>
      <Icon name="ic:round-keyboard-arrow-left" />
    </NuxtLink>

    <p class="text-xs text-gray-900">
      {{ currentPage }}
      <span class="mx-0.25">/</span>
      {{ totalPages }}
    </p>

    <NuxtLink
      :to="next"
      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Page suivante</span>
      <Icon name="ic:round-keyboard-arrow-right" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 1,
  },
});

const prev = computed(() => (props.currentPage > 1 ? `/actualites?page=${props.currentPage - 1}` : undefined));
const next = computed(() =>
  props.currentPage < props.totalPages ? `/actualites?page=${props.currentPage + 1}` : undefined
);
</script>
