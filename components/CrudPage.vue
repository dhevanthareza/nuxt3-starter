<template>
  <v-card class="pa-5">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </v-card>
  <v-card class="pa-5 mt-5">
    <v-container>
      <v-row justify="space-between">
        <div>
          <NuxtLink to="/app/retail-channels/create">
            <v-btn class="mr-2" color="primary">Buat Baru</v-btn>
          </NuxtLink>
          <v-btn color="success">Export To Excel</v-btn>
        </div>
        <v-btn color="info"> More </v-btn>
      </v-row>
    </v-container>
  </v-card>
  <ServerDatatable></ServerDatatable>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
