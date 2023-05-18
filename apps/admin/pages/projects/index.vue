<script setup>
import { ref } from 'vue';
import pb from '../../pocket.config.js';
import dateformat from '../../helper/helper.js';
// collect data from pocketbase
let records;
try {
  records = await pb.collection('projects').getFullList();
} catch (error) {}
const data = ref(records);
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Projets </template>
    <template #btn-header>
      <button class="btn btn-primary" type="button" data-toggle="modal" data-target=".bs-example-modal-center">
        <i class="mdi mdi-plus-circle mr-2"></i> Ajouter Un Projet
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
                <a
                  href="#"
                  class="btn btn-success"
                  data-dismiss="modal"
                  @click="updatetask(item.id, parseInt(item.status))"
                  >Terminer</a
                >
                <a href="#" class="btn btn-danger">Annuler</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-12 card">
          <div class="card-body">
            <h4 class="header-title mt-0">Liste des Articles</h4>
            <p class="text-muted mb-4"></p>
            <div class="table-responsive">
              <table class="table-striped mb-0 table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Intitulé</th>
                    <th>Domaine</th>
                    <th>Sous-Domaine</th>
                    <th>Date Début</th>
                    <th>Date Fin</th>
                    <th>État</th>
                    <th>Tâches</th>
                    <th>Membres</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.id">
                    <th scope="row"></th>
                    <td>{{ item.title }}</td>
                    <td>{{ item.domain }}</td>
                    <td>{{ item.subDomain }}</td>
                    <td>{{ dateformat(item.startDate) }}</td>
                    <td>{{ dateformat(item.endDate) }}</td>
                    <td>0%</td>
                    <td>
                      <nuxt-link :to="`/projects/taches/${item.id}`"
                        ><i class="fas fa-arrow-circle-right"></i
                      ></nuxt-link>
                    </td>
                    <td>
                      <nuxt-link :to="`/projects/membres/${item.id}`">
                        <i class="fas fa-arrow-circle-right"></i>
                      </nuxt-link>
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
