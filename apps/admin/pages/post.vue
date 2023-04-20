<script setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';

// collect data from pocketbase
let records;
try {
  records = await pb.collection('post').getFullList();
} catch (error) {}
const data = ref(records);
const i = 1;
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Actualités </template>
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
                    <th>Titre</th>
                    <th>Date</th>
                    <th>Détails</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.id">
                    <th scope="row">{{ i++ }}</th>
                    <td>{{ item.title }}</td>
                    <td>
                      {{ item.created }}
                    </td>
                    <td><nuxt-link to="/post"><i class="fas fa-arrow-circle-right"></i></nuxt-link></td>
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
