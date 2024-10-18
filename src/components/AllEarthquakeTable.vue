<script setup>
import { ref, onMounted } from 'vue';
import EarthquakeAPI from "@/api/earthquake";
import { useApiDataStore } from '@/stores/apiDataStores';
import { matchDate, resultTitle, resultColor } from '@/utils/utils';

const dataTableClass={
    column:{ 
        headercell:{
            class:'bg-primary-50 py-8 text-primary-700 dark:bg-primary-dark-500  text-2xl font-black '
        }
    }
}

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
<DataTable :table-class="'rounded-md '"
:pt="dataTableClass" class="custom_table_class"
:value="earthquakeData" v-model:selection="selectedProduct"  
paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="">
    <Column field="ReportContent" header="日期" style="width: 10%;  border-radius: 12px 0 0 0 ;">
        <template #body="slotProps">
            <div class="flex items-center justify-center gap-3">
                <i class="pi pi-calendar" ></i>
                <p class="text-center">{{ matchDate(slotProps.data.ReportContent || '') }}</p>
            </div>
        </template>
    </Column>
    <Column field="ReportColor"  style="width: 5%">
        <template #body="slotProps">
            <div class="rounded-full mx-auto w-2 h-2" :class="resultColor(slotProps.data.ReportColor)"></div>
        </template>
    </Column>
    <Column field="ReportContent" header="地震報告" style="width: 60%;">
        <template #body="slotProps">
            <p>{{ resultTitle(slotProps.data.ReportContent || '') }}</p>
        </template>
    </Column>
    <Column  style="width: 10%;  border-radius: 0 12px 0 0 ;">
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
<style scoped lang="scss">

</style>