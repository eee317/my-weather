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
  invalid:{
    type:Boolean,
    required: true,
  },
  otherQuestion: {
    type: String,
    required: true,
    default: '',
  },
  questionId: {
    type: String,
    required: true,
  },
  invalidText:{
    type: String,
    required: true,
    default: '',
  }

});

const selectedCategory = defineModel("selectedCategory");
const otherModel = defineModel("otherModel");
const emits = defineEmits(["update:invalid"]);

watch(
  () => selectedCategory.value,
  (newValue, oldValue) => {

    //invalid狀態顯示，有勾選項目，就取消 invalid 狀態
    if(selectedCategory.value.length > 0){
      emits("update:invalid", false)
    }

    //以上皆非的邏輯
    if (
      newValue.some((item) => item === "none") && !oldValue.includes("none")
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
    <p class="mb-1 mt-0">{{ question }}</p>
    <p v-if="invalidText" class="text-red-400 mt-0 mb-2">{{ invalidText }}</p>
    <div
      v-for="category in categories"
      :key="category.key + questionId"
      class="py-1 flex items-center gap-1"
    >
      <Checkbox
        v-model="selectedCategory"
        :inputId="category.key + questionId"
        name="category"
        :value="category.key"
        :invalid="invalid"
      />
      <label
        :class="{ 'text-primary-400': selectedCategory.includes(category.key) }"
        :for="category.key + questionId"
        >{{ category.value }}</label>
      <div
        v-if="selectedCategory.includes('Other') && category.key === 'Other'"
      >
      
        <!-- <label :for="'other' + category.key">{{ otherQuestion }}</label> -->
        <InputText :id="'other' + category.key" v-model="otherModel" :placeholder="otherQuestion" />
        <!-- <FloatLabel>
        </FloatLabel> -->
      </div>
    </div>
  </div>
</template>
