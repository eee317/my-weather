<script setup>
import { ref } from "vue";


</script>
<template>
  <div class="bg-surface-50 rounded-md ">
    <Toolbar class="mr-auto ml-auto">
      <template #end>
          <router-link to="/"><Button label="首頁" text plain/></router-link>
          <router-link to="/"><Button label="問卷調查" text plain /></router-link>
      </template>
    </Toolbar>
  </div>
  
</template>
