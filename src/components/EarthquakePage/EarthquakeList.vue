<script setup>
import { useRouter } from 'vue-router';
import {ref, defineProps, onMounted, watch, defineEmits} from 'vue';
import { nextTick } from 'vue';
import { matchDate, resultTitle, resultColor } from '@/utils/utils';
import datatableSide from '@/thePreset/customPreset/datatable/earthquakeSideDatatable';
const props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
    params:{
        type: String,
        default: '',
    }
});

const selectedData = ref([]);
const emit = defineEmits(['updateValue']);
const router = useRouter();
const navigateTo = (EarthquakeNo) => {
  router.push({ 
    name:'Earthquake', params:{ EarthquakeNo } 
  });
};


/**
 * 監聽選擇的列表
 * @description 如果選擇的項目有改變，就更新父層的值，並且更改網址
 */
watch(selectedData, (newValue) => {
    if (newValue.EarthquakeNo != undefined) {
      emit('updateValue', selectedData.value);
      const earthquakeNo = newValue.EarthquakeNo;
      navigateTo(earthquakeNo);
    }
});

onMounted( async ()=>{
  await nextTick();
  selectedData.value = props.data.filter(items => {
    return items.EarthquakeNo === parseInt(props.params, 10)
  })
  emit('updateValue', selectedData.value[0]);
})
</script>
<template>
  <!-- :pt="{column:{ headercell:{class:'bg-primary-100 text-primary-700 dark:bg-primary-dark-500 py-3'}}} -->
  <div>
    <p class="title">地震報告</p>
    <DataTable :pt="datatableSide" 
      :value="props.data" tableStyle=""
      v-model:selection="selectedData" selectionMode="single" dataKey="EarthquakeNo">
      <Column style="width: 3%">
        <template #body="slotProps">
          <div class="rounded-full mx-auto w-2 h-2" :class="resultColor(slotProps.data.ReportColor)"></div>
        </template>
      </Column>
      <Column header="地震報告">
        <template #body="slotProps" >
          <div class="flex items-center flex-row-reverse justify-end pb-2">
            <p class="m-0 text-sm">{{ matchDate(slotProps.data.ReportContent) }}</p>
            <i class="pi pi-calendar mr-2"></i>
          </div>
          <p class="m-0">{{ resultTitle(slotProps.data.ReportContent || '').slice(0, 13) }}...</p>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<style scoped lang="scss">
  .title{
    @apply m-0 text-center text-xl font-black text-primary-700 border-b border-t-0 border-x-0 border-primary-500  border-solid pb-2
  }
</style>