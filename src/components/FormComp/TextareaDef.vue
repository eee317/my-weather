
<script setup>
import { defineProps, defineModel } from 'vue';
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
const model = defineModel('model')
</script>
<template>
  <div>
    <p>{{ question }}</p>
    <Textarea v-model="model" rows="5" cols="30" class="w-full" :placeholder="placeholder" />
  </div>
</template>