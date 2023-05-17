<template>
  <NuxtLayout name="body">
    <template #title-header> Evènements</template>
    <template #content>
      <center>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="mt-0 header-title">Ajout d'actualités</h4>
              <p class="text-muted mb-4">Remplissez correctement les champs de ce formulaire sans aucune fantaisie</p>

              <form class="custom-validation" @submit.prevent="Createvent">
                <div class="form-group">
                  <label>Titre</label>
                  <input type="text" class="form-control" required placeholder="Type something" v-model="title" />
                </div>

                <div class="form-group">
                  <label>Type</label>
                  <div>
                    <select v-model="type" class="custom-select">
                      <option selected>--</option>
                      <option value="Formation">Formation</option>
                      <option value="Reunion">Réunion</option>
                      <option value="Briefing">Briefing</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="example-date-input">Date debut</label>

                  <input
                    class="form-control"
                    type="date"
                    v-model="startDate"
                    placeholder="2011-08-19"
                    id="example-date-input"
                  />
                </div>
                <div class="form-group">
                  <label for="example-date-input">Date Fin</label>

                  <input
                    class="form-control"
                    type="date"
                    v-model="endDate"
                    placeholder="2011-08-19"
                    id="example-date-input"
                  />
                </div>

                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">Envoyer</button>
                    <button type="reset" class="btn btn-secondary waves-effect">Annuler</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </template>
  </NuxtLayout>
</template>
<script setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';

const title = ref('');
const type = ref('');
const startDate = ref('');
const endDate = ref('');

async function Createvent() {
  try {
    const data = {
      title: title.value,
      type: type.value,
      startDate: '2022-01-01 10:00:00.123Z',
      endDate: '2022-01-01 10:00:00.123Z',
      private: true,
    };
    console.log(data);

    const record = await pb.collection('events').create(data);
    // Gérer la réponse du serveur en cas de succès
  } catch (e) {
    console.log(e);
    // Gérer les erreurs de création d'événement
  }
}
</script>
