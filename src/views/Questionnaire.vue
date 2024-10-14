<script setup>
import { useRouter } from 'vue-router';
import { ref, watch,computed } from "vue";
import {qaGrnder, qaAge, qaCity, qaGetInf, qaCheckTimes, qaImportant, qaReason, qaUseService, qaYorN, qaDescribe, qaContact } from '../utils/question';

import QuestionForm from "../components/FormComp/QuestionForm.vue";
import UserForm from "../components/FormComp/UserForm.vue";

/**
 * 問券題目欄位
 * @description 如果可以寄出，totalScore 需為 100
 */
const selectedCategory = ref({
  Gender:'',
  Age:'',
  City:'',
  GetInf:[],
  GetOther:'',
  CheckTimes:'',
  Important:'',
  Reason:[],
  ReasonOther:'',
  UseService:'',
  YorN:'',
  Describe:'',
  onSend :[],
});
const totalScore = computed(() => {
  let score = 0;
  for (const key in selectedCategory.value) {
    //排除不要計算的值
    if ( key !== 'onSend' &&  key !== 'GetOther' &&  key !== 'ReasonOther') {
      const value = selectedCategory.value[key];
      if (typeof value === 'string' && value.trim() !== '') {
        score += 1;
      }
      if (Array.isArray(value) && value.length > 0) {
        score += 1;
      }
    }
  }
  return score * 10;
});
const barValue = ref([
  { label: "已完成", value: totalScore, icon: "pi pi-check", color: "#34d399" },
]);

/**
 * 用戶資料欄位
 * @description 如果可以寄出，isSuccessful 為 true，只要有一個欄位驗證不過，isSuccessful 為 false，利用 onSend 去觸發子層的 watch ，欄位 required:是否為必填
 */
const contact = ref({
  name:'',
  email:'',
  telephone:'',
  required: false,
  onSend :[],
  isSuccessful: true,
})

const router = useRouter();
const doSent = () => {
  if(contact.value.isSuccessful && totalScore.value === 100){
    console.log('恭喜完成');
    router.push({name:'Thanks'});
    return;
  }
  if(totalScore.value < 100){
    selectedCategory.value.onSend = [1];
  }
  if(contact.value.required === false){
    contact.value.isSuccessful = true;
  }else if (contact.value.required === true){
    contact.value.isSuccessful = false;
    contact.value.onSend= [1]; //使用 = 直接賦值，讓 watch 監聽
  }
}



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

    <MeterGroup :value="barValue" class="py-5 mb-6 sticky top-[81px] z-50 bg-white" />

    <div class="relative flex justify-center items-center">
      <p class="text-center bg-white absolute z-10 px-2 font-black">問卷開始</p>
      <div
        class="text-center border-b-0 border-t-[1px] border-inherit border-solid absolute left-0 right-0 z-0"
      ></div>
    </div>

    
  
    <form @submit.prevent="doSent">
      <QuestionForm
        v-model:model="selectedCategory"
        @onSent="doSent"
      ></QuestionForm>
      <UserForm
        v-model:model="contact"
        :question="qaContact.question"
        @onSent="doSent"
      ></UserForm>
      <Button type="submit" label="送出問券"></Button>
    </form>
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
