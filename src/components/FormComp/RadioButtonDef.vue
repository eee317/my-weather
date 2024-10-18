<script setup>
  import { ref, watch, defineEmits, defineProps, defineModel } from 'vue';
  import TitleQuestion from './TitleQuestion.vue';
  const emits = defineEmits(["update:invalid"]);
  const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  question: {
    type: String,
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
  invalid:{
    type:Boolean,
    required: true
  },
  questionId:{
    type: String,
    required: true
  },
  invalidText:{
    type: String,
    default: '',
  }

});

const selectedCategory = defineModel('selectedCategory');
watch(()=> selectedCategory.value, (newValue) =>{
  if(selectedCategory.value !== ''){
    emits("update:invalid", false)
  }
})

//const emit = defineEmits(['update:selected']);


</script>
<template>
  <div class="py-3">
    <TitleQuestion 
    :question="question" :index="index" :invalid="invalid" :invalidText="invalidText" :required="required"></TitleQuestion>
    <div v-for="category in categories" :key="category.key + questionId" class="flex items-center py-1 pl-12">
      <RadioButton v-model="selectedCategory" :inputId="category.key + questionId" name="dynamic" :value="category.value" :invalid="invalid" />
      <label :for="category.key + questionId" class="ml-2 text-green-800" 
      :class="[selectedCategory === category.value ? 'font-bold' : '', invalid? 'text-rose-600': '']">{{ category.value }}</label>
    </div>
  </div>
</template>