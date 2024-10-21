
<script setup>
import TitleQuestion from './TitleQuestion.vue';
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
  required:{
    type:Boolean,
    required: true
  },
  index:{
    type: Number,
    required:true
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
  <div class="py-3">
    <TitleQuestion 
    :question="question" :index="index" :invalid="invalid" :invalidText="invalidText" :required="required"></TitleQuestion>
    <div class="relative h-40">
      <Textarea 
        v-model="model" :invalid="invalid" rows="5" cols="30" class="md:w-5/6 mt-3 md:mx-12 ml-12 absolute inset-0" :placeholder="placeholder" />
    </div>
  </div>
</template>