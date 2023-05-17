<script setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';

// collect data from pocketbase
let records;
try {
  records = await pb.collection('clients').getFullList();
} catch (error) {}
const data = ref(records);
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Entreprises </template>
    <template #content>
      <div class="row">
        <div v-for="item in data" :key="item.id" class="col-md-6 col-xl-3">
          <div class="card">
            <img
              class="card-img-top img-fluid size"
              :src="`https://pb.marcaureln.com/api/files/` + item.collectionId + `/` + item.id + `/` + item.logo"
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title font-16 mt-0">{{ item.name }}</h4>
              <p class="card-text"></p>
              <a :href="item.link" target="_blank" class="btn btn-primary waves-effect waves-light">Lien</a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.size {
  height: 200px;
  object-fit: cover;
}
</style>
