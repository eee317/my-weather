<script setup>
  import { ref, watch, defineEmits, defineProps, defineModel } from 'vue';
  const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  
});

const selectedCategory = defineModel('selectedCategory')

//const emit = defineEmits(['update:selected']);


</script>
<template>
  <div>
    <p>{{ question }}</p>
    <div v-for="category in categories" :key="category.key" class="flex items-center">
        <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.value" :invalid="selectedCategory === null" />
        <label :for="category.key" class="ml-2" :class="{ 'text-primary-400': selectedCategory === category.value }">{{ category.value }}</label>
      </div>
  </div>
</template>