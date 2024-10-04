import { defineStore } from 'pinia';

export const useApiDataStore = defineStore('apiDataStore', {
    state: () => ({
        earthquakeData: null,
        weatherAllCityData : null,
        weatherAllTownData :null,
    }),
    actions: {
        setEarthquakeData(data) {
            this.earthquakeData = data;
        },
        setWeatherAllCityData(data){
            this.weatherAllCityData = data;
        },
        setWeatherAllTownData(data){
            this.weatherAllTownData = data;
        }
    },
    persist: {
      key: 'my-api-data',
  },
    
});