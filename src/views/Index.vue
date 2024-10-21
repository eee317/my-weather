<script setup>
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import WeatherCarousel from '../components/WeatherCarousel.vue';
import AllEarthquakeTable from '../components/AllEarthquakeTable.vue'
import Title from '../components/IndexPage/titleComp.vue';
import { useLoadingStore } from "/src/stores/loading.js";
import Loading from '../components/Loading/LoadingSkletonCard.vue'


const loadingStore = useLoadingStore();

/**
*將 assets 圖片網址傳遞給元件
* @param {String} imgName 圖片的檔案名稱
* @param {String} ext 圖片的副檔名，例如: jpg, png
* @description 因為元件的關係，單純輸入網址路徑圖片無法顯示，需要透過 new URL 的方式產生圖片
*/

function  getImageUrl (imgName, ext) { 
    return new URL(`../assets/img/${imgName}.${ext}`, import.meta.url).href
}


</script>
<template>
    <div>
        <!-- v-if="loadingStore.isLoading" -->
        <div>
            <div class="weather-bg md:h-[300px] sm:h-[140px] h-[60px] pt-5 ">
                <img class="w-full md:mt-10 h-full" src="../assets/img/cloud.svg" alt="">
            </div>
            <div class="max-w-screen-lg mx-auto  md:mt-[-60px] ">
                <Title title="本日全臺天氣" :isTime="true" :imgSrc="getImageUrl('weather-area-img', 'svg')" ></Title>
            </div>
        </div>
        <Loading v-if="loadingStore.isLoading" class="lg:max-w-screen-lg mx-auto pb-16  mb-20 mt-10" ></Loading>
        <div class="lg:max-w-screen-lg lg:mx-auto px-4 pb-16 mb-20">
            <RouterLink v-if="!loadingStore.isLoading" :to="{ name: 'WeatherTable'}" class="block text-end mr-16">
                <Button 
                    type="button" 
                    iconPos="right" icon="pi pi-arrow-right"
                    label="列表查看天氣"  outlined />
            </RouterLink>
            <WeatherCarousel></WeatherCarousel>
        </div>
    
        <div class="max-w-screen-lg mx-auto my-28">
            <div class="flex justify-center flex-col items-center relative">
                <Title class="absolute pb-16" title="地震資訊" :isTime="false" :imgSrc="getImageUrl('earthquake-area-img', 'svg')" ></Title>
                <img src="../assets/img/grassland.png" class=" w-4/5 mb-[-7.2%] " style="z-index: -10;" alt="">
            </div>
            <div class="relative z-0 mx-6">
                <div class="border-image p-2 sm:p-10 lg:p-20">
                    <div class="flex items-center gap-3">
                        <img src="../assets/img/earthquake-symbol.svg" alt="所有地震報告">
                        <p class="font-semibold m-plus-font text-3xl text-zinc-500 m-0">所有地震報告</p>
                    </div>
                    <p class=" lg:pb-12 text-zinc-500 text-lg">※ 本報告為中央氣象署地震觀測網即時地震資料地震速報之結果</p>
                    <AllEarthquakeTable></AllEarthquakeTable>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.weather-bg{
    background: linear-gradient(to top, #ffffff  , #C0F4EA );
}
// .weather-img{
//     background-image: url('../assets/img/cloud.svg');
//     background-repeat: repeat-x;
//     background-size:contain ;
//     height: 100%;
// }
.border-image{
    --borderWidth: 5px;
    background: #ffff;
    position: relative;
    border-radius: var(--borderWidth);

    &:after{
        content: '';
        position: absolute;
        top: calc(-1 * var(--borderWidth));
        left: calc(-1 * var(--borderWidth));
        height: calc(100% + var(--borderWidth) * 2);
        width: calc(100% + var(--borderWidth) * 2);
        background: linear-gradient(#A2CB8D, #213d10);
        border-radius: calc(2 * var(--borderWidth));
        z-index: -1;
        background-size: 300% 300%;
    }
}


</style>