<script setup>
const { $pb } = useNuxtApp();

let records;
try {
  records = await $pb.collection('projects').getFullList({
    sort: '-created',
  });
} catch (error) {}
const data = ref(records);

async function countask(id) {
  let allTasks;
  let doneTasks;
  try {
    allTasks = await $pb.collection('project_tasks').getFullList({
      filter: `projectId=${id}`,
    });

    doneTasks = await $pb.collection('project_tasks').getFullList({
      filter: `projectId=${id}&&status=3`,
    });
  } catch (error) {}

  const percent = (doneTasks.totalItems * 100) / allTasks.totalItems;
  return percent;
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="admin">
    <template #title-header> Projets </template>
    <template #btn-header>
      <nuxt-link to="/projects/form" class="btn btn-primary" type="button">
        <i class="mdi mdi-plus-circle mr-2"></i> Ajouter Un Projet
      </nuxt-link>
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
                    <td>{{ countask(item.id) }}%</td>
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
