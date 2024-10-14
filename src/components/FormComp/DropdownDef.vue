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
  placeholder:{
    type: String,
    required: true
  },
  invalidText:{
    type: String,
    required: true,
    default: ''
  },
});
const emits = defineEmits(["update:invalid"]);
const model = defineModel('model');
watch(()=> model.value, ( newValue ) => {
  if(model.value !== ''){
    emits("update:invalid", false);
  }
})
</script>
<template>
  <div>
    <p class="mb-2 mt-0"><span class="pr-2 py-2">{{ index }}.</span>{{ question }}<span v-if="required" class="text-red-400">*</span></p>
    <p v-if="invalidText && invalid" class="text-red-400 mt-0 mb-2">{{ invalidText }}</p>
      <Dropdown
        v-model="model"
        :options="categories"
        optionLabel="value"
        optionValue="value"
        :placeholder="placeholder"
        :invalid="invalid"
        class="w-full md:w-14rem"
        :pt="{
          list: { class: 'p-0' },
          wrapper: {
            class:
              'border border-solid max-h-[200px] overflow-auto rounded-md border-surface-300 mt-2',
          },
        }"
      />
  </div>
</template>