<script setup>
import { ref } from 'vue';
// import pb from '../pocket.config.js';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://cid.marcaureln.com');
try {
  await pb.admins.authWithPassword('soumailaevane@gmail.com', 'onditmdpdoitetrelong');
} catch (error) {
  // console.log(error);
}

const title = ref('');
const slug = ref('');
const content = ref('');
async function Addpost() {
  try {
    // const data = {
    //   title: title.value,
    //   content: content.value,
    //   author: 'KONAN FABRICE',
    //   slug: slug.value,
    // };
    const data = {
      title: 'test Fabino',
      content: 'test',
      author: 'RELATION_RECORD_ID',
      slug: 'test',
    };
    console.log(data);

    const records = await pb.collection('posts').create(data);
  } catch (e) {
    console.log(e);
  }
}

// collect data from pocketbase
</script>

<template>
  <NuxtLayout name="body">
    <template #title-header> Evènements</template>
    <template #content>
      <center>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mt-0">Ajout d'actualités</h4>
              <p class="text-muted mb-4">Remplissez correctement les champs de ce formulaire sans aucune fantaisie</p>

              <form class="custom-validation" @submit.prevent="Addpost">
                <div class="form-group">
                  <label>Titre</label>
                  <input v-model="title" type="text" class="form-control" required placeholder="Type something" />
                </div>

                <div class="form-group">
                  <label>Slug</label>
                  <input v-model="slug" type="text" class="form-control" required placeholder="Type something" />
                </div>

                <div class="form-group">
                  <label>Détails</label>
                  <div>
                    <textarea v-model="content" required class="form-control" rows="5" type="text"></textarea>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">Envoyer</button>
                    <button type="reset" class="btn btn-secondary waves-effect">Annuler</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </center>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.size {
  height: 200px;
  object-fit: cover;
}
</style>
