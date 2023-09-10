<template>
  <h1>sadsa</h1>
  <span>{{ authStore.user.user }}</span>
</template>
<script setup>
import { useAuthStore } from "~/store/auth";
const authStore = useAuthStore();
</script>
