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

  try {
    const response = await $pb.collection('users').authWithPassword(email.value, password.value);

    if (response) {
      user.value = response;
      $router.push('/admin/projets');
    }
  } catch (error) {
    alert(error);
  }

  pending.value = false;
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="account-pages">
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a href="/" class="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-12 object-contain" src="~/assets/img/logo.png" alt="Logo CID" />
        </a>
        <div
          class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
        >
          <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 class="text-center text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
              Espace administrateur
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="login">
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label>
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="admin@acme.co"
                  required
                />
              </div>
              <div>
                <label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Mot de passe
                </label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>

              <button
                class="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                :class="{ 'cursor-not-allowed': pending }"
                type="submit"
                :disabled="pending"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
