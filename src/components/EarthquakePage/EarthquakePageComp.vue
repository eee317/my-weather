<script setup>
  import { ref, onMounted } from 'vue';
  import { useApiDataStore } from '@/stores/apiDataStores';
  import { useRoute } from 'vue-router';
  import EarthquakeList from './EarthquakeList.vue';
  import EarthquakContent from './EarthquakeContent.vue';
  
  const useDataStore = useApiDataStore();
  const route = useRoute();


  const leftSide= ref(15);
  const rightSide= ref(85);
  const togglePanel = () => {
  // 切換 leftSide 的值
  leftSide.value = leftSide.value === 0 ? 15 : 0;
  rightSide.value = rightSide.value === 100 ? 85 : 100;
};

onMounted(()=>{
  const { EarthquakeNo } = route.params;
  console.log('comp', EarthquakeNo)
})

  
</script>
<template>
  <div class="card">
      <Splitter >
          <SplitterPanel class="p-4 flex align-items-center justify-content-center" 
          :size="leftSide" :minSize="10" > 
            <EarthquakeList :data="useDataStore.earthquakeData"></EarthquakeList>
          </SplitterPanel>

          <SplitterPanel class="p-4" :size="rightSide" >
            <div>
              Panel 2
              {{ rightSide }}
              
            
              <Button type="button" @click="togglePanel">縮合</Button>
            </div>
            <EarthquakContent :data="useDataStore.earthquakeData"></EarthquakContent>
          </SplitterPanel>
      </Splitter>
  </div>
</template>