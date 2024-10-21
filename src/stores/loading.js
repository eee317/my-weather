import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loadingStore', {
  state: () => ({
    isLoading: true,
  }),
  actions: {
    setLoading(value) {
      this.isLoading = value;
    }
  }
});