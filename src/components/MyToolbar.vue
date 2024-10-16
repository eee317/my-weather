<script setup>
import { useRoute } from 'vue-router';
import { ref } from "vue";
import { btnNavbarClass } from '../thePreset/customPreset/button/navbarBtn'
const route = useRoute();

const isActive = (thisRoute) => {
    return route.name === thisRoute;
};

</script>
<template>
  <div class="bg-white sticky top-0 z-50 ">
    <Toolbar class="mr-auto ml-auto">
      <template #start>
        <router-link to="/">
          <img src="../assets/logo/LOGO-df.svg" alt="">
        </router-link>
      </template>
      <template #end>
          <router-link to="/" class="mr-4">
            <Button :pt="btnNavbarClass"
            :class="isActive('Index') ? 'bg-primary-700 text-white border-none' : 'border-primary-700 text-primary-700 bg-white'"
            label="首頁" outlined /></router-link>
          <router-link :to="{name:'Questionnaire'}">
            <Button :pt="btnNavbarClass"
            :class="isActive('Questionnaire') ? 'bg-primary-700 text-white border-none' : 'border-primary-700 text-primary-700 bg-white'"
            label="問卷調查" outlined /></router-link>
      </template>
    </Toolbar>
  </div>
  
</template>
