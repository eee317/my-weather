<script setup>
  import { ref, onMounted } from 'vue';
  import { useApiDataStore } from '@/stores/apiDataStores';
  import { useRoute } from 'vue-router';
  import EarthquakeList from './EarthquakeList.vue';
  import EarthquakContent from './EarthquakeContent.vue';
  
  const useDataStore = useApiDataStore();
  const route = useRoute();
  const theEarthquakeNo = ref();

  const selectedDataMain = ref([]);

  const leftSide= ref(15);
  const rightSide= ref(85);

  //側欄縮合
  const isSide = ref(false);
  const togglePanel = () => {
    isSide.value = !isSide.value;
    rightSide.value = isSide.value ? 100 : 85;
    leftSide.value = isSide.value ? 0 : 15;
  };


/**
 * Component 彼此傳值
 * @param {Object} newValue 選擇的其中一筆地震報告
 * @description 左側欄點選的項目，會傳到這裡的 selectedDataMain，再傳給右側
 */
// 左側子層 emit 回來的值
  const updateEarthquakeNo = (newValue) => {
    selectedDataMain.value = newValue;
  }

/**
 * 帶入Data
 * @description 利用抓到的網址 params 去抓出地震要顯示的主要內容
 */
onMounted(()=>{
  const { EarthquakeNo } = route.params;
  theEarthquakeNo.value = EarthquakeNo;
})


  
</script>
<template>
  <div class="card">
      <Splitter unstyled>
          <SplitterPanel  
          :class="{'hidden': isSide}" class="p-4 flex align-items-center justify-content-center" 
          :size="leftSide"> 
            <EarthquakeList :data="useDataStore.earthquakeData" :params="theEarthquakeNo" @updateValue="updateEarthquakeNo"></EarthquakeList>
          </SplitterPanel>

          <SplitterPanel :pt="{ root: { style: { 'flex-basis': isSide ? 'calc(100% - 4px)' : 'calc(85% - 4px)' } } }"
          class="p-4" :size="rightSide" >
            <Button type="button" @click="togglePanel">縮合</Button>
            <EarthquakContent :selectedDataMain="selectedDataMain"></EarthquakContent>
          </SplitterPanel>
      </Splitter>
  </div>
</template>