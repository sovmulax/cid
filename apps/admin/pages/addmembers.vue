<template>
  <NuxtLayout name="body">
    <template #title-header> Evènements</template>
    <template #content>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mt-0">Ajout de membres</h4>
              <p class="text-muted mb-4">Remplissez correctement les champs de ce formulaire sans aucune fantaisie</p>

              <form class="custom-validation" @submit.prevent="Addmembers" enctype="multipart/form-data">
                <div class="form-group">
                  <label>Nom & Prénoms</label>
                  <input
                    v-model="fullname"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Type something"
                    accept="image/*"
                  />
                </div>

                <div class="form-group">
                  <label>Poste de responsabilité</label>
                  <input v-model="jobTitle" type="text" class="form-control" required placeholder="Type something" />
                </div>
                <div class="form-group">
                  <div class="card">
                    <div class="card-body">
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
                  </div>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input v-model="email" type="text" class="form-control" required placeholder="Type something" />
                </div>
                <div class="form-group">
                  <label>Facebook</label>
                  <input v-model="facebook" type="text" class="form-control" required placeholder="Type something" />
                </div>
                <div class="form-group">
                  <label>Linkedin</label>
                  <input v-model="linkedin" type="text" class="form-control" required placeholder="Type something" />
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

const fullname = ref('');
const jobTitle = ref('');
const email = ref('');
const facebook = ref('');
const linkedin = ref('');
const formData = new FormData();
const router = useRouter();

// listen to file input changes and add the selected files to the form data

async function Addmembers() {
  try {
    const fileInput = document.getElementById('fileInput');

    // listen to file input changes and add the selected files to the form data
    fileInput.addEventListener('change', function () {
      for (let file of fileInput.files) {
        formData.append('documents', file);
      }
    });

    // set some other regular text field value

    formData.append('fullname', fullname.value);
    formData.append('jobTitle', jobTitle.value);
    formData.append('email', email.value);
    formData.append('facebook', facebook.value);
    formData.append('linkedin', linkedin.value);
    formData.append('picture', document.getElementById('fileInput').files[0]);
    console.log(formData);

    // upload and create new record
    const createdRecord = await pb.collection('members').create(formData);
  } catch (e) {}
  router.push('/members');
}
</script>
