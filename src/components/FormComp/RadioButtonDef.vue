<script setup>
  import { ref, watch, defineEmits, defineProps, defineModel } from 'vue';
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
    //props.invalid.value = false;
    emits("update:invalid", false)
  }
})

//const emit = defineEmits(['update:selected']);


</script>
<template>
  <div>
    <p class="mt-2 mb-1">{{ question }}</p>
    <p v-if="invalidText" class="text-red-400 mt-0 mb-2">{{ invalidText }}</p>
    <div v-for="category in categories" :key="category.key + questionId" class="flex items-center">
        <RadioButton v-model="selectedCategory" :inputId="category.key + questionId" name="dynamic" :value="category.value" :invalid="invalid" />
        <label :for="category.key + questionId" class="ml-2" :class="{ 'text-primary-400': selectedCategory === category.value }">{{ category.value }}</label>
      </div>
  </div>
</template>