<script lang="ts" setup></script>

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
                    <th>Tâches</th>
                    <th>Membres</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <nuxt-link to="/"><i class="fas fa-arrow-circle-right"></i></nuxt-link>
                    </td>
                    <td>
                      <nuxt-link to="/"><i class="fas fa-arrow-circle-right"></i></nuxt-link>
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
