<script lang="ts" setup>
const { $pb, $router } = useNuxtApp();
const user = useUserState();
const email = ref('');
const password = ref('');
const pending = ref(false);

async function login() {
  pending.value = true;

  if (!email.value || !password.value) {
    alert('Veuillez remplir tous les champs');
  }

  const response = await $pb.collection('users').authWithPassword(email.value, password.value);

  if (response) {
    user.value = response;
    $router.push('/projects');
  } else {
    alert('Email ou mot de passe incorrect');
  }

  pending.value = false;
}
</script>

<template>
  <div class="account-pages my-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-pattern shadow-none">
            <div class="card-body">
              <form class="p-3" @submit.prevent="login">
                <h4 class="font-18 text-center">Connexion</h4>
                <br />
                <div class="form-horizontal">
                  <div class="form-group">
                    <label for="username">Email</label>
                    <input
                      id="username"
                      v-model="email"
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <label for="password">Mot de Passe</label>
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Mot de passe"
                      required
                    />
                  </div>

                  <div class="mt-3">
                    <button
                      class="btn btn-primary btn-block waves-effect waves-light"
                      :class="{ 'cursor-not-allowed': pending }"
                      type="submit"
                      :disabled="pending"
                    >
                      Se connecter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
