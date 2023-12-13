import PocketBase from 'pocketbase';

export default defineNuxtPlugin(() => {
  const { apiBaseUrl } = useRuntimeConfig().public;
  const pb = new PocketBase(apiBaseUrl);

  return {
    provide: { pb },
  };
});
