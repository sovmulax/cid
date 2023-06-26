<script setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';

// collect data from pocketbase
let records;
try {
  records = await pb.collection('posts').getFullList();
} catch (error) {}
const data = ref(records);
const i = 1;
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Actualités </template>
    <template #btn-header>
      <nuxt-link  to="addactualite" class="btn btn-primary" type="button">
        <i class="mdi mdi-plus-circle mr-2"></i> Ajouter Un Post
      </nuxt-link>
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-12 card">
          <div class="card-body">
            <h4 class="header-title mt-0">Liste des Articles</h4>
            <div class="table-responsive">
              <table class="table-striped mb-0 table">
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
                    <td>
                      {{ item.content }}
                    </td>
                    <td>
                      <nuxt-link to="/post"><i class="fas fa-arrow-circle-right"></i></nuxt-link>
                    </td>
                    <td>
                      <NuxtLink to="/"
                        ><span style="color: green"><i class="fas fa-marker"></i></span></NuxtLink
                      ><button style="border: none">
                        <span style="color: red"><i class="far fa-trash-alt"></i></span>
                      </button>
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
