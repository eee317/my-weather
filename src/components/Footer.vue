<template>
  <div class=" bg-surface-50">
    
    <div class="max-w-screen-lg mx-auto py-5 flex justify-center flex-col items-center">
      <div class="w-100">
        <div class="mx-3 border-solid border-0 border-b border-primary-100 ">
          <p class="text-primary-300">資料來源</p>
          <p class="text-center text-primary-700">交通部中央氣象署 / 氣象開發資料平台</p>
        </div>
        <div class="text-center pt-1">
          <router-link to="/"><Button label="首頁" text plain/></router-link>
          <router-link to="/"><Button label="問卷調查" text plain /></router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>