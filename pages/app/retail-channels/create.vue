<template>
  <v-card>
    <v-container>
      <h1>Gas Station</h1>
      <h4>Buat Gas Station Baru</h4>
    </v-container>
  </v-card>
  <v-card class="mt-5">
    <v-container>
      <DyanmicForm :schemas="schemas" />
    </v-container>
  </v-card>
</template>
<script setup>
import * as Yup from "yup";

const schemas = [
  {
    label: "SPBU Number",
    name: "spbuNumber",
    validation: Yup.string().required().label("SPBU Number"),
    cols: 4,
  },
  {
    label: "Owner",
    name: "owner",
    validation: Yup.string().required().label("Owner"),
    cols: 8,
  },
  {
    label: "Email",
    name: "email",
    validation: Yup.string().required().email().label("Email"),
    cols: 4,
  },
  {
    label: "Managed By",
    name: "managed_by",
    validation: Yup.string().required().email().label("Managed By"),
    cols: 8,
  },
];
</script>
