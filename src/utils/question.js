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