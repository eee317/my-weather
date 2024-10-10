<script setup>
import { ref, defineProps, defineModel, watch, defineEmits, onMounted,computed } from 'vue';
import {validatName, validatEmail, validatTelephone} from '@/utils/validateUtils';
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
});

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
  }else{
    userIdx.invalid = false;
  }
}

const doRequired = () => {
  console.log('model.value.required', model.value.required)
  if(model.value.required === false){
    userFormData.value.forEach((item, idx) => {
      item.required = true;
      //checkInvalid(idx);
    })
  }else{
    userFormData.value.forEach((item, idx) => {
      item.required = false;
      //checkInvalid(idx);
    })
  }
}


watch(()=> model.value.onSend, (newValue) => {
  console.log('newValue222', newValue)
  if(newValue){
    console.log(1111111)
    model.value.onSend.length = 0; //使用陣列方法，讓 watch 監聽不到
  }
  console.log(' model.value.onSend', model.value.onSend)
})
const doSend = () => {
  console.log('子層: dooo');

  // 子層執行其他必要邏輯
}


</script>
<template>
  <div>
    <div class="my-6">
      <p>{{ question }}</p> 
      <div class="mb-4">
        <Checkbox v-model="model.required" @click="doRequired" binary inputId="wishes" name="userForm" />
        <label for="wishes" class="ml-2"> 我有意願留下聯絡資料 </label>
      </div>
      
      <div v-if="model.required" class="flex gap-2 flex-col sm:flex-row">
        <div v-for="(user, idx) in userFormData" class="w-full">
          <InputGroup>
            <InputGroupAddon>
              <i :class="user.icon"></i>
            </InputGroupAddon>
            <InputText v-model.lazy="model[user.key]" @blur="checkInvalid(idx)"
            :placeholder="user.placeholder" :invalid="user.invalid" />
          </InputGroup>
          <p class="mt-2 mb-0 text-sm text-red-500"
          >{{ user.invalidText }}</p>
        </div>
      </div>
    </div>
    {{ userFormData }}
  </div>
</template>