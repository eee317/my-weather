/**
*處理城市的圖片
* @param {String} cityName 傳進去的是城市名稱
* @description 回傳城市的圖片
*/
export const getCitysImg = (cityName) => {
  const img = {
      "嘉義縣":'https://images.unsplash.com/photo-1712825412793-4daa7d69b0fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "新北市":'https://images.unsplash.com/photo-1702366552100-e6708abe1b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
      "嘉義市":'https://images.unsplash.com/photo-1651154658123-2900d0c50ef4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "新竹縣":'https://images.unsplash.com/photo-1688585456962-98f373ca1ee7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "新竹市":'https://img.freepik.com/free-photo/city-park-china_1127-4081.jpg?t=st=1728010101~exp=1728013701~hmac=3805c1d2a74d1789c737a998be5c3a381e155060d8ec64434c6c0a6e291c8fa6&w=740',

      "臺北市":'https://plus.unsplash.com/premium_photo-1661955975506-04d3812be312?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "臺南市":'https://images.unsplash.com/photo-1709455236866-a5e73df1919e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "宜蘭縣":'https://images.unsplash.com/photo-1568215183445-3bb3e0fa2465?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "苗栗縣":'https://img.freepik.com/free-photo/monkey-sitting-side-highway-with-tall-hill-background_1353-204.jpg?t=st=1728010461~exp=1728014061~hmac=9305c87f27209c666857b1d9fddab718397d84eb6c75b8524d570faa9fd1a137&w=740',

      "雲林縣":'https://images.unsplash.com/photo-1650039549639-de095177bf35?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "花蓮縣":'https://img.freepik.com/free-photo/sun-moon-lake-sunrise-nantou-taiwan_335224-600.jpg?t=st=1728010626~exp=1728014226~hmac=2ced7728968298e511ace0c03e5726d0fd8e87825390c16e4cdd84d587386bd9&w=740',

      "臺中市":'https://images.unsplash.com/photo-1657724739407-d82f601e4b54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "臺東縣":'https://images.unsplash.com/photo-1583052924678-f36e9dab1811?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "桃園市":'https://rshp.com/assets/components/phpthumbof/cache/6x3.50575fa9.10690_n42851_rshpweb.207b828b6a998589f7db0274e9dd7e25.jpg',

      "南投縣":'https://images.unsplash.com/photo-1627379770428-c477c1e7d747?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "高雄市":'https://images.unsplash.com/photo-1643719713572-691cd0ae06a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "金門縣":'https://images.unsplash.com/photo-1719153412684-250cd139501b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "屏東縣":'https://images.unsplash.com/photo-1601482919239-20305ad33545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "基隆市":'https://images.unsplash.com/photo-1690552597185-c2b89dc3add2?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "澎湖縣":'https://images.unsplash.com/photo-1649001254038-48a019e3a152?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "彰化縣":'https://images.unsplash.com/photo-1651029086330-47a1a23f3557?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

      "連江縣":'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lianjiang_City.jpg/1920px-Lianjiang_City.jpg',
  }
  const defImg = 'https://plus.unsplash.com/premium_photo-1661955975506-04d3812be312?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return img[cityName] || defImg;
}
