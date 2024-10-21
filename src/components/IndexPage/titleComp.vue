<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isTime:{
    type: Boolean,
    required: true
  },
  imgSrc:{
    type: String,
    required: true
  }

});
  const today = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份從 0 開始，所以要加 1，並確保是兩位數
    const day = String(today.getDate()).padStart(2, '0'); // 確保日期是兩位數
    const formattedDate = `${year} - ${month} - ${day}`;
    return formattedDate;
  }
</script>
<template>
  <div class="flex justify-center">
    <div class="flex items-center gap-5">
      <img
        :src="imgSrc"
        class="md:w-28 w-14"
        :alt="title"
      />
      <div class="content-center">
        <p class="text-3xl md:text-5xl my-0 text-primary-700 font-bold m-plus-font">
          {{ title }}
        </p>
        <p v-if="isTime" class="m-0 pt-2 text-zinc-500 font-bold">{{ today() }}</p>
      </div>
    </div>
  </div>
</template>
