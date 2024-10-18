<script setup>
import { useRouter } from 'vue-router';
import { ref, watch, computed, defineAsyncComponent } from "vue";
import { qaContact } from '../utils/question';

import QuestionForm from "../components/FormComp/QuestionForm.vue";
import UserForm from "../components/FormComp/UserForm.vue";
import PanelQuestion from '../components/questionPage/PanelQuestion.vue';
import DividerTitle from '../components/questionPage/DividerTitle.vue';
import { useDialog } from 'primevue/usedialog';

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
  { label: "已完成", value: totalScore, icon: "pi pi-check", color: "#84CC16" },
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


/**
 * 送出表單按鈕
 * @description 無論是否成功都會跳彈窗
 */
const doSent = () => {
  if(contact.value.isSuccessful && totalScore.value === 100){
    console.log('恭喜完成');
    showDailog(true);
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
  showDailog(false);
}

const router = useRouter();
const ResultDialog = defineAsyncComponent(() => import('@/components/FormComp/ResultDailogForm.vue'));
const dialog = useDialog();

/**
 * 表單送出後的談窗
 * @param {Boolean} state 傳遞表單是否能成功送出
 * @description 無論是否成功都會跳彈窗:成功談窗會倒回首頁
 */
const showDailog = ( state = false ) => {
  const title = state ? '感謝您完成問券 ! ' : '您尚未填寫完畢。';
  const btnStr = state ? '回首頁' : '我知道了';

  dialog.open(ResultDialog, {
        props: {
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true,
        },
        data: {
            title,
            btnStr,
        },
        onClose: (options) => {
          if(contact.value.isSuccessful && totalScore.value === 100){
            router.push({name:'Index'});
          }
        }
  })
  
}



</script>
<template>
  <main class="max-w-screen-md mx-auto px-4 py-16">
    <PanelQuestion></PanelQuestion>
    <MeterGroup :value="barValue" class="py-5 mb-6 sticky top-[81px] z-50 bg-white" />

    <DividerTitle title="問卷開始" class="pb-7"></DividerTitle>

    <form @submit.prevent="doSent">
      <QuestionForm
        v-model:model="selectedCategory"
        @onSent="doSent"
      ></QuestionForm>
      <DividerTitle title="問卷結束" class="py-7"></DividerTitle>
      <UserForm
        v-model:model="contact"
        :question="qaContact.question"
        @onSent="doSent"
      ></UserForm>
      <div class="flex justify-center">
        <Button type="submit" label="送出問券" class="w-1/2 mt-12 mb-6"></Button>
      </div>
    </form>
    <DynamicDialog/>
  </main>
</template>
<style scoped>

</style>
