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

/**
*整理氣象的鄉鎮的資料格式
* @param {Object} cityRes 鄉鎮 API 回傳的資料
* @description 把資料轉換成 Datatable 可以運作的值
*/
export const cityFormat = (cityRes) => {
  const cityFormat = cityRes.locations[0].location.map((item) => {
    const AT = item.weatherElement.filter(at => at.elementName ==="PoP12h");
    const Wx = item.weatherElement.filter(wx => wx.elementName ==="Wx");
    const CI = item.weatherElement.filter(ci => ci.elementName ==="CI" || ci.elementName ==="MinCI");
    const T = item.weatherElement.filter(t => t.elementName ==="T");
    return {
        "locationName": item.locationName,
        "降雨機率": AT[0].time[0].elementValue[0].value + "%",
        "天氣現象": Wx[0].time[0].elementValue[0].value,
        "舒適度": CI[0].time[0].elementValue[1].value,
        "溫度": T[0].time[0].elementValue[0].value + "°C",
    }
  })
  return cityFormat;
}
