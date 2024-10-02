import { defineStore } from 'pinia';

export const useApiDataStore = defineStore('apiDataStore', {
    state: () => ({
        earthquakeData: null,
    }),
    actions: {
        setEarthquakeData(data) {
            this.earthquakeData = data;
        },
    },
    persist: {
      key: 'my-api-data',
  },
    
});