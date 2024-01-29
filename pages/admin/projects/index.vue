<script setup>
const { $pb } = useNuxtApp();
const { data, pending } = await useLazyAsyncData('projects', () =>
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
      <nuxt-link to="/admin/projects/new" class="btn btn-primary">
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
                  <tr v-for="item in data" :key="item.id">
                    <th scope="row"></th>
                    <td>{{ item.title }}</td>
                    <td>{{ item.domain }}</td>
                    <td>{{ item.subDomain }}</td>
                    <td>{{ dateformat(item.startDate) }}</td>
                    <td>{{ dateformat(item.endDate) }}</td>
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
