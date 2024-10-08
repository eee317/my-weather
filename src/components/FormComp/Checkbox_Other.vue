<script setup>
import {
  ref,
  watch,
  defineEmits,
  defineProps,
  defineModel,
  toValue,
} from "vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  otherQuestion: {
    type: String,
    required: true,
  },

});

const selectedCategory = defineModel("selectedCategory");
const otherModel = defineModel("otherModel");

// watch(() => selectedCategory.value, (newValue, oldValue) => {
//   console.log(newValue)
//   // 1. old無none  new有none
//   // 2. old有none
//   if ( newValue.some(item => item === 'none') && !oldValue.includes('none') ) {
//     selectedCategory.value=['none'];
//   } else if( oldValue.some( item => item === 'none') ){
//     console.log('Y');
//     selectedCategory.value = oldValue.filter(item => item !== 'none');
//   }
//   // if(selectedCategory.value.includes('Other')===false){
//   //   otherModel.value ='';
//   // }
// },{deep: true});

watch(
  () => selectedCategory.value,
  (newValue, oldValue) => {
    if (
      newValue.some((item) => item === "none") &&
      !oldValue.includes("none")
    ) {
      selectedCategory.value.splice(0, selectedCategory.value.length, "none");
      console.log("selectedCategory.value", selectedCategory.value);
    } else if (oldValue.some((item) => item === "none")) {
      selectedCategory.value = oldValue.filter((item) => item !== "none");
    }
    if (selectedCategory.value.includes("Other") === false) {
      otherModel.value = "";
    }
  }
);
</script>
<template>
  <div>
    <p class="mb-2 mt-0">{{ question }}</p>
    <div
      v-for="category in categories"
      :key="category.key"
      class="py-1 flex items-center gap-1"
    >
      <Checkbox
        v-model="selectedCategory"
        :inputId="category.key"
        name="category"
        :value="category.key"
      />
      <label
        :class="{ 'text-primary-400': selectedCategory.includes(category.key) }"
        :for="category.key"
        >{{ category.value }}</label
      >
      <div
        v-if="selectedCategory.includes('Other') && category.key === 'Other'"
      >
        <FloatLabel>
          <InputText :id="'other' + category.key" v-model="otherModel" />
          <label :for="'other' + category.key">{{ otherQuestion }}</label>
        </FloatLabel>
      </div>
    </div>
  </div>
</template>
