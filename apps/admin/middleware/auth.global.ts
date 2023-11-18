export default defineNuxtRouteMiddleware((to, _) => {
  const user = useUserState();

  if (to.path === '/' && user.value) {
    return navigateTo('/projects');
  }

  if (to.path !== '/' && !user.value) {
    return navigateTo('/');
  }
});
