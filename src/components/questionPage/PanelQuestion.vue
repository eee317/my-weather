<script setup>
  import { ref } from 'vue';
  const panelClass = ref({
    root:{
      class:['border-2 border-primary-400 border-solid rounded-lg']
    }
  }) 
</script>
<template>
  <Panel :pt="panelClass" header="氣象經歷調查問卷" class="p-6 mb-6">
      <template #header>
        <div class="flex gap-3 items-center text-primary-700 text-2xl">
          <i class="pi pi-sun text-2xl"></i>
          <p class="font-black tracking-wide m-0">氣象經歷調查問卷</p>
        </div>
      </template>
      <p class="py-1 m-0 text-gray-500 leading-7 indent-8">
        感謝您參與我們的氣象知識與經歷調查問卷。本次調查旨在更好地了解大眾對氣象資訊的需求及天氣預報在日常生活中的影響。無論是出行安排、旅遊計畫，還是工作、穿衣選擇，天氣預報都扮演著重要角色。我們希望通過問卷，蒐集到大家對氣象服務的看法，從而提升天氣預報的準確性和實用性。
      </p>
      <p class="py-1 m-0  text-gray-500 leading-7 indent-8">
        現代的氣象科技發展迅速，我們關注極端天氣對您的影響，如颱風、暴雨或酷暑等災害天氣，您如何應對這些情況？我們希望了解天氣預報是否能及時幫助您作出正確決策，並找出改進空間。您的意見將有助於我們改善氣象預報的服務，為用戶提供更具價值的天氣資訊。
      </p>
      <p class="py-1 m-0  text-gray-500 leading-7 indent-8">
        問卷設計了選擇題、複選題及簡答題，以便全面了解您的經驗。您的真實反饋對於我們理解大眾需求至關重要，並且每一個回應都將幫助我們改進氣象服務，提供更個性化的天氣預報。再次感謝您的參與與支持！
      </p>
    </Panel>
</template>