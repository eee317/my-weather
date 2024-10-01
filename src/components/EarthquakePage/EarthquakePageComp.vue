<script setup>
  import { ref } from 'vue';
  const leftSide= ref(15);
  const rightSide= ref(85);
  const togglePanel = () => {
  // 切換 leftSide 的值
  leftSide.value = leftSide.value === 0 ? 15 : 0;
  rightSide.value = rightSide.value === 100 ? 85 : 100;
};

  
</script>
<template>
  <div class="card">
      
      <Splitter style="height: 100vh">
          <SplitterPanel class="p-4 flex align-items-center justify-content-center" 
          :size="leftSide" :minSize="10" > Panel 1
          {{ leftSide }}
          </SplitterPanel>
          <SplitterPanel class="p-4" :size="rightSide" >
            Panel 2
            {{ rightSide }}
            <Button type="button" @click="togglePanel">縮合</Button>
          </SplitterPanel>
      </Splitter>
  </div>
</template>