<template>
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    app
    elevation="5"
    border="0"
  >
    <v-list-item style="height: 65px" class="px-2 bg-primary">
      <v-list-item-title class="text-center">
        <b>DigiCracker</b>
      </v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            :title="authStore.user.user"
            subtitle="john@google.com"
          >
          </v-list-item>
        </template>
        <div class="pa-2 mt-5">
          <v-btn @click="logout" color="red" block>Logout</v-btn>
        </div>
      </v-list-group>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <template v-for="(item, i) in items" :key="i">
        <NuxtLink :to="item.url">
          <v-list-item :value="item" color="primary" rounded="shaped">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </NuxtLink>
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-main app>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>
    <v-container class="pa-5 px-5">
      <NuxtPage />
    </v-container>
  </v-main>
</template>
<script setup>
import { useAuthStore } from "~/store/auth";
const authStore = useAuthStore();
const router = useRouter();
const drawer = ref(true);
const items = reactive([
  {
    title: "Gas Station",
    url: "/app/retail-channels",
  },
]);

function logout() {
  authStore.logout();
  router.replace("/");
}
</script>
