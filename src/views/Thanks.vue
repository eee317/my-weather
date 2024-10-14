<template>
  <div class="text-center content-h content-center">
    <p class="pb-12">非常感謝您完成問券調查 ! </p>
    <router-link :to="{name:'Index'}"><Button label="回首頁" /></router-link>
  </div>
</template>
<style scoped lang="scss">
  .content-h{
    height: calc(100vh - 176px - 100px);
  }
</style>