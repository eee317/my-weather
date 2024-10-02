<script setup>
  import {defineProps} from 'vue';
  defineProps({
      data: {
          type: Object,
          default: () => {},
      },
  });
</script>

<template>
  {{ data }}
</template>