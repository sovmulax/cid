<template>
  <NuxtLayout name="body">
    <template #title-header> Evènements</template>
    <template #content>
      <center>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="header-title mt-0">Ajout de membres</h4>
              <p class="text-muted mb-4">Remplissez correctement les champs de ce formulaire sans aucune fantaisie</p>

              <form class="custom-validation" @submit.prevent="Addmembers">
                <div class="form-group">
                  <label>Nom & Prénoms</label>
                  <input v-model="fullname" type="text" class="form-control" required placeholder="Type something" />
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
                        <input type="file" name="file" class="custom-file-input" id="customFile" />
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
      </center>
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
const router = useRouter();

async function Addmembers() {
  try {
    const data = {
      fullname: fullname.value,
      jobTitle: jobTitle.value,
      email: email.value,
      facebook: facebook.value,
      linkedin: linkedin.value,
    };

    console.log(data);
    const record = await pb.collection('members').create(data);
  } catch (e) {}
}
</script>
