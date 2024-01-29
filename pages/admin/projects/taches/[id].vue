<script setup>
const projectId = useRoute().params.id;

if (!projectId) {
  navigateTo('/admin/projects');
}

const { $pb } = useNuxtApp();
const { data: tasks, pending } = await useLazyAsyncData(() =>
  $pb.collection('project_tasks').getFullList({
    filter: `projectId = "${projectId}"`,
    sort: 'status',
  })
);

// TODO: Update task status

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="admin">
    <template #title-header> Projets / Tâches </template>
    <template #btn-header>
      <nuxt-link to="/admin/projects" class="btn btn-primary">
        <i class="mdi mdi-arrow-left mr-1"></i> Retour
      </nuxt-link>
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-12 card">
          <div class="card-body">
            <h4 class="header-title mt-0">Liste des tâches</h4>
            <div class="table-responsive">
              <AppLoader v-if="pending" />
              <table v-else class="table-striped mb-0 table">
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
                  <tr v-for="(task, index) in tasks" :key="task.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ task.title }}</td>
                    <td>{{ task.name }}</td>
                    <td>{{ task.status }}</td>
                    <td></td>
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
