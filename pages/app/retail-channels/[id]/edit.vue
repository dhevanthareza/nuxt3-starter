<template>
    <v-card>
      <v-container>
        <h1>Edit {{ channel_id }}</h1>
      </v-container>
    </v-card>
  </template>
  <script setup>
  const route = useRoute();
  const channel_id = route.params.id;
  </script>
  