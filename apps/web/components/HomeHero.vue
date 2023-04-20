<template>
  <div
    class="hero__wrapper flex justify-center items-center flex-col w-full overflow-hidden text-center text-white"
    role="img"
    aria-label="Photo de Marília Castelli sur Unsplash"
  >
    <h1 class="text-8xl my-12 font-bold tracking-wide leading-none">Cellule d'Innovation et de Développement</h1>
    <p class="md:w-1/2 font-bold text-xl">
      La Cellule d'Innovation et de Dévéloppement (CID) est le centre de recherche de projets innovants de l'ESATIC.
    </p>
    <NuxtLink to="#" class="btn my-12">Vous avez un projet ?</NuxtLink>
    <Icon name="material-symbols:keyboard-double-arrow-down" size="32px" class="text-white animate-bounce" />
  </div>
</template>

<style>
.hero__wrapper {
  height: 100vh;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 37%, rgba(0, 0, 0, 0.65) 100%),
    url('~/assets/img/home-hero.webp') no-repeat center center scroll;
}

.hero__wrapper h1,
.hero__wrapper p {
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
