<script setup>
import { defineProps, defineModel,defineEmits,watch, ref, inject, onMounted } from 'vue';
const dialogRef = inject('dialogRef');
const title = ref('');
const btnStr = ref('');
onMounted(() => {
     title.value = dialogRef.value.data.title;
     btnStr.value = dialogRef.value.data.btnStr;
})

const closeDialog = () => {
    dialogRef.value.close();
};


</script>
<template>
  <p>
    {{ title }}
  </p>
  <div class="flex flex-col items-center">
    <Button :label="btnStr" @click="closeDialog"></Button>
  </div>
</template>