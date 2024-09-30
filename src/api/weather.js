import Axios from 'axios';

const WeatherAPI = {
    /**
     * get
     * @description 取得所有縣市當日三天的天氣API
     */
    async getAll() {
        try {
            const response = await Axios.get(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${import.meta.env.VITE_AUTH_CODE}`);
            return response.data.records;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    async getCity(cityName) {
        const cityToId = {
            '嘉義縣': 'F-D0047-029',
            '新北市': 'F-D0047-069',
            '嘉義市': 'F-D0047-057',
            '新竹縣': 'F-D0047-009',
            '新竹市': 'F-D0047-053',
            '臺北市': 'F-D0047-061',
            '臺南市': 'F-D0047-079',
            '宜蘭縣': 'F-D0047-001',
            '苗栗縣': 'F-D0047-013',
            '雲林縣': 'F-D0047-025',
            '花蓮縣': 'F-D0047-041',
            '臺中市': 'F-D0047-073',
            '臺東縣': 'F-D0047-037',
            '桃園市': 'F-D0047-005',
            '南投縣': 'F-D0047-021',
            '高雄市': 'F-D0047-065',
            '金門縣': 'F-D0047-085',
            '屏東縣': 'F-D0047-033',
            '基隆市': 'F-D0047-049',
            '澎湖縣': 'F-D0047-045',
            '彰化縣': 'F-D0047-017',
            '連江縣': 'F-D0047-081',
        }
        try {
            const response = await Axios.get(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/${cityToId[cityName]}?Authorization=${import.meta.env.VITE_AUTH_CODE}`);
            return response.data.records;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};
export default WeatherAPI;