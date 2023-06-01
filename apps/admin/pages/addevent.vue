<template>
  <NuxtLayout name="body">
    <template #title-header> Evènements</template>
    <template #content>
      <center>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mt-0">Ajout d'actualités</h4>
              <p class="text-muted mb-4">Remplissez correctement les champs de ce formulaire sans aucune fantaisie</p>

              <form class="custom-validation" @submit.prevent="Createvent">
                <div class="form-group">
                  <label>Titre</label>
                  <input v-model="title" type="text" class="form-control" required placeholder="Type something" />
                </div>

                <div class="form-group">
                  <label>Type</label>
                  <div>
                    <select v-model="type" class="custom-select">
                      <option selected>--</option>
                      <option value="Réunion">Réunion</option>
                      <option value="TAF">TAF</option>
                      <option value="Formation">Formation</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="example-date-input">Date debut</label>

                  <input
                    id="example-date-input"
                    v-model="startDate"
                    class="form-control"
                    type="date"
                    placeholder="2011-08-19"
                  />
                </div>
                <div class="form-group">
                  <label for="example-date-input">Date Fin</label>

                  <input
                    id="example-date-input"
                    v-model="endDate"
                    class="form-control"
                    type="date"
                    placeholder="2011-08-19"
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

const router = useRouter();

async function Createvent() {
  try {
    const data = {
      title: title.value,
      type: type.value,
      startDate: startDate.value,
      endDate: endDate.value,
      private: true,
    };

    console.log(data);
    const record = await pb.collection('events').create(data);
    router.push('/events');
  } catch (e) {}
}
</script>
