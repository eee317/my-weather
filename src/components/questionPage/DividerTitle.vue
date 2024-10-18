<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  });
</script>
<template>
  <div class="relative flex justify-center items-center">
      <p class="text-center bg-white absolute z-10 px-2 font-black text-lg text-primary-700 ">{{ title }}</p>
      <div
        class="text-center border-b-0 border-t-[1px]  border-solid border-primary-300 absolute left-0 right-0 z-0"
      ></div>
    </div>
</template>