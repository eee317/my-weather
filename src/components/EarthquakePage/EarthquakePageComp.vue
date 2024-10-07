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

  // 切換 leftSide 的值
  const togglePanel = () => {
    leftSide.value = leftSide.value === 0 ? 15 : 0;
    rightSide.value = rightSide.value === 100 ? 85 : 100;
  };


// 子層 emit 回來的值
  const updateEarthquakeNo = (newValue) => {
    selectedDataMain.value = newValue
    console.log('selectedDataMain.value_COMP222', newValue)
  }

onMounted(()=>{
  const { EarthquakeNo } = route.params;
  theEarthquakeNo.value = EarthquakeNo;
  console.log('comp_selectedData.value',selectedDataMain.value )
  console.log('comp', EarthquakeNo)
})

  
</script>
<template>
  <div class="card">
      <Splitter>
          <SplitterPanel class="p-4 flex align-items-center justify-content-center" 
          :size="leftSide" :minSize="10" > 
            <EarthquakeList :data="useDataStore.earthquakeData" :params="theEarthquakeNo" @updateValue="updateEarthquakeNo"></EarthquakeList>
          </SplitterPanel>

          <SplitterPanel class="p-4" :size="rightSide" >
          
            <!-- <Button type="button" @click="togglePanel">縮合 {{ rightSide }}</Button> -->
            
            <EarthquakContent :selectedDataMain="selectedDataMain"></EarthquakContent>
          </SplitterPanel>
      </Splitter>
  </div>
</template>