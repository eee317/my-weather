<script setup>
import { ref, defineProps, defineModel, watch, defineEmits } from "vue";
import {
  qaGrnder,
  qaAge,
  qaCity,
  qaGetInf,
  qaCheckTimes,
  qaImportant,
  qaReason,
  qaUseService,
  qaYorN,
  qaDescribe,
} from "@/utils/question";
import QuestionRadio from "@/components/FormComp/RadioButtonDef.vue";
import CheckBox_Other from "@/components/FormComp/Checkbox_Other.vue";
import TextareaDef from "@/components/FormComp/TextareaDef.vue";
import DropdownDef from "./DropdownDef.vue";
import { radioBtnDef, checkboxOther } from '@/utils/validateUtils';


const emit = defineEmits(['onSent']);
const model = defineModel("model");
const querstionData = ref([
  {
    type: "Radio",
    key: "Gender",
    value: model.value.Gender,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaGrnder.options,
    question: qaGrnder.question,
    questionId: qaGrnder.questionId,
    customCheck: radioBtnDef,
  },
  {
    type: "Radio",
    key: "Age",
    value: model.value.Age,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaAge.options,
    question: qaAge.question,
    questionId: qaAge.questionId,
    customCheck: radioBtnDef,
  },
  {
    type: "CheckboxOther",
    keyOther:'GetOther',
    otherQuestion:qaGetInf.otherQuestion,
    key: "GetInf",
    value: model.value.GetInf,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaGetInf.options,
    question: qaGetInf.question,
    questionId: qaGetInf.questionId,
    customCheck:checkboxOther,
  },
  {
    type: "Dropdown",
    key: "City",
    value: model.value.City,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaCity.options,
    question: qaCity.question,
    questionId: qaCity.questionId,
    placeholder: qaCity.placeholder,
    customCheck: radioBtnDef,
  },
  {
    type: "Radio",
    key: "CheckTimes",
    value: model.value.CheckTimes,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaCheckTimes.options,
    question: qaCheckTimes.question,
    questionId: qaCheckTimes.questionId,
    customCheck: radioBtnDef,
  },
  {
    type: "Radio",
    key: "Important",
    value: model.value.Important,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaImportant.options,
    question: qaImportant.question,
    questionId: qaImportant.questionId,
    customCheck: radioBtnDef,
  },

  {
    type: "CheckboxOther",
    keyOther:'ReasonOther',
    otherQuestion:qaReason.otherQuestion,
    key: "Reason",
    value: model.value.Reason,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaReason.options,
    question: qaReason.question,
    questionId: qaReason.questionId,
    customCheck: checkboxOther,
  },
  {
    type: "Radio",
    key: "UseService",
    value: model.value.UseService,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaUseService.options,
    question: qaUseService.question,
    questionId: qaUseService.questionId,
    customCheck: radioBtnDef,
  },
  {
    type: "Radio",
    key: "YorN",
    value: model.value.YorN,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaYorN.options,
    question: qaYorN.question,
    questionId: qaYorN.questionId,
    customCheck: radioBtnDef,
  },
  {
    type: "TextareaDef",
    key: "Describe",
    value: model.value.Describe,
    invalid: false,
    required: true,
    maxLenth: null, //number表示有限制字數、null表示沒有限制字數
    invalidText: "",
    options: qaDescribe.options,
    question: qaDescribe.question,
    questionId: qaDescribe.questionId,
    placeholder: qaDescribe.placeholder,
    customCheck: radioBtnDef,
  },
]);
const checkInvalid = (idx) => {
  const questionIdx = querstionData.value[idx];
  //console.log('(model.value[questionIdx.key]', model.value[questionIdx.key])
  if(true){
    questionIdx.invalidText = questionIdx.customCheck(model.value[questionIdx.key]);
    if(questionIdx.invalidText){
      questionIdx.invalid = true;
    }
  }
  
}
watch(()=> model.value.onSend, (newValue) => {
  
  if(model.value.onSend.length>0){
    let invalidNum = 0;
    querstionData.value.forEach((item, idx) => {
    
      checkInvalid(idx)
      if(item.invalid){
        invalidNum += 1;
      }
    })
  
    model.value.onSend.length = 0; //使用陣列方法，讓 watch 監聽不到
  }
})

</script>
<template>
  <div v-for="(topic, idx) in querstionData">
    <QuestionRadio
      v-if="topic.type === 'Radio'"
      v-model:selectedCategory="model[topic.key]"
      v-model:invalid="topic.invalid"
      :categories="topic.options"
      :question="topic.question"
      :invalid="topic.invalid"
      :questionId="topic.questionId"
      :invalidText="topic.invalidText"
      :required="topic.required"
      :index="idx + 1"
    ></QuestionRadio>
    <CheckBox_Other
      v-if="topic.type === 'CheckboxOther'"
      v-model:selectedCategory="model[topic.key]"
      v-model:otherModel="model[topic.keyOther]"
      v-model:invalid="topic.invalid"
      :invalid="topic.invalid"
      :categories="topic.options"
      :question="topic.question"
      :questionId="topic.questionId"
      :otherQuestion="topic.otherQuestion"
      :invalidText="topic.invalidText"
      :required="topic.required"
      :index="idx + 1"
    ></CheckBox_Other>
    <DropdownDef
      v-if="topic.type === 'Dropdown'"
      v-model:model="model[topic.key]"
      v-model:invalid="topic.invalid"
      :placeholder="topic.placeholder"
      :question="topic.question"
      :categories="topic.options"
      :invalid="topic.invalid"
      :invalidText="topic.invalidText"
      :required="topic.required"
      :index="idx + 1"
    ></DropdownDef>
    <TextareaDef v-if="topic.type === 'TextareaDef'"
      v-model:model="model[topic.key]"
      v-model:invalid="topic.invalid"
      :question="topic.question"
      :placeholder="topic.placeholder"
      :invalid="topic.invalid"
      :invalidText="topic.invalidText"
      :required="topic.required"
      :index="idx + 1"
  ></TextareaDef>
  </div>
  
</template>
