<script setup>
const { $pb } = useNuxtApp();

let events;
let agenda;
try {
  agenda = await $pb.collection('events').getFullList({
    filter: 'private = false',
  });
  events = await $pb.collection('events').getFullList({
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
    <template #btn-header>
      <nuxt-link to="addevent" class="btn btn-primary" type="button">
        <i class="mdi mdi-plus-circle mr-2"></i> Ajouter Un Evenement
      </nuxt-link>
    </template>
    <template #content>
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mt-0">Listes des événements</h4>
              <div id="accordion">
                <div class="card mb-1">
                  <div id="headingOne" class="card-header p-3">
                    <h6
                      class="font-14 text-dark m-0"
                      data-target="#collapseOne"
                      data-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Événements Privés (<code>Agenda</code>)<i class="mdi mdi-gamepad-round-outline"></i>
                    </h6>
                  </div>

                  <div id="collapseOne" class="show collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                      <h4 class="header-title mt-0">Liste des Evenements</h4>
                      <p class="text-muted mb-4">Ces événements ne sont visibles que par vous.</p>
                      <div class="table-responsive">
                        <table class="table-striped mb-0 table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Titre</th>
                              <th>Type</th>
                              <th>Date de Début</th>
                              <th>Date de Fin</th>
                              <th>Privé ?</th>
                              <!-- <th>Actions</th> -->
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in data1" :key="item.id">
                              <th scope="row">{{ i++ }}</th>
                              <td>{{ item.title }}</td>
                              <td>{{ item.type }}</td>
                              <td>{{ item.startDate }}</td>
                              <td>{{ item.endDate }}</td>
                              <td>{{ item.private == true ? 'oui' : 'non' }}</td>
                              <!-- <td>
                                <NuxtLink to="/"><span style="color:green"><i class="fas fa-marker"></i></span></NuxtLink
                                ><button style="border: none">
                                  <span style="color: red"><i class="far fa-trash-alt"></i></span>
                                </button>
                              </td> -->
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
                      class="font-14 text-dark collapsed hei m-0"
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
                        <table class="table-striped mb-0 table">
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
                              <td>{{ item.private == true ? 'oui' : 'non' }}</td>
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
