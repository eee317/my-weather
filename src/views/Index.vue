<script setup>
import { RouterLink } from 'vue-router';
import WeatherCarousel from '../components/WeatherCarousel.vue';
import AllEarthquakeTable from '../components/AllEarthquakeTable.vue'
const btnPt = {
                // label:{class:'text-blue-800'},
                // icon: ({ props }) => ({
                //     class: [
                //     'pointer-events-none',
                //     'mx-0',
                //     'text-blue-800',
                //     props.label != null
                //         ? {
                //             'mr-2': props.iconPos == 'left',
                //             'ml-2 order-1': props.iconPos == 'right',
                //             'mb-2': props.iconPos == 'top',
                //             'mt-2': props.iconPos == 'bottom',
                //         }
                //         : '',
                //     ],
                // })
                
            }
    
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
    <div class="max-w-screen-lg mx-auto px-4 py-16">
        <p class="text-5xl font-black px-3 my-0 ">本日全台天氣</p>
        <p class="px-3 text-2xl">{{ today() }}</p>
        <RouterLink :to="{ name: 'WeatherTable'}" class="block text-end">
            <Button 
            type="button" 
            iconPos="right" icon="pi pi-arrow-right"
            :pt="btnPt" 
            label="列表查看天氣"  outlined />
        </RouterLink>
        <WeatherCarousel></WeatherCarousel>
        <!-- <Button label="test" severity="secondary"></Button> -->

        <p class="text-5xl font-black px-3 mt-20 mb-0">地震資訊</p>
        <p class="px-3 text-2xl font-black">地震最新報告</p>
        <p class="px-3">本報告為中央氣象署地震觀測網即時地震資料地震速報之結果</p>
        <AllEarthquakeTable></AllEarthquakeTable>
    </div>
</template>