<script setup>
const { $pb } = useNuxtApp();
const { data: projects, pending } = await useLazyAsyncData('projects', () =>
  $pb.collection('projects').getFullList({
    sort: '-created',
  })
);

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="admin">
    <template #title-header> Projets </template>
    <template #btn-header>
      <nuxt-link to="/admin/projets/nouveau" class="btn btn-primary">
        <i class="mdi mdi-plus mr-1"></i> Nouveau
      </nuxt-link>
    </template>
    <template #content>
      <div class="row">
        <div class="col-md-12 card">
          <div class="card-body">
            <h4 class="header-title mt-0">Liste des projets</h4>
            <p class="text-muted mb-4"></p>
            <div class="table-responsive">
              <AppLoader v-if="pending" />
              <table v-else class="table-striped mb-0 table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Intitulé</th>
                    <th>Domaine</th>
                    <th>Sous-Domaine</th>
                    <th>Date Début</th>
                    <th>Date Fin</th>
                    <th>Tâches</th>
                    <th>Membres</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="project in projects" :key="project.id">
                    <th scope="row"></th>
                    <td>{{ project.title }}</td>
                    <td>{{ project.domain }}</td>
                    <td>{{ project.subDomain }}</td>
                    <td>{{ dateformat(project.startDate) }}</td>
                    <td>{{ dateformat(project.endDate) }}</td>
                    <td>
                      <nuxt-link :to="`/admin/projets/taches/${project.id}`"
                        ><i class="fas fa-arrow-circle-right"></i
                      ></nuxt-link>
                    </td>
                    <td>
                      <nuxt-link :to="`/admin/projets/membres/${project.id}`">
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
