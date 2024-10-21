<script setup>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { onMounted, ref } from "vue";
import { cityFormat } from '@/utils/utils';
import WeatherAPI from "@/api/weather";
import DataTableClass from "../thePreset/customPreset/datatable/weatherDataTable";
import { useLoadingStore } from "/src/stores/loading.js";

const loadingStore = useLoadingStore();

const citys = ref([]);
const city = ref([]);
const expandedRows = ref({});
const filters = ref({});
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

/**
*處理搜尋
* @description 依據搜尋的內容，顯示結果
*/
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};
initFilters();

onMounted(() => {
  getAllWeather();
});

const insideDataTableClass = ref({
  
  bodyrow:{
    class:'bg-primary-50',
  },
              column: {
                headercell:{ class:'hidden'},
                bodycell: ({ props, context, state, parent }) => ({
                  class: [
                    //Position
                    { 'sticky z-20 box-border border-b-0': parent.instance.frozenRow || props.frozen || props.frozen === '' },

                    // Alignment
                    'text-left py-3',

                    // Shape
                    'border-0 border-b border-solid',
                    { 'first:border-l border-r border-b': context?.showGridlines },
                    { 'bg-surface-0 dark:bg-primary-dark-300': parent.instance.frozenRow || props.frozen || props.frozen === '' },

                    // Spacing
                    { 'py-2': context?.size === 'small' && !state['d_editing'] },
                    { 'py-5': context?.size === 'large' && !state['d_editing'] },
                    { 'py-2': context?.size !== 'large' && context?.size !== 'small' && !state['d_editing'] },
                    { 'py-[0.6rem]': state['d_editing'] },
                    { 'px-4': !(parent.instance.frozenRow || props.frozen || props.frozen === '') },

                    // Color
                    'border-primary-300 dark:border-[#48505D] text-primary-700',
                    //'border-surface-200 dark:border-[#48505D]',
                  ],
                }),
              }
            })


</script>
<template>
  <div style="max-width: 1000px; " class="mx-auto md:px-0 px-2">
    <Toast></Toast>
    <DataTable
      :value="citys"
      tableStyle=""
      stripedRows
      scrollable
      scrollHeight="530px"
      v-model:expandedRows="expandedRows"
      v-model:filters="filters"
      dataKey="locationName"
      @rowExpand="onRowExpand"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      :pt="DataTableClass "
      class="my-5 text-xs md:text-base"
    >

    <!-- :pt="{
        header:{class:'rounded-t-md bg-primary-50 text-primary-600'},
        bodycell:{
          class:'border-0'
        }
      }" -->

      <template #header>
        <div class="flex flex-wrap items-center justify-between gap-2 p-3">
          <span class="p-3 font-medium text-2xl m-plus-font">本日天氣</span>
          <IconField iconPosition="left">
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="搜尋" />
          </IconField>
        </div>
      </template>
      <Column expander style="width: 5rem" />
      <Column field="locationName" header="縣市名稱" sortable class="text-center">
        <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
      </Column>
      <Column field="降雨機率" header="降雨機率" sortable class="text-center">
        <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
      </Column>
      <Column field="溫度" header="溫度" sortable class="text-center">
        <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
      </Column>
      <Column field="天氣現象" header="天氣現象" sortable class="text-center">
        <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
      </Column>
      <Column field="舒適度" header="舒適度" sortable class="text-center">
        <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
      </Column>
      <!-- 開合子層 start -->
      <template #expansion="slotProps">
        <div class="p-3">
          <h5 class="text-xl my-1 mb-3 pl-4 pt-4 text-primary-700">
            {{ slotProps.data.locationName }} 鄉鎮氣候
          </h5>
          <DataTable
            :value="
              city.find(
                (item) => item.locationName === slotProps.data.locationName
              )?.location
            "
            :pt="insideDataTableClass"
            
          >
            <Column field="locationName"> </Column>
            <Column class="text-center" field="降雨機率" >
              <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
            </Column>
            <Column class="text-center" field="溫度" >
              <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
            </Column>
            <Column class="text-center" field="天氣現象" >
              <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
            </Column>
            <Column class="text-center" field="舒適度" >
              <template #body v-if="loadingStore.isLoading"><Skeleton ></Skeleton></template>
            </Column>
          </DataTable>
        </div>
      </template>
      <!-- 開合子層 end -->
    </DataTable>

    
  </div>
</template>
<style >

</style>
