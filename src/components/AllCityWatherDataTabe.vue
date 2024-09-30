<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import WatherAPI from "@/api/wather";
import DataTable from "primevue/datatable";

const toast = useToast();
const citys = ref([]);
const city = ref([]);
const expandedRows = ref({});
const getAllWather = async () => {
  await WatherAPI.getAll()
    .then((res) => {
      citys.value = res.location;
      console.log(citys.value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
};
const getCityWather = async (cityName) => {
  await WatherAPI.getCity(cityName)
    .then((res) => {
      const cityObj = {
        locationName: cityName,
        location: res.locations[0].location
      }
      city.value.push(cityObj)
      console.log('push',city.value)
      console.log('res', res)
    })
}
const factorTitle = (factorName, type = 1) => {
  const factorTypes = {
    1: {
      Wx: '天氣現象',
      PoP: '降雨機率',
      MinT: '最低溫度',
      MaxT: '最高溫度',
      CI: '舒適度',
    },
    2: {
      Wx: '',
      PoP: '%',
      MinT: '度',
      MaxT: '度',
      CI: '',
    }
  };
  
  return (factorTypes[type]?.[factorName]) || ''; 
};

const onRowExpand = (event) => {
  console.log('onRowExpand',event.data.locationName)
    toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.locationName, life: 3000 });
    const isTrue = city.value.some(item => item.locationName === event.data.locationName); //已經有串接過API的，就不要再觸發
    if(isTrue === false){
      getCityWather(event.data.locationName);
    }
};
const onRowCollapse = (event) => {
  console.log('onRowCollapse',event)
    toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.locationName, life: 3000 });
    
};
const onRowSelect = (event, isNew = false) => {
  console.log('event', event)
  console.log(77788855555)
}
// function setExpandedRow($event) {
//     // check if row expanded before click of not
//     const isExpanded = expandedRow.value.find((p) => p.id === $event.data.id)

//     if (isExpanded?.id) expandedRow.value = []
//     else expandedPlans.value = [$event.data]
// }

onMounted(() => {
  getAllWather();
});
</script>
<template>
  
  <div style="max-width:1000px; margin-left:auto; margin-right:auto;">
    <Toast></Toast>
    <DataTable :value="citys" tableStyle="" scrollable scrollHeight="700px"
      v-model:expandedRows="expandedRows" dataKey="locationName" @rowExpand="onRowExpand" @rowCollapse="onRowCollapse"
      paginator :rows="50" :rowsPerPageOptions="[5, 10, 20, 50]">
      <template #header>
        <div
          class="flex flex-wrap items-center justify-between gap-2"
        >
          <span class="text-xl text-900 font-bold">本日天氣</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column expander style="width: 5rem" />
      <Column field="locationName" header="縣市名稱"  ></Column>
      <Column
        v-for="(col, idx) in citys[0]?.weatherElement"
        :key="idx"
        :header="factorTitle(col.elementName)"
      >
        <template #body="slotProps">
          <div class="table-other">
            <div
              v-for="(time, timeIdx) in slotProps.data.weatherElement[idx]
                ?.time"
              :key="timeIdx"
            >
              <div v-if="timeIdx === 1">
                {{ time.parameter.parameterName }} {{factorTitle(col.elementName, 2)}}
              </div>
            </div>
          </div>
        </template>
      </Column>
      <!-- 開合子層 start -->
      <template  #expansion="slotProps">
        <div class="p-3">
          <h5>{{ slotProps.data.locationName }}鄉鎮氣候</h5>
          
          <DataTable :value="city[slotProps.data.locationName]">
            <p>789 {{ city[slotProps.data.locationName] }}</p>
          </DataTable>
        </div>
        
      </template>
      <!-- 開合子層 end -->
    </DataTable>
  </div>
  
</template>
