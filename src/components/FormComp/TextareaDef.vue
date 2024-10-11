
<script setup>
import { defineProps, defineModel,defineEmits,watch } from 'vue';
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  invalid:{
    type:Boolean,
    required: true
  },
  invalidText:{
    type: String,
    required: true,
    default: ''
  },
});
const model = defineModel('model');
const emits = defineEmits(["update:invalid"]);
watch(()=> model.value, ( newValue ) => {
  if(model.value !== ''){
    emits("update:invalid", false);
  }
})
</script>
<template>
  <div>
    <p class="mb-2 mt-0">{{ question }}</p>
    <p v-if="invalidText" class="text-red-400 mt-0 mb-2">{{ invalidText }}</p>
    <Textarea v-model="model" :invalid="invalid" rows="5" cols="30" class="w-full" :placeholder="placeholder" />
  </div>
</template>