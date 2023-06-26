<script lang="ts" setup>
import { ref } from 'vue';
import pb from '../pocket.config.js';
// const pb = new PocketBase('http://localhost:8080/');

const email = ref<string | null>(null);
const password = ref<string | null>(null);

// async function login() {
//   if (email && password) {
//     await pb
//       .collection('users')
//       .authWithPassword(email.value as string, password.value as string)
//       .then((user) => {
//         return user;
//         // navigateTo('/projects');
//         // console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

// const users = login();

// export const useAuth = () => useState('users', () => login())

</script>

<template>
  <div class="account-pages my-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-pattern shadow-none">
            <div class="card-body">
              <div class="p-3">
                <h4 class="font-18 text-center">Connexion</h4>
                <br />
                <div class="form-horizontal">
                  <div class="form-group">
                    <label for="username">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="email"
                      id="username"
                      placeholder="Enter username"
                    />
                  </div>

                  <div class="form-group">
                    <label for="userpassword">Mot de Passe</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="password"
                      id="userpassword"
                      placeholder="Enter password"
                    />
                  </div>

                  <div class="mt-3">
                    <button class="btn btn-primary btn-block waves-effect waves-light">Log In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
