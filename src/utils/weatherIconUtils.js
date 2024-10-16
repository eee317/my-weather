const weatherIcons = import.meta.glob('../assets/weatherIcon/*.svg');
export const getWeatherIcon = (number) => {
  //icon-sun-rain
  //icon-rain-snow
  //icon-sun-fog
  //icon-sun-cloudy-fog
  //icon-clouds
  //icon-sun-fog-rain
  //icon-solar-thunderstorm
  //icon-thunderstorm
  //icon-snow
  //icon-rain
  //icon-sun
  //icon-sunny
  //icon-shower
  //icon-cloudy
  
  switch (true) {
    case number === 1:
      return 'icon-sun.svg';
    case number >= 2 && number <= 4:
      return 'icon-sunny.svg';
    case number >= 5 && number <= 7:
      return 'icon-cloudy.svg';
    case number >= 8 && number <= 11:
      return 'icon-shower.svg';
    case number >= 12 && number <= 14:
      return 'icon-thunderstorm.svg';
    case number >= 19 && number <= 22:
      return 'icon-sun-rain.svg';
    case number === 23: 
      return 'icon-rain-snow.svg';
    case number === 24: 
      return 'icon-sun-fog.svg';
    case number >= 25 && number <= 27: 
      return 'icon-sun-cloudy-fog.svg';
    case number === 28: 
      return 'icon-clouds.svg';
    case number === 29: 
      return 'icon-sun-rain.svg';
    case number === 30: 
      return 'icon-shower.svg';
    case number === 31: 
      return 'icon-sun-fog-rain.svg';
    case number === 32: 
      return 'icon-shower.svg';
    case number === 33: 
      return 'icon-solar-thunderstorm.svg';
    case number === 34: 
      return 'icon-thunderstorm.svg';
    case number === 35: 
      return 'icon-sun-fog-rain.svg';
    case number === 36: 
      return 'icon-thunderstorm.svg';
    case number >= 37 && number <= 41: 
      return 'icon-rain-snow.svg';
    case number === 42: 
      return 'icon-snow.svg';
    default:
      return 'icon-sun.svg'; // 預設值
  }
}