import Axios from 'axios';

const WatherAPI = {
    /**
     * get
     * @description 取得所有縣市當日三天的天氣API
     */
    async getAll() {
        try {
            const response = await Axios.get('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-CEA2C5AB-A654-4935-9F68-BC88687554CF');
            return response.data.records;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};
export default WatherAPI;