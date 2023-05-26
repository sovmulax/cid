<template>
  <form class="flex flex-col gap-3 lg:w-1/3" @submit.prevent="submit">
    <input
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Titre du projet"
      required
    />

    <input
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Domaine Scientifique (Ex: Bio-informatique)"
      required
    />

    <input
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      type="text"
      placeholder="Axe de recherche (Ex: Intelligence Artificielle, Internet des Objets, Biologie, etc.)"
      required
    />

    <select
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
    >
      <option disabled selected>Durée du Projet</option>
      <option v-for="index in 5" :key="index" :value="index">{{ index }} an(s)</option>
    </select>

    <textarea
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      rows="4"
      placeholder="Résume du projet (maximum 250 mots et 05 mots-clés)"
      maxlength="250"
      required
    ></textarea>

    <textarea
      class="focus:shadow-outline appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
      rows="4"
      placeholder="Problématique (maximum 500 mots)"
      maxlength="500"
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

        <div class="flex gap-3">
          <input
            class="focus:shadow-outline flex-grow appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
            type="text"
            placeholder="Nom et prénom(s)"
            required
          />

          <select
            v-model="member.gender"
            class="focus:shadow-outline appearance-none rounded border p-3 pr-9 leading-tight text-gray-700 focus:outline-none"
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

        <div class="flex gap-3">
          <input
            class="focus:shadow-outline flex-grow appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
            type="tel"
            placeholder="Téléphone"
            required
          />

          <input
            class="focus:shadow-outline flex-grow appearance-none rounded border p-3 leading-tight text-gray-700 focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
      </div>
    </div>

    <button class="mt-3 rounded-md bg-primary p-3 text-xl font-bold text-white" type="submit">Envoyer</button>
  </form>
</template>

<script setup lang="ts">
interface Member {
  name: string;
  gender: string;
  speciality: string;
  phone: string;
  email: string;
}

const members = ref([] as Member[]);
const specialities = [
  { code: 'SRIT', name: 'Système Réseaux Informatique et Télécommunication' },
  { code: 'SIGL', name: 'Système Informatique et Génie Logiciel' },
  { code: 'RTEL', name: 'Réseaux Télécommunication' },
  { code: 'TWIN', name: 'Technologies du Web et Image Numérique' },
];

function addMember() {
  members.value.push({
    name: '',
    gender: '',
    speciality: '',
    phone: '',
    email: '',
  });
}

function removeMember(index: number) {
  members.value.splice(index, 1);
}

function submit() {
  alert('Votre message a bien été envoyé !');
}
</script>
