<template>
    <v-text-field
      :name="name"
      variant="outlined"
      :label="label"
      :placeholder="label"
      :persistent-placeholder="true"
      density="compact"
      @input="handleChange"
      @blur="handleBlur"
      :error-messages="errorMessage"
    ></v-text-field>
</template>
<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";
import * as Yup from "yup";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>
