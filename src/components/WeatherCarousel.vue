<script setup>
import { ref, onMounted, watch,   } from "vue";
import WeatherAPI from "@/api/weather";
import { getCitysImg } from "@/utils/cityImgUtils";
import { cityFormat } from '@/utils/utils';
import { getWeatherIcon } from '@/utils/weatherIconUtils';
import { useApiDataStore } from '@/stores/apiDataStores';

const useDataStore = useApiDataStore();
const citys = ref([]);
const city = ref([]);

const getAllWeather = async () => {
  await WeatherAPI.getAll()
    .then((res) => {
      citys.value = res.location;
      useDataStore.setWeatherAllCityData(citys.value)
      console.log(citys.value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
};

const getCityWeather = async (cityName) => {
  await WeatherAPI.getCity(cityName)
  .then((res) => {
    console.log("res", res);
    const cityObj = {
      locationName: cityName,
      location: cityFormat(res),
    };
    city.value.push(cityObj);
    console.log("push", city.value);
   
  });
};



const getWeatcherSeverity = (status) => {
    switch (status) {
        case '舒適':
            return 'success';

        case '舒適至悶熱':
            return 'warning';

        case '悶熱':
            return 'danger';

        default:
            return null;
    }
};

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

onMounted( () => {
    getAllWeather();
});


// Dialog
const carouselAut = ref(1500);
const isDialog = ref(false);
const dialogData = ref([]);


const onDialog = async ( cityName ) => {
    console.log('cityName', cityName)
    
    isDialog.value = true;

    const isTrue = city.value.some((item) => item.locationName === cityName); 
    //已經有串接過API的，就不要再觸發

    if (isTrue === false) {
        await getCityWeather(cityName);
    }
    dialogData.value = city.value.filter(item => item.locationName === cityName);
    console.log('dialogData.value', dialogData.value[0])
}

watch(isDialog, newValue => {
    if(newValue){
        carouselAut.value = 10000000000000;
    }else{
        carouselAut.value = 1500;
    }
})

</script>
<template>
    <Carousel :value="citys" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="carouselAut" 
    class="mt-3" 
    >
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3"  @click="onDialog(slotProps.data.locationName)">
            <div class="mb-3">
                <div class="relative  mx-auto overflow-x-hidden pt-[60%] "style="width:400px;">
                    <img 
                    :src="getCitysImg(slotProps.data.locationName)" :alt="slotProps.data.locationName" class="border-round rounded-md absolute inset-0 object-cover w-full h-full"  />
                    <Tag :value="slotProps.data.weatherElement[3].time[0].parameter.parameterName" :severity="getWeatcherSeverity(slotProps.data.weatherElement[3].time[0].parameter.parameterName)" class="absolute left-0 top-0 m-4" />
                    <div class="absolute inset-x-0 bottom-0 p-5 text-white flex justify-between items-center" style="background-color: rgb(0 0 0 / 40%); border-radius: 0 0 8px 8px;">
                        <p class="text-3xl m-0 font-black tracking-wider">{{ slotProps.data.locationName }}</p>
                        <p class="m-0">降雨機率 {{slotProps.data.weatherElement[1].time[0].parameter.parameterName}} %</p>
                    </div>
                </div>
            </div>
            <!-- <p class="mb-3 mt-0 font-black text-xl">{{ slotProps.data.locationName }}</p> -->
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <img height="28" width="28" :src="`/weatherIcon/${getWeatherIcon(slotProps.data.weatherElement[0].time[0].parameter.parameterValue)}`" :alt="slotProps.data.weatherElement[0].time[0].parameter.parameterName">
                    <p class="m-0  text-zinc-500">{{ slotProps.data.weatherElement[0].time[0].parameter.parameterName }}</p>
                </div>
                <div class="flex items-center gap-1">
                    <span class="material-symbols-outlined mt-1 text-orange-500" >device_thermostat</span>
                    <p  class="m-0 text-zinc-500 ">{{ slotProps.data.weatherElement[2].time[0].parameter.parameterName }} ~ {{ slotProps.data.weatherElement[4].time[0].parameter.parameterName }} °C</p>
                </div>
            </div>
            <!-- <p class="mt-0 mb-1">降雨機率 {{slotProps.data.weatherElement[1].time[0].parameter.parameterName}} %</p> -->
        </div>
    </template>
</Carousel>

<Dialog v-model:visible="isDialog" modal :header="dialogData[0]?.locationName" class="w-[900px] min-h-96">
    <DataTable 
    :pt="{
        column:{headercell:{class:'hover:bg-primary-50 bg-primary-50 py-3 text-primary-700'}}}"
    stripedRows scrollable 
    :value="dialogData[0]?.location" dataKey="locationName" >
        <Column class="text-center" field="locationName" header="縣市名稱"></Column>
        <Column class="text-center" field="天氣現象" header="天氣現象"></Column>
        <Column class="text-center" field="舒適度" header="舒適度"></Column>
        <Column class="text-center" field="降雨機率" header="降雨機率"></Column>
        <Column class="text-center" field="溫度" header="溫度"></Column>
    </DataTable>
</Dialog>



</template>