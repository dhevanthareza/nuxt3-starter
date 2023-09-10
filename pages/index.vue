<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8 mt-12"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <DyanmicForm :schemas="schemas">
        <template v-slot:action>
          <v-btn type="submit" block class="mb-8" color="blue" size="large" variant="tonal">
            Log In
          </v-btn>
        </template>
      </DyanmicForm>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
import * as Yup from "yup";
const schemas = [
  {
    label: "Username",
    name: "username",
    validation: Yup.string().required().label("Username"),
    cols: 12,
  },
  {
    label: "Password",
    name: "password",
    validation: Yup.string().required().label("Username"),
    cols: 12,
  },
];
</script>
