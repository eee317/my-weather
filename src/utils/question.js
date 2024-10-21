export const qaGrnder = 
  {
    questionId:'2024100801',
    question: "請問您的性別是？",
    options: [
      { value: "男生", key: "boys" },
      { value: "女生", key: "girl" },
      { value: "其他", key: "other" },
      { value: "不願透露", key: "unwilling to reveal" }
    ]
  }
;

export const qaAge =
{
  questionId:'2024100802',
  question: "您的年齡範圍是？",
  options: [
    { value: "18 歲以下", key: "18<" },
    { value: "18 - 24 歲", key: "18-24" },
    { value: "25 - 34 歲", key: "25-34" },
    { value: "35 - 44 歲", key: "35-44" },
    { value: "45 - 54 歲", key: "45-54" },
    { value: "55 歲以上", key: "55>" },
  ]
}

export const qaCity =
{
  questionId:'2024100803',
  question: "您居住的城市",
  placeholder: "請選擇",
  options: [
    { value: "台北市", key: "TPE" },
    { value: "新北市", key: "TPH" },
    { value: "桃園市", key: "TYN" },
    { value: "台中市", key: "TXG" },
    { value: "台南市", key: "TNN" },
    { value: "高雄市", key: "KHH" },
    { value: "基隆市", key: "KEE" },
    { value: "新竹市", key: "HSZ" },
    { value: "新竹縣", key: "HSQ" },
    { value: "苗栗縣", key: "MIA" },
    { value: "彰化縣", key: "CHA" },
    { value: "南投縣", key: "NAN" },
    { value: "雲林縣", key: "YUN" },
    { value: "嘉義市", key: "CYI" },
    { value: "嘉義縣", key: "CYQ" },
    { value: "屏東縣", key: "PIF" },
    { value: "宜蘭縣", key: "ILA" },
    { value: "花蓮市", key: "HUC" },
    { value: "花蓮縣", key: "HUA" },
    { value: "台東市", key: "TTC" },
    { value: "台東縣", key: "TTT" },
    { value: "澎湖縣", key: "PEN" },
    { value: "金門縣", key: "KIN" },
    { value: "連江縣", key: "LIE" }
  ]
}

export const qaGetInf =
{
  questionId:'2024100804',
  question: "請問您通常從哪裡獲取天氣預報？（可複選）",
  otherQuestion: "請說明",
  options: [
    {value:"電視", key:"TV"},
    {value:"手機天氣應用程式", key:"APP"},
    {value:"網頁天氣查詢", key:"Web"},
    {value:"廣播", key:"Network"},
    {value:"其他", key:"Other"},
    {value:"都沒有，我不用獲取天氣預報", key:"none"},
  ]
}

export const qaCheckTimes =
{
  questionId:'2024100805',
  question: "您每天會檢查天氣預報幾次？",
  options: [
    {value:"0 次", key:"0次"},
    {value:"1 次", key:"1次"},
    {value:"2 次", key:"2次"},
    {value:"3 次及以上", key:">3次"},
  ]
}

export const qaImportant =
{
  questionId:'2024100806',
  question: "您認為天氣預報對您日常活動安排的重要性如何？",
  options: [
    {value:"非常重要", key:"4分"},
    {value:"重要", key:"3分"},
    {value:"普通", key:"2分"},
    {value:"不重要", key:"1分"},
  ]
}

export const qaReason =
{
  questionId:'2024100807',
  question: "您通常會因哪些原因關注天氣變化？（可複選）",
  otherQuestion: "請說明",
  options: [
    {value:"安排戶外活動", key:"安排活動"},
    {value:"旅遊計畫", key:"旅遊"},
    {value:"工作需求", key:"工作"},
    {value:"決定穿著", key:"穿著"},
    {value:"防範極端天氣", key:"防範天氣"},
    {value:"其他", key:"Other"},
  ]
}

export const qaUseService =
{
  questionId:'2024100808',
  question: "您有沒有使用過氣象警報服務？",
  options: [
    {value:"有，並且經常使用", key:"often"},
    {value:"有，但很少使用", key:"seldom"},
    {value:"沒有使用過", key:"never"},
  ]
}

export const qaYorN =
{
  questionId:'2024100809',
  question: "您是否曾經遇到過極端天氣而改變您的旅行或工作計畫？",
  options: [
    {value:"是", key:"yes"},
    {value:"否", key:"no"},
  ]
}

export const qaDescribe =
{
  questionId:'2024100810',
  question: "請您描述一次您經歷的極端天氣事件，以及該事件對您的影響。",
  placeholder:"請輸入",
  options: [],
}


export const qaContact =
{
  questionId:'2024100811',
  question: " 如果願意的話，請留下您的聯絡資訊，讓我們聯繫您做訪談。",
  options: [],
  // input:[
  //   {question:'姓名',key:'name'},
  //   {question:'信箱',key:'email'},
  //   {question:'手機',key:'phone'},
  // ]
}