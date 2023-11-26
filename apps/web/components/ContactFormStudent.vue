<template>
  <form class="flex w-full flex-col gap-3 px-3 lg:w-1/3" @submit.prevent="submit">
    <input
      v-model="data.title"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Titre du projet"
      required
    />

    <input
      v-model="data.domain"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Domaine Scientifique (Ex: Bio-informatique)"
      required
    />

    <input
      v-model="data.subDomain"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Axe de recherche (Ex: Intelligence Artificielle, Internet des Objets, Biologie, etc.)"
      required
    />

    <select
      v-model="data.duration"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
    >
      <option value="0" disabled selected>Durée du Projet</option>
      <option v-for="index in 5" :key="index" :value="index">{{ index }} an(s)</option>
    </select>

    <textarea
      v-model="data.description"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      rows="4"
      placeholder="Résume du projet (maximum 250 mots)"
      required
    ></textarea>

    <textarea
      v-model="data.problem"
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      rows="4"
      placeholder="Problématique (maximum 500 mots)"
      required
    ></textarea>

    <div class="my-3 flex items-center gap-3">
      <span class="text-xl font-semibold">Équipe de recherche</span>

      <button
        class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white"
        type="button"
        title="Ajouter membre"
        @click="addMember"
      >
        <Icon name="ic:round-plus" />
      </button>
    </div>

    <div v-if="!members.length">
      <p>Veuillez ajouter au moins un membre d'équipe</p>
    </div>
    <div v-else>
      <div v-for="(member, index) in members" :key="`member-${index}`" class="flex flex-col gap-3 pb-9">
        <div class="flex items-center gap-3">
          <span class="text-lg font-semibold">Membre {{ index + 1 }}</span>

          <button
            class="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white"
            type="button"
            title="Supprimer membre"
            @click="removeMember(index)"
          >
            <Icon name="ic:round-delete" />
          </button>
        </div>

        <div class="flex flex-wrap gap-3">
          <input
            v-model="member.name"
            class="focus:shadow-outline flex-grow-[2] appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
            type="text"
            placeholder="Nom et prénom(s)"
            required
          />

          <select
            v-model="member.gender"
            class="focus:shadow-outline flex-grow appearance-none rounded border p-3 pr-9 leading-tight text-gray-700 focus:outline-none"
          >
            <option disabled value="">Sexe</option>
            <option value="H">Homme</option>
            <option value="F">Femme</option>
          </select>
        </div>

        <select
          v-model="member.speciality"
          class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
        >
          <option disabled value="">Filière</option>
          <option v-for="speciality in specialities" :key="speciality.code" :value="speciality.code">
            {{ speciality.name }}
          </option>
        </select>

        <div class="flex flex-wrap gap-3">
          <input
            v-model="member.phone"
            class="focus:shadow-outline flex-grow appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
            type="tel"
            placeholder="Téléphone"
            required
          />

          <input
            v-model="member.email"
            class="focus:shadow-outline flex-grow appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
      </div>
    </div>

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
const members = ref([] as ProjectMember[]);
const specialities = [
  { code: 'SRIT', name: 'Système Réseaux Informatique et Télécommunication' },
  { code: 'SIGL', name: 'Système Informatique et Génie Logiciel' },
  { code: 'RTEL', name: 'Réseaux Télécommunication' },
  { code: 'TWIN', name: 'Technologies du Web et Image Numérique' },
];

const data = ref({
  title: '',
  domain: '',
  subDomain: '',
  duration: 0,
  description: '',
  problem: '',
});

function addMember() {
  members.value.push({
    name: '',
    gender: '',
    speciality: '',
    phone: '',
    email: '',
    role: 'Membre',
  });
}

function removeMember(index: number) {
  members.value.splice(index, 1);
}

function clear() {
  data.value = {
    title: '',
    domain: '',
    subDomain: '',
    duration: 0,
    description: '',
    problem: '',
  };
  members.value = [];
}

/**
 * Validates the form data.
 * Returns true if the form data is valid, otherwise returns an error message.
 */
function validate(): boolean | string {
  if (countWords(data.value.description) > 250) {
    return 'Le résume du projet ne doit pas dépasser 250 mots !';
  }

  if (countWords(data.value.problem) > 500) {
    return 'La problématique ne doit pas dépasser 500 mots !';
  }

  return true;
}

async function submit() {
  const formValidation = validate();

  if (formValidation !== true) {
    return snackbar.add({
      type: 'error',
      text: formValidation,
    });
  }

  try {
    loading.value = true;

    const { id } = await $pb.collection('projects').create({ ...data.value, private: true });

    for (const member of members.value) {
      await $pb.collection('project_members').create({
        projectId: id,
        ...member,
      });
    }

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
