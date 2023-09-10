// store/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    /* Initialize state from local storage to enable user to stay logged in */
    user: JSON.parse(localStorage.getItem("user")),
    savedToken: JSON.parse(localStorage.getItem("token")),
  }),
  getters: {
    token: (state) => state.savedToken,
  },
  actions: {
    async login() {
      const { $api } = useNuxtApp();
      const user = await $api.User.login("dhevan", "tes");
      console.log(user);
      this.savedToken = "CONTIH TOKEn";
      this.user = { user: "Contohh User" };
      localStorage.setItem("user", JSON.stringify({ user: "Conttoh User" }));
      localStorage.setItem("token", JSON.stringify("CONTOH TOKEN"));
      this.isAuthenticated = true;
    },
    logout() {
      this.user = null;
      this.savedToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
