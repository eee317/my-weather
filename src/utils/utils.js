/**
*處理地震資料的日期
* @param {String} str 地震API的 ReportContent 的字串，開頭字串是日期
* @description 單純取出開頭字串的日期
*/
export const matchDate = (str = '') => {
  const match = str.match(/(\d{2}\/\d{2})/);
  return match ? match[0] : '';
}

/**
*處理地震資料的時間
* @param {String} str 地震API的 ReportContent 的字串，開頭字串是日期與時間
* @description 單純取出開頭字串的時間
*/
export const matchTime = (str = '') => {
  const match2 = str.match(/\d{2}:\d{2}/);
  return match2 ? match2[0] : '';
}

/**
*處理地震資料的文字
* @param {String} str 地震API的 ReportContent 的字串，開頭字串是日期
* @description 單純取出沒有日期的字串
*/
export const resultTitle = (str = '') => {
  return str.replace(/\d{2}\/\d{2}-\d{2}:\d{2}/, '');
}


/**
*處理地震資料的顏色
* @param {String} str 地震API的 ReportColor 的字串，會回傳顏色，例如：綠色
* @description 把顏色轉換成 tailwind 的 css 值
*/
export const resultColor = (str) => {
  const color = {
      '綠色':'bg-green-400'
  }
  return color[str] || 'bg-orange-400';
}

