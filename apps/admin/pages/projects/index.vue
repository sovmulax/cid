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
// console.log(data.value.length);
// const i = 1;
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header>
      <h5>Projets</h5>
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-12 card">
          <div class="card-body">
            <h4 class="mt-0 header-title">Liste des Articles</h4>
            <p class="text-muted mb-4"></p>
            <div class="table-responsive">
              <table class="table table-striped mb-0">
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
                      <nuxt-link :to="`/taches/` + item.id"><i class="fas fa-arrow-circle-right"></i></nuxt-link>
                    </td>
                    <td>
                      <nuxt-link :to="`/membres/` + item.id"><i class="fas fa-arrow-circle-right"></i></nuxt-link>
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
