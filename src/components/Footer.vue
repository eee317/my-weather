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
  <div class="bg-primary-800 py-5">
    <Toolbar class="mr-auto ml-auto">
      <template #start>
        <router-link to="/">
          <img src="../assets/logo/LOGO-black.svg" alt="">
        </router-link>
      </template>
      <template #end>
        <div>
          <div class="text-end">
            <router-link to="/" class="mr-3">
              <Button :pt="btnNavbarClass"
              :class="isActive('Index') ? 'border-primary-700 text-primary-700 bg-white' : 'bg-primary-800 text-white border-white border-solid'"
              label="首頁" outlined /></router-link>
            <router-link :to="{name:'Questionnaire'}">
              <Button :pt="btnNavbarClass"
              :class="isActive('Questionnaire') ? 'border-primary-700 text-primary-700 bg-white' : 'bg-primary-800 text-white border-white border-solid'"
              label="問卷調查" outlined /></router-link>
          </div>
          <p class="text-white mt-2 mb-0 text-sm">資料來源 : 交通部中央氣象署 / 氣象開發資料平台</p>
        </div>
      </template>
    </Toolbar>
  </div>
</template>