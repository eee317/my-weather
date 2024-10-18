<script setup>
import { ref, defineProps, defineModel, watch, defineEmits } from 'vue';
import { validatName, validatEmail, validatTelephone} from '@/utils/validateUtils';
import { qaContact } from '@/utils/question';
import TitleQuestion from './TitleQuestion.vue';
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(['onSent']);
const model = defineModel('model');

const userFormData = ref([
  {
    placeholder:'姓名',
    key: 'name',
    value: model.value.name,
    icon: 'pi pi-user',
    invalid: false,
    required: false,
    maxLenth: null,//number表示有限制字數、null表示沒有限制字數
    invalidText: '',
    customCheck: validatName,
  },
  {
    placeholder:'信箱',
    key: 'email',
    value: model.value.email,
    icon: 'pi pi-envelope',
    invalid: false,
    required: false,
    maxLenth: null,
    invalidText: '',
    customCheck: validatEmail,
  },
  {
    placeholder:'手機',
    key: 'telephone',
    value: model.value.telephone,
    icon: 'pi pi-phone',
    invalid: false,
    required: false,
    maxLenth: null,
    invalidText: '',
    customCheck: validatTelephone,
  },
])

/**
 * 處理欄位驗證
 * @param {Number} index contact index
 * @description 做驗證，決定 invalid 跟 invalidText 的顯示
 */
const checkInvalid = (idx) => {
  const userIdx = userFormData.value[idx];
  userIdx.invalidText = userIdx.customCheck(model.value[userIdx.key], userIdx.required);
  if(userIdx.invalidText){
    userIdx.invalid = true;
    model.value.isSuccessful = false;
  }else{
    userIdx.invalid = false;
  }
}

const doRequired = () => {
  model.value.isSuccessful = false;
  if(model.value.required === false){
    userFormData.value.forEach((item, idx) => {
      item.required = true;
    })
    
  }else{
    userFormData.value.forEach((item, idx) => {
      item.required = false;
    })
    model.value.isSuccessful = true;
  }
}

/**
 * 送出按鈕，確認是否所有表單可寄出
 * @description 如果可以寄出，isSuccessful 為 true，只要有一個欄位驗證不過，isSuccessful 為 false
 */
watch(()=> model.value.onSend, (newValue) => {

  if(model.value.onSend.length>0){

    let invalidNum = 0
    userFormData.value.forEach((item, idx) => {
      checkInvalid(idx);
      if(item.invalid){
        invalidNum += 1
      }
    })
    console.log('invalidNum', invalidNum)
    if(invalidNum>0){
      console.log('不能送出')
    }else{
      model.value.isSuccessful = true;
      console.log('需重新觸發一次 doSent()')
      emit('onSent');
    }
    
    model.value.onSend.length = 0; //使用陣列方法，讓 watch 監聽不到
    
  }
  
})


</script>
<template>
  <div>
    <div class="my-6">
      <TitleQuestion 
    :question="qaContact.question" :index="11" :invalid="false" invalidText="" :required="false"></TitleQuestion>

      <div class="my-4 ml-12">
        <Checkbox v-model="model.required" @click="doRequired" binary inputId="wishes" name="userForm" />
        <label for="wishes" class="ml-2 text-green-800" :class="model.required?'font-bold':''"> 我有意願留下聯絡資料 </label>
      </div>
      
      <div v-if="model.required" class="flex gap-2 flex-col sm:flex-row w-4/5 px-12 w-full text-base">
        <div v-for="(user, idx) in userFormData" class="w-full">
          <InputGroup>
            <InputGroupAddon>
              <i :class="user.icon"></i>
            </InputGroupAddon>
            <InputText v-model.lazy="model[user.key]" @blur="checkInvalid(idx)"
            :placeholder="user.placeholder" :invalid="user.invalid" />
          </InputGroup>
          <p class="mt-2 mb-0 text-sm text-rose-600 font-bold text-end"
          >{{ user.invalidText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>