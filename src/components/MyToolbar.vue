<script setup>
import { useRoute } from 'vue-router';
import { ref } from "vue";
import { btnNavbarClass } from '../thePreset/customPreset/button/navbarBtn';
const route = useRoute();

const isActive = (thisRoute) => {
    return route.name === thisRoute;
};

</script>
<template>
  <div class="bg-white sticky top-0 z-50 ">
    <Toolbar :pt="{end:{class:'gap-0'}}" 
    class="mr-auto ml-auto">
      <template #start>
        <router-link to="/">
          <img class="w-[130px] md:w-full" src="../assets/logo/LOGO-df.svg" alt="">
        </router-link>
      </template>
      <template #end>
          <router-link to="/" class="mr-4">
            <Button 
            class="text-xs md:text-base"
            :pt="btnNavbarClass"
            :class="isActive('Index') ? 'bg-primary-700 text-white border border-primary-700 border-solid' : 'border-primary-700 text-primary-700 bg-white border-solid'"
            label="首頁" outlined /></router-link>
          <router-link :to="{name:'Questionnaire'}">
            <Button 
            class="text-xs md:text-base "
            :pt="btnNavbarClass"
            :class="isActive('Questionnaire') ? 'bg-primary-700 text-white border border-primary-700 border-solid' : 'border-primary-700 text-primary-700 bg-white border-solid'"
            label="問卷調查" outlined /></router-link>
      </template>
    </Toolbar>
  </div>
  
</template>
