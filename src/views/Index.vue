<script setup>
;
import { RouterLink } from 'vue-router';
import WeatherCarousel from '../components/WeatherCarousel.vue';
import AllEarthquakeTable from '../components/AllEarthquakeTable.vue'
import Title from '../components/IndexPage/titleComp.vue';
    
const today = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份從 0 開始，所以要加 1，並確保是兩位數
    const day = String(today.getDate()).padStart(2, '0'); // 確保日期是兩位數
    const formattedDate = `${year} - ${month} - ${day}`;
    return formattedDate;
}
</script>
<template>
    <div >
        <div class="weather-bg md:h-[300px] sm:h-[140px] h-[60px] pt-5 ">
            <!-- <div class="weather-img "></div> -->
            <img class="w-full md:mt-10 h-full" src="../assets/img/cloud.svg" alt="">
        </div>
        <div class="max-w-screen-lg mx-auto  md:mt-[-60px] ">
            <Title title="本日全臺天氣" :isTime="true" imgSrc="/img/weather-area-img.svg" ></Title>
            <!-- <Title title="本日全臺天氣" :isTime="true" :imgSrc="require('@/assets/img/weather-area-img.svg')" ></Title> -->
            <!-- <div class="flex justify-center">
                <div class="flex items-center gap-5 ">
                    <img src="../assets/img/weather-area-img.svg" width="110" alt="本日全臺天氣">
                    <div class="content-center">
                        <p class="text-5xl  my-0 text-primary-700 font-bold  m-plus-font">本日全臺天氣</p>
                        <p class=" m-0 pt-2 text-zinc-500 font-bold ">{{ today() }}</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <div class="lg:max-w-screen-lg lg:mx-auto px-4 pb-16 mb-20">
        <RouterLink :to="{ name: 'WeatherTable'}" class="block text-end mr-16">
            <Button 
                type="button" 
                iconPos="right" icon="pi pi-arrow-right"
                label="列表查看天氣"  outlined />
        </RouterLink>
        <WeatherCarousel></WeatherCarousel>
            
            <!-- <Button label="test" severity="secondary"></Button> -->
    </div>

    <div class="max-w-screen-lg mx-auto mt-20">
        <Title title="地震資訊" :isTime="false" imgSrc="/img/earthquake-area-img.svg" ></Title>

    </div>
    <div>
        <div class="max-w-screen-lg mx-auto px-4 py-16">
            <p class="text-5xl font-black px-3 mt-20 mb-0">地震資訊</p>
            <p class="px-3 text-2xl font-black">地震最新報告</p>
            <p class="px-3">本報告為中央氣象署地震觀測網即時地震資料地震速報之結果</p>
        </div>
        <AllEarthquakeTable></AllEarthquakeTable>
    </div>
    
</template>
<style scoped lang="scss">
.weather-bg{
    background: linear-gradient(to top, #ffffff  , #BDF4F8 );
    
}
.weather-img{
    background-image: url('../assets/img/cloud.svg');
    background-repeat: repeat-x;
    background-size:contain ;
    height: 100%;
    
    // left:-2%;
    // right:-2%;
    // top:16%;
    // z-index: 0;
}
</style>