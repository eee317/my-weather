
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
    <!-- <p class="mb-2 mt-0"><span class="pr-2 py-2">{{ index }}.</span>{{ question }}<span v-if="required" class="text-red-400">*</span></p>
    <p v-if="invalidText && invalid" class="text-red-400 mt-0 mb-2">{{ invalidText }}</p> -->
    <Textarea 
      v-model="model" :invalid="invalid" rows="5" cols="30" class="w-full mt-3" :placeholder="placeholder" />
  </div>
</template>