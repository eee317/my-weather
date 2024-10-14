<script setup>
import { useRouter } from 'vue-router';
import {ref, defineProps, onMounted, watch, defineEmits} from 'vue';
import { nextTick } from 'vue';
import { matchDate, resultTitle, resultColor } from '@/utils/utils';
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
    <DataTable :pt="{column:{ headercell:{class:'bg-primary-100 text-primary-700 dark:bg-primary-dark-500 py-3'}}}" 
      :value="props.data" tableStyle=""
      v-model:selection="selectedData" selectionMode="single" dataKey="EarthquakeNo">
    <Column style="width: 3%">
      <template #body="slotProps">
        <div class="rounded-full mx-auto w-2 h-2" :class="resultColor(slotProps.data.ReportColor)"></div>
      </template>
    </Column>
    <Column header="地震報告">
      <template #body="slotProps" >
        <p class="m-0">{{ matchDate(slotProps.data.ReportContent) }}</p>
        <p class="m-0">{{ resultTitle(slotProps.data.ReportContent || '').slice(0, 13) }}...</p>
      </template>
    </Column>
  </DataTable>
</template>