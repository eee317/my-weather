<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import WatherAPI from "@/api/wather";

const toast = useToast();
const citys = ref([]);
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
const factorTitle = (factorName) => {
  const factors = {
    Wx: '天氣現象',
    PoP: '降雨機率',
    MinT: '最低溫度',
    MaxT: '最高溫度',
    CI: '舒適度'
  };
  return factors[factorName] || ''; 
};
onMounted(() => {
  getAllWather();
});
</script>
<template>
  <div style="max-width:800px; margin-left:auto; margin-right:auto;">
    <DataTable :value="citys" tableStyle="min-width: 50rem" >
      <template #header>
        <div
          class="flex flex-wrap align-items-center justify-content-between gap-2"
        >
          <span class="text-xl text-900 font-bold">Products</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column field="locationName" header="Name" ></Column>
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
              <div v-if="timeIdx===1">
                {{ time.parameter.parameterName }}
              </div>
            </div>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
  
</template>
