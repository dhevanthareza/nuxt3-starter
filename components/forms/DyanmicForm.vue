<template>
  <Form
    @submit="onSubmit"
    :validation-schema="validation_schema"
    class="pa-5"
    v-slot="formslot"
  >
    <v-row>
      <template v-for="schema in schemas">
        <v-col :cols="schema.cols" class="pa-0">
          <TextField
            :name="schema.name"
            :label="schema.label"
            class="px-2 py-0 mb-5"
          ></TextField>
        </v-col>
      </template>
    </v-row>
    <slot name="action">
      <v-row justify="end" class="mr-3 mb-3">
        <v-btn class="mr-3" color="warning" @click="$router.go(-1)">Back</v-btn>
        <v-btn type="submit" color="primary">Save</v-btn>
      </v-row>
    </slot>
    <slot v-bind="formslot"> </slot>
  </Form>
</template>
<script setup>
import { Form } from "vee-validate";
import { object as YupObject } from "yup";
const emit = defineEmits(['inFocus', 'submit'])
const props = defineProps({
  schemas: {
    type: Array,
    default: [],
  },
});

const validation_schema = computed(() => {
  const validations = {};
  props.schemas.forEach((schema) => {
    validations[schema.name] = schema.validation;
  });
  return YupObject(validations);
});

const onSubmit = (values) => {
  emit("submit", values);
};
</script>
