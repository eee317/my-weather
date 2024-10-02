import Axios from 'axios';
import { useLoadingStore } from '@/stores/loading';

const EarthquakeAPI = {
  /**
  * get
  * @description 取得所有地震報告
  */
  async getAll() {
    const loadingStore = useLoadingStore();
        try {
            loadingStore.setLoading(true);
            console.log(loadingStore.isLoading)
            const response = await Axios.get(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=${import.meta.env.VITE_AUTH_CODE}`);
            return response.data.records;
        } catch (error) {
            console.error(error);
            throw error;
        }finally {
            loadingStore.setLoading(false); // 完成後設為 false
            console.log(loadingStore.isLoading)
        }
  }
}
export default EarthquakeAPI;