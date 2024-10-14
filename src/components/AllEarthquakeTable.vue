<script setup>
import { ref, onMounted } from 'vue';
import EarthquakeAPI from "@/api/earthquake";
import { useApiDataStore } from '@/stores/apiDataStores';
import { matchDate, resultTitle, resultColor } from '@/utils/utils';


const getAllEarthquake = async () => {
  await EarthquakeAPI.getAll()
    .then((res) => {
      earthquakeData.value = res.Earthquake;
      useDataStore.setEarthquakeData(res.Earthquake);
      console.log(earthquakeData.value);
      console.log('useApiDataStore', useDataStore.earthquakeData)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
};

const earthquakeData = ref([]);
const selectedProduct = ref();
const useDataStore = useApiDataStore();


onMounted(() => {
    getAllEarthquake();
});

</script>
<template>
<DataTable :value="earthquakeData" v-model:selection="selectedProduct"  
paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="ReportContent" header="日期" style="width: 10%">
        <template #body="slotProps">
            <p class="text-center">{{ matchDate(slotProps.data.ReportContent || '') }}</p>
        </template>
    </Column>
    <Column field="ReportColor"  style="width: 5%">
        <template #body="slotProps">
            <div class="rounded-full mx-auto w-2 h-2" :class="resultColor(slotProps.data.ReportColor)"></div>
        </template>
    </Column>
    <Column field="ReportContent" header="地震報告" style="width: 60%">
        <template #body="slotProps">
            <p>{{ resultTitle(slotProps.data.ReportContent || '') }}</p>
        </template>
    </Column>
    <Column  style="width: 10%">
      <template #body="slotProps">
        <router-link 
        :to="{
            name:'Earthquake',
            params: {
                EarthquakeNo: slotProps.data.EarthquakeNo,
            },
        }">
            <Button>查看更多</Button>
        </router-link>
      </template>
    </Column>
</DataTable>
</template>