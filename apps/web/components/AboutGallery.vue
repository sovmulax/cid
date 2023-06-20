<template>
  <section class="flex flex-col items-center gap-12 px-9 pb-24 pt-12 lg:px-96">
    <h1 class="text-6xl font-bold tracking-tight">Galerie</h1>

    <div class="container">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectFade]"
        :centered-slides="true"
        :space-between="1000"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :navigation="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <img :src="slide" :alt="`Image n°${index + 1}`" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
const modules = import.meta.glob('@/assets/img/gallery/*');
const slides = (await Promise.all(Object.values(modules).map((importModule) => importModule()))).map(
  (mod: any) => mod.default
);
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;

  @media (min-width: 1024px) {
    height: 480px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
