<template>
  <form class="flex flex-col gap-3 lg:w-1/3" @submit.prevent="submit">
    <input
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 shadow focus:outline-none"
      type="text"
      placeholder="Nom de l'entreprise"
      required
    />

    <input
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 shadow focus:outline-none"
      type="text"
      placeholder="Email/Numéro de téléphone"
      required
    />

    <input
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 shadow focus:outline-none"
      type="text"
      placeholder="Objet"
      required
    />

    <textarea
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 shadow focus:outline-none"
      rows="4"
      placeholder="Parlez-nous de votre projet"
      required
    ></textarea>

    <button class="mt-3 rounded-md bg-primary p-3 text-xl font-bold text-white" type="submit">Envoyer</button>
  </form>
</template>

<script setup lang="ts">
function submit() {
  alert('Votre message a bien été envoyé !');
}
</script>
