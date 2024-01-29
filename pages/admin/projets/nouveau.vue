<script setup>
import { useAsyncData } from '#app';

const { $pb } = useNuxtApp();
const snackbar = useSnackbar();

const title = ref('');
const description = ref('');
const problem = ref('');
const domain = ref('');
const subDomain = ref('');
const duration = ref(0);
const startDate = ref('');
const endDate = ref('');

async function submit() {
  const { error } = await useAsyncData(() =>
    $pb.collection('projects').create({
      title: title.value,
      domain: domain.value,
      description: description.value,
      problem: problem.value,
      subDomain: subDomain.value,
      duration: duration.value,
      startDate: startDate.value,
      endDate: endDate.value,
      featured: false,
      private: true,
    })
  );

  if (error.value) {
    snackbar.add({
      type: 'info', // Not using 'error' because Bootstrap styling is making it unreadable
      text: 'Une erreur est survenue lors de la création du projet !',
    });
  } else {
    snackbar.add({
      type: 'success',
      text: 'Le projet a bien été créé !',
    });

    navigateTo('/admin/projets');
  }
}

// TODO: Add members

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="admin">
    <template #title-header> Ajouter projet </template>
    <template #btn-header>
      <nuxt-link to="/admin/projets" class="btn btn-primary">
        <i class="mdi mdi-arrow-left mr-1"></i> Retour
      </nuxt-link>
    </template>
    <template #content>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <form class="custom-validation" @submit.prevent="submit">
                <div class="form-group">
                  <label>Intitulé du Projet*</label>
                  <div>
                    <input v-model="title" type="text" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Domaine*</label>
                  <div>
                    <input v-model="domain" type="text" class="form-control" required />
                  </div>
                </div>
                <div class="form-group">
                  <label>Axe de recherche*</label>
                  <div>
                    <input v-model="subDomain" type="text" class="form-control" required />
                  </div>
                </div>
                <div class="form-group">
                  <label>Résumé du projet*</label>
                  <div>
                    <textarea v-model="description" type="text" class="form-control" required />
                  </div>
                </div>
                <div class="form-group">
                  <label>Problématique*</label>
                  <div>
                    <textarea v-model="problem" type="text" class="form-control" required />
                  </div>
                </div>
                <div class="form-group">
                  <label>Durée du projet*</label>
                  <select v-model.number="duration" class="form-control">
                    <option value="0" disabled selected>Choisir une durée</option>
                    <option v-for="index in 5" :key="index" :value="index">{{ index }} an(s)</option>
                  </select>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col form-group pl-0">
                      <label>Date de Début</label>
                      <input v-model="startDate" type="date" class="form-control" />
                    </div>
                    <div class="col form-group pr-0">
                      <label>Date de Fin</label>
                      <input v-model="endDate" type="date" class="form-control" />
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-4">* Champs obligatoires</p>
                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">Créer</button>
                    <button type="reset" class="btn btn-secondary waves-effect">Annuler</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
