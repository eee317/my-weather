<script setup>
import { onMounted, ref } from "vue";
import { cityFormat } from '@/utils/utils';
import WeatherAPI from "@/api/weather";


const citys = ref([]);
const city = ref([]);
const expandedRows = ref({});
const getAllWeather = async () => {
  await WeatherAPI.getAll()
    .then((res) => {
      console.log(res.location)
      citys.value = res.location.map((item, idx) => {
        const PoP = item.weatherElement.filter(pop => pop.elementName ==="PoP");
        const Wx = item.weatherElement.filter(wx => wx.elementName ==="Wx");
        const CI = item.weatherElement.filter(ci => ci.elementName ==="CI" || ci.elementName ==="MinCI");
        const MinT = item.weatherElement.filter(min => min.elementName ==="MinT");
        const MaxT = item.weatherElement.filter(min => min.elementName ==="MaxT");
        return {
            "locationName": item.locationName,
            "溫度": `${MinT[0].time[0].parameter.parameterName} ~ ${MaxT[0].time[0].parameter.parameterName}°C`,
            "天氣現象": Wx[0].time[0].parameter.parameterName,
            "舒適度": CI[0].time[0].parameter.parameterName,
            "降雨機率": PoP[0].time[0].parameter.parameterName + "%",
        }
      });
      console.log('citys.value', citys.value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
};
const getCityWeather = async (cityName) => {
  await WeatherAPI.getCity(cityName).then((res) => {
    const cityObj = {
      locationName: cityName,
      location: cityFormat(res),
    };
    city.value.push(cityObj);
    console.log("push", city.value);
    console.log("res", res);
  });
};

const onRowExpand = (event) => {
  console.log("onRowExpand", event.data.locationName);
  const isTrue = city.value.some(
    (item) => item.locationName === event.data.locationName
  ); //已經有串接過API的，就不要再觸發
  if (isTrue === false) {
    getCityWeather(event.data.locationName);
  }
};

onMounted(() => {
  getAllWeather();
});
</script>
<template>
  <div style="max-width: 1000px; margin-left: auto; margin-right: auto">
    <Toast></Toast>
    <DataTable
      :value="citys"
      tableStyle=""
      stripedRows
      scrollable
      scrollHeight="700px"
      v-model:expandedRows="expandedRows"
      dataKey="locationName"
      @rowExpand="onRowExpand"
      paginator
      :rows="50"
      :rowsPerPageOptions="[5, 10, 20, 50]"
    >
      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xl text-900 font-bold">本日天氣</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column expander style="width: 5rem" />
      <Column field="locationName" header="縣市名稱" sortable class="text-center"></Column>
      <Column field="降雨機率" header="降雨機率" sortable class="text-center"></Column>
      <Column field="溫度" header="溫度" sortable class="text-center"></Column>
      <Column field="天氣現象" header="天氣現象" sortable class="text-center"></Column>
      <Column field="舒適度" header="舒適度" sortable class="text-center"></Column>
      <!-- 開合子層 start -->
      <template #expansion="slotProps">
        <div class="p-3">
          <h5 class="text-xl my-1 pl-4">
            {{ slotProps.data.locationName }} 鄉鎮氣候
          </h5>
          <DataTable
            :value="
              city.find(
                (item) => item.locationName === slotProps.data.locationName
              )?.location
            "
          >
            <Column field="locationName" header="鄉鎮名稱" sortable> </Column>
            <Column class="text-center" field="天氣現象" header="天氣現象"></Column>
            <Column class="text-center" field="舒適度" header="舒適度"></Column>
            <Column class="text-center" field="降雨機率" header="降雨機率"></Column>
            <Column class="text-center" field="溫度" header="溫度"></Column>
          </DataTable>
        </div>
      </template>
      <!-- 開合子層 end -->
    </DataTable>

    
  </div>
</template>
<style >

</style>
