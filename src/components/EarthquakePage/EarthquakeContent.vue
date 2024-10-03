<script setup>
import { ref, defineProps, computed  } from 'vue';
import { matchDate, matchTime, resultTitle} from '@/utils/utils';
const props = defineProps({
  
  selectedDataMain:{
      type: Object,
      required: true,
      default: () => [],
    }
});


console.log('props.selectedDataMain',props.selectedDataMain);
const imgValue = ref('圖片樣式1');
const options = ref(['圖片樣式1', '圖片樣式2']);
const imgUrl = (str) => {
  const url = {
    '圖片樣式1': props.selectedDataMain.ReportImageURI,
    '圖片樣式2': props.selectedDataMain.ShakemapImageURI,
  }
  return url[str] || props.selectedDataMain.ReportImageURI;
}

const imageSrc = computed(() => {
  return imgUrl(imgValue.value);
});
</script>

<template>
  <div>
    <p class="mb-1">
      <span>{{ matchDate(props.selectedDataMain.ReportContent) }}</span> - 
      <span>{{ matchTime(props.selectedDataMain.ReportContent) }}</span>
    </p>
   
    
    <p class="text-3xl mt-0 leading-normal	">{{ resultTitle(props.selectedDataMain.ReportContent) }}</p>
    <a :href="props.selectedDataMain.Web" target="_blank" rel="noopener">
      <Button type="button" label="前往中央氣象署網站查看"></Button>
    </a>
    <SelectButton class="mt-3" v-model="imgValue" :options="options" aria-labelledby="basic" />
    <p class="mt-2 mb-1"> ✻ {{ props.selectedDataMain.ReportRemark }}</p>
    <div class=" relative overflow-hidden pt-[60%] " >
      <Image :pt="{
        root: {
          class: 'absolute inset-0 object-contain  w-full inline-flex justify-center items-center',
        },
        image: {
          class: 'object-contain object-center w-full h-full',
        },
        previewcontainer:{
          class:'absolute pt-[50%] inset-0'
        },
        preview: {
          class:'absolute w-full h-full inset-0 object-contain object-center'
        }
      }"
      class="mt-2 " :src="imageSrc" alt="Image" preview/>
    </div>
    
   
    <p>{{ props.selectedDataMain }}</p>
    
  </div>
</template>
