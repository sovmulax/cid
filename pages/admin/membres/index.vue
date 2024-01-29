<script setup>
const { $pb } = useNuxtApp();

let records;
try {
  records = await $pb.collection('members').getFullList();
} catch (error) {}
const data = ref(records);

definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="admin">
    <template #title-header> Membres </template>
    <template #btn-header>
      <nuxt-link to="/admin/membres/nouveau" class="btn btn-primary" type="button">
        <i class="mdi mdi-plus-circle mr-2"></i> Nouveau
      </nuxt-link>
    </template>
    <template #content>
      <div>
        <div class="row">
          <div v-for="item in data" :key="item.id" class="col-md-6 col-xl-3">
            <div class="card">
              <img
                class="card-img-top img-fluid size"
                :src="$pb.baseUrl + `/api/files/` + item.collectionId + `/` + item.id + `/` + item.picture"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title mt-0">{{ item.fullname }}</h5>
                <h6 class="card-title mt-0">{{ item.jobTitle }}</h6>
                <p class="card-text">
                  <a :href="item.email"><i class="mdi mdi-email font-20"></i> {{ item.email }}</a
                  ><br />
                  <a :href="item.linkedin"><i class="mdi mdi-linkedin-box font-20"></i> {{ item.linkedin }}</a
                  ><br />
                  <a :href="item.facebook"><i class="mdi mdi-facebook-box font-20"></i> {{ item.facebook }}</a
                  ><br />
                </p>
              </div>
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
