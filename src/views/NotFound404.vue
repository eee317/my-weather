<template>
  <div>
    <div class="weather-bg md:h-[200px] sm:h-[140px] h-[60px] pt-5 ">
      <img class="w-full md:mt-10 h-full" src="../assets/img/cloud.svg" alt="">
    <div class="flex flex-col items-center justify-star">
    </div>
    <div class=" md:mt-[-120px]  max-w-96 mx-auto  z-10 relative  ">
      <div class="mx-3 bg-white border border-solid border-zinc-300 rounded-xl py-10 px-5">
        <div class="flex flex-col justify-center items-center">
          <p class="text-center text-xl font-black text-zinc-500">404 找不到網頁</p>
          <img src="../assets/img/404-error.jpg" class="w-48" alt="找不到網頁">
          <router-link to="/" class="mt-6">
          <Button
          class="text-xs md:text-base"
          label="返回首頁" outlined /></router-link>
        </div>
        <!-- <div class="p-2 bg-primary-50">50</div>
        <div class="p-2 bg-primary-100">100</div>
        <div class="p-2 bg-primary-200">200</div>
        <div class="p-2 bg-primary-300">300</div>
        <div class="p-2 bg-primary-400">400</div>
        <div class="p-2 bg-primary-500">500</div>
        <div class="p-2 bg-primary-600">600</div>
        <div class="p-2 bg-primary-700">700</div>
        <div class="p-2 bg-primary-800">800</div>
        <div class="p-2 bg-primary-900">900</div> -->
      </div>
        </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
.weather-bg{
    background: linear-gradient(to top, #ffffff  , #C0F4EA );
}
</style>