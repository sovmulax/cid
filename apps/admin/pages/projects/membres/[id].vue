<script setup>
// import { ref } from 'vue';
import pb from '../../../pocket.config.js';
// collect data from pocketbase
let records;

try {
  const route = useRoute();
  const id = route.params.id;
  records = await pb.collection('project_members').getFullList({
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
            <h4 class="mt-0 header-title">Liste des Membres du Projet</h4>
            <div class="table-responsive">
              <table class="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom du Membre</th>
                    <th>Rôle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.name }}</td>
                    <td>{{ item.role }}</td>
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
