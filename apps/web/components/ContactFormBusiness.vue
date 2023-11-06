<template>
  <form class="flex flex-col gap-3 w-full px-3 lg:w-1/3" @submit.prevent="submit">
    <input
      v-model="data.company"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Nom de l'entreprise"
      required
    />

    <input
      v-model="data.contact"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Email/Numéro de téléphone"
      required
    />

    <input
      v-model="data.subject"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Objet"
      required
    />

    <textarea
      v-model="data.body"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      rows="4"
      placeholder="Parlez-nous de votre projet"
      required
    ></textarea>

    <button
      class="mt-3 rounded-md bg-primary p-3 text-xl font-bold text-white disabled:bg-gray-400"
      type="submit"
      :disabled="loading"
    >
      Envoyer
    </button>
  </form>
</template>

<script setup lang="ts">
import { ClientResponseError } from 'pocketbase';

const snackbar = useSnackbar();
const { $pb } = useNuxtApp();

const loading = ref(false);
const data = ref({
  company: '',
  contact: '',
  subject: '',
  body: '',
});

function clear() {
  data.value = {
    company: '',
    contact: '',
    subject: '',
    body: '',
  };
}

async function submit() {
  try {
    loading.value = true;

    await $pb.collection('inbox').create({
      company: data.value.company,
      contact: data.value.contact,
      subject: data.value.subject,
      body: data.value.body,
    });

    snackbar.add({
      type: 'success',
      text: 'Votre message a bien été envoyé !',
    });

    clear();
  } catch (error) {
    if (error instanceof ClientResponseError) {
      return snackbar.add({
        type: 'error',
        text: error.response.message,
      });
    }

    snackbar.add({
      type: 'error',
      text: "Une erreur est survenue lors de l'envoi du message !",
    });
  } finally {
    loading.value = false;
  }
}
</script>
