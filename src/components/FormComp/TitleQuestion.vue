<script setup>
  import { ref, watch, defineEmits, defineProps, defineModel } from 'vue';
  const props = defineProps({
    question: {
      type: String,
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
    invalidText:{
      type: String,
      default: '',
    },
    required:{
      type:Boolean,
      required: true
    }
  })
</script>
<template>
  <div class="flex items-center gap-1 pb-1">
    <span class="shrink-0 font-mono w-9 h-9 bg-primary-50 rounded-full mr-2 text-center content-center text-primary-700 font-bold text-2xl">{{ index }}</span>
    <p class="text-primary-700 font-bold text-xl my-0">
      {{ question }}<span v-if="required" class="text-rose-500">*</span></p>
    <p v-if="invalidText && invalid" class="text-rose-600 bg-rose-100 py-1 px-2 rounded-md font-bold my-0">{{ invalidText }}</p>
  </div>
</template>
