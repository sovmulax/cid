<template>
  <NuxtLayout name="body">
    <template #title-header> Evènements</template>
    <template #content>
      <div class="col-lg-12">
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
                <label>Auteur</label>
                <div>
                  <select class="form-control" v-model="author">
                    <option v-for="item in data" :key="item.id" :value="item.id">{{ item.username }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Photo</label>

                <div class="custom-file">
                  <input
                    @change="handleFileUpload"
                    id="fileInput"
                    type="file"
                    ref="image"
                    accept="*/*"
                    class="custom-file-input"
                  />
                  <label class="custom-file-label" for="customFile">Choisir une photo</label>
                </div>
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
    </template>
  </NuxtLayout>
</template>
<script setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';
const router = useRouter();
let records;
try {
  records = await pb.collection('users').getFullList();
} catch (error) {}
const data = ref(records);
const i = 1;

const title = ref('');
const content = ref('');
const author = ref('');
const slug = ref('');
const formData = new FormData();

async function Addpost() {
  try {
    const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', function () {
      for (let file of fileInput.files) {
        formData.append('documents', file);
      }
    });

    formData.append('title', title.value);
    formData.append('slug', slug.value);
    formData.append('author', author.value);
    formData.append('content', content.value);
    formData.append('cover', document.getElementById('fileInput').files[0]);

    console.log(formData);
    const createdRecord = await pb.collection('posts').create(formData);
    title.value = '';
    content.value = '';
    author.value = '';
    slug.value = '';

    router.push('/post');
  } catch (e) {
    console.log(e);
  }
}
</script>

<style scoped>
.size {
  height: 200px;
  object-fit: cover;
}
</style>
