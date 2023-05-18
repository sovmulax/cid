<script setup>
// import { ref } from 'vue';
import pb from '../../../pocket.config.js';
// collect data from pocketbase
let records;

try {
  const route = useRoute();
  const id = route.params.id;
  records = await pb.collection('project_tasks').getFullList({
    filter: `projectId = "${id}"`,
  });
} catch (error) {
  // console.log(error);
}
const data = ref(records);
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Projets / Membres </template>
    <template #content>
      <div class="row">
        <div class="col-md-12 card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Liste des Tâches du Projet</h4>
            <div class="table-responsive">
              <table class="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Intitulé</th>
                    <th>Exécutant</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.title }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.status }}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary waves-effect waves-light"
                        data-toggle="modal"
                        data-target=".bs-example-modal-center"
                      >
                        Update
                      </button>
                      <div
                        class="modal fade bs-example-modal-center"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="mySmallModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title mt-0">Mise à Jour de la tâche</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <div class="d-flex justify-content-around">
                                <a href="#" class="btn btn-success">Confirmer</a>
                                <a href="#" class="btn btn-danger">Annuler</a>
                              </div>
                            </div>
                          </div>
                          <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                      </div>
                      <!-- /.modal -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
