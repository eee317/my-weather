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
const imgValue = ref('震動圖像');
const options = ref(['震動圖像', '圖像報告']);
const imgUrl = (str) => {
  const url = {
    '震動圖像': props.selectedDataMain.ShakemapImageURI,
    '圖像報告': props.selectedDataMain.ReportImageURI,
  }
  return url[str] || props.selectedDataMain.ReportImageURI;
}

const imageSrc = computed(() => {
  return imgUrl(imgValue.value);
});
</script>

<template>
  <div class="lg:px-28 md:px-16 pb-12">
    <div class="mb-1 flex gap-5 pt-6 text-primary-700 font-bold">
      <div class="flex items-center gap-2">
        <i class="pi pi-calendar"></i>
        <p class="m-0">{{ matchDate(props.selectedDataMain.ReportContent) }}</p>
      </div>
      <div class="flex items-center gap-2">
        <i class="pi pi-clock"></i>
        <p class="m-0"> {{ matchTime(props.selectedDataMain.ReportContent) }}</p>
      </div>
    </div>
  
    
    <p class="text-xl md:text-3xl mt-4 leading-normal text-primary-800 font-bold tracking-wide">{{ resultTitle(props.selectedDataMain.ReportContent) }}</p>


    <p class="text-xs md:text-base mt-2 mb-2 text-primary-600 tracking-wide"> ✻ {{ props.selectedDataMain.ReportRemark }}</p>
    <div class="border-2 border-solid border-primary-500 py-12 px-2 rounded-lg">
      <div class="flex flex-wrap justify-center md:justify-between gap-2 px-4 md:px-14 pb-4">
      
        <SelectButton v-model="imgValue" :options="options" aria-labelledby="basic" />
        <a :href="props.selectedDataMain.Web" target="_blank" rel="noopener">
          <Button type="button" class="h-full" label="前往中央氣象署網站查看"></Button>
        </a>
      </div>
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
    </div>
  </div>
</template>
