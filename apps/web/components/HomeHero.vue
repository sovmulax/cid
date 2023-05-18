<template>
  <div
    class="hero__wrapper flex w-full flex-col items-center justify-center overflow-hidden text-center text-white"
    role="img"
    aria-label="Photo de Marília Castelli sur Unsplash"
  >
    <h1 class="my-12 text-4xl font-bold leading-none tracking-wide md:text-8xl">
      Cellule d'Innovation et de Développement
    </h1>
    <p class="font-bold md:w-1/2 md:text-xl">
      La Cellule d'Innovation et de Dévéloppement (CID) est le centre de recherche de projets innovants de l'ESATIC.
    </p>
    <NuxtLink to="/contact" class="btn my-12">Vous avez un projet ?</NuxtLink>
    <Icon name="material-symbols:keyboard-double-arrow-down" size="32px" class="animate-bounce text-white" />
  </div>
</template>

<style lang="scss">
.hero__wrapper {
  height: 100vh;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 37%, rgba(0, 0, 0, 0.65) 100%),
    url('~/assets/img/home-hero.webp') no-repeat center center scroll;

  & h1,
  & p {
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  }
}
</style>
