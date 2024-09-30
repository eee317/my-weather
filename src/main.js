import { createApp } from 'vue'
import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@/preset';      //import preset
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

import App from './App.vue'
import './styles/style.scss'


const app = createApp(App);
app.use(router);
app.use(PrimeVue,{
  unstyled: true,
  pt: Aura,
});
app.use(ToastService);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);

app.mount('#app');
