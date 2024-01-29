export default defineNuxtRouteMiddleware((to, _) => {
  const user = useUserState();

  if (['/admin', '/admin/login'].includes(to.path) && user.value) {
    return navigateTo('/admin/projects');
  }

  if (to.path.startsWith('/admin') && to.path !== '/admin/login' && !user.value) {
    return navigateTo('/admin/login');
  }
});
