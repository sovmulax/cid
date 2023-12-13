export default defineNuxtRouteMiddleware((to, _) => {
  const user = useUserState();

  if (to.path === '/admin/login' && user.value) {
    return navigateTo('/admin/projects');
  }

  if (to.path.includes('/admin') && to.path !== '/admin/login' && !user.value) {
    return navigateTo('/admin/login');
  }
});
