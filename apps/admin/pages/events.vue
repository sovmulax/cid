<script setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';

// collect data from pocketbase
let events;
let agenda;
try {
  agenda = await pb.collection('events').getFullList({
    filter: 'private = false',
  });
  events = await pb.collection('events').getFullList({
    filter: 'private = true',
  });
} catch (error) {}
const data1 = ref(events);
const data2 = ref(agenda);
const i = 1;
const j = 1;
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header>
      <h5>Agenda / Événements</h5>

    </template>
    <template #content>
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h4 class="mt-0 header-title">Listes des événements</h4>
              <p><NuxtLink to="addevent">Ajouter</NuxtLink></p>
              <div id="accordion">
                <div class="card mb-1">
                  <div id="headingOne" class="card-header p-3">
                    <h6
                      class="m-0 font-14 text-dark"
                      data-target="#collapseOne"
                      data-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Événements Privés (<code>Agenda</code>)
                    </h6>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      <h4 class="mt-0 header-title">Liste des Evenements</h4>
                      <p class="text-muted mb-4">Ces événements ne sont visibles que par vous.</p>
                      <div class="table-responsive">
                        <table class="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Titre</th>
                              <th>Type</th>
                              <th>Date de Début</th>
                              <th>Date de Fin</th>
                              <th>Privé ?</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in data1" :key="item.id">
                              <th scope="row">{{ i++ }}</th>
                              <td>{{ item.title }}</td>
                              <td>{{ item.type }}</td>
                              <td>{{ item.startDate }}</td>
                              <td>{{ item.endDate }}</td>
                              <td>{{ item.private }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-1">
                  <div id="headingTwo" class="card-header p-3">
                    <h6
                      class="m-0 font-14 text-dark collapsed hei"
                      data-target="#collapseTwo"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Événements <code>Publics</code>
                    </h6>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      <p class="text-muted mb-4"></p>
                      <div class="table-responsive">
                        <table class="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Titre</th>
                              <th>Type</th>
                              <th>Date de Début</th>
                              <th>Date de Fin</th>
                              <th>Privé ?</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in data2" :key="item.id">
                              <th scope="row">{{ j++ }}</th>
                              <td>{{ item.title }}</td>
                              <td>{{ item.type }}</td>
                              <td>{{ item.startDate }}</td>
                              <td>{{ item.endDate }}</td>
                              <td>{{ item.private }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.hei {
  height: 100% !important;
}
</style>
