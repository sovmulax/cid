<template>
  <section class="flex flex-col items-center gap-12 px-9 pb-24 pt-12 lg:px-64">
    <h1 class="text-6xl font-bold tracking-tight">Galerie</h1>

    <div class="container">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div v-for="index in 6" :key="index" class="flex flex-wrap md:w-1/2 lg:w-1/3">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
