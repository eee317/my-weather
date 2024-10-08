<script setup>
import { ref, watch } from "vue";
import {qaGrnder, qaAge, qaCity, qaGetInf} from '../utils/question';
import QuestionRadio from '../components/FormComp/RadioButtonDef.vue';
import CheckBox_Other from '../components/FormComp/Checkbox_Other.vue';

const selectedCategory = ref({
  Gender:null,
  Age:null,
  City:null,
  GetInf:[],
  GetOther:null,
});

const barValue = ref([
  { label: "已完成", value: 15, icon: "pi pi-check", color: "#34d399" },
]);


</script>
<template>
  <main class="max-w-screen-md mx-auto px-4 py-16">
    <Panel header="氣象經歷調查問卷">
      <template #header class="">
        <div class="flex gap-2 items-center">
          <i class="pi pi-sun text-lg"></i>
          <p class="font-black text-lg m-0">氣象經歷調查問卷</p>
        </div>
      </template>
      <p class="py-2 m-0">
        感謝您參與我們的氣象知識與經歷調查問卷。本次調查旨在更好地了解大眾對氣象資訊的需求及天氣預報在日常生活中的影響。無論是出行安排、旅遊計畫，還是工作、穿衣選擇，天氣預報都扮演著重要角色。我們希望通過問卷，蒐集到大家對氣象服務的看法，從而提升天氣預報的準確性和實用性。
      </p>
      <p class="py-2 m-0">
        現代的氣象科技發展迅速，我們關注極端天氣對您的影響，如颱風、暴雨或酷暑等災害天氣，您如何應對這些情況？我們希望了解天氣預報是否能及時幫助您作出正確決策，並找出改進空間。您的意見將有助於我們改善氣象預報的服務，為用戶提供更具價值的天氣資訊。
      </p>
      <p class="py-2 m-0">
        問卷設計了選擇題、複選題及簡答題，以便全面了解您的經驗。您的真實反饋對於我們理解大眾需求至關重要，並且每一個回應都將幫助我們改進氣象服務，提供更個性化的天氣預報。再次感謝您的參與與支持！
      </p>
    </Panel>

    <MeterGroup :value="barValue" class="my-6" />

    <div class="relative flex justify-center items-center">
      <p class="text-center bg-white absolute z-10 px-2 font-black">問卷開始</p>
      <div
        class="text-center border-b-0 border-t-[1px] border-inherit border-solid absolute left-0 right-0 z-0"
      ></div>
    </div>

    <QuestionRadio
      v-model:selectedCategory="selectedCategory.Gender"
      :categories="qaGrnder.options" 
      :question="qaGrnder.question" 
    ></QuestionRadio>
    <QuestionRadio
      v-model:selectedCategory="selectedCategory.Age"
      :categories="qaAge.options" 
      :question="qaAge.question" 
    ></QuestionRadio>

    <CheckBox_Other
      v-model:selectedCategory="selectedCategory.GetInf"
      v-model:otherModel="selectedCategory.GetOther"
      :categories="qaGetInf.options"
      :question="qaGetInf.question"
      :otherQuestion="qaGetInf.otherQuestion"
    >
    </CheckBox_Other>

    <div class="my-3">
      <p class="mb-2 mt-0">{{ qaCity.question }}</p>
      <Dropdown v-model="selectedCategory.City" :options="qaCity.options" optionLabel="value" optionValue="value" :placeholder="qaCity.question" class="w-full md:w-14rem" :pt="{list:{class:'p-0'}, wrapper:{class:'border border-solid max-h-[200px] overflow-auto rounded-md border-surface-300 mt-2'}}" />
    </div>

    {{selectedCategory}}

    <div class="relative flex justify-center items-center my-4">
      <p class="text-center bg-white absolute z-10 px-2 font-black">問卷結束</p>
      <div
        class="text-center border-b-0 border-t-[1px] border-inherit border-solid absolute left-0 right-0 z-0"
      ></div>
    </div>
  </main>
</template>
<style scoped>

</style>
