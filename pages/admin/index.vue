<template>
  <div></div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
  middleware: [() => navigateTo('/admin/projects')],
});
</script>
