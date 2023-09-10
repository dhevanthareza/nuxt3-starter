import { useAuthStore } from "~/store/auth";
export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if(to.path == "/" && authStore.token != null) {
    return navigateTo("/app")
  }
  if (to.path != "/" &&  authStore.token == null) {
    return navigateTo("/");
  }
});
