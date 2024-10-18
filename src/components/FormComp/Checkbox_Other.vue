<script setup>
import {
  ref,
  watch,
  defineEmits,
  defineProps,
  defineModel,
  toValue,
} from "vue";
import TitleQuestion from './TitleQuestion.vue';

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
  required:{
    type:Boolean,
    required: true
  },
  index:{
    type: Number,
    required:true
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
  <div class="py-3">
    <TitleQuestion 
    :question="question" :index="index" :invalid="invalid" :invalidText="invalidText" :required="required"></TitleQuestion>
    <div
      v-for="category in categories"
      :key="category.key + questionId"
      class="py-1 pl-12 flex items-center gap-1"
    >
      <Checkbox
        class="my-1 mr-1"
        v-model="selectedCategory"
        :inputId="category.key + questionId"
        name="category"
        :value="category.key"
        :invalid="invalid"
      />
    
      <label
        :class="[selectedCategory.includes(category.key) ? 'font-bold' : '', invalid? 'text-rose-600': '']"
        :for="category.key + questionId"
        class="text-green-800"
        >{{ category.value }}</label>
      <div
        v-if="selectedCategory.includes('Other') && category.key === 'Other'"
      >
        <InputText :id="'other' + category.key" v-model="otherModel" :placeholder="otherQuestion" />
      </div>
    </div>
  </div>
</template>
