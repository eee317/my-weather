import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@/thePreset/preset';      //import preset
//import CustomAura from '@/thePreset/customPreset'; 
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'; 
import Toolbar from 'primevue/toolbar';
import Menu from 'primevue/menu';
import SelectButton from 'primevue/selectbutton';  // optional
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Image from 'primevue/image';
import Panel from 'primevue/panel';
import MeterGroup from 'primevue/metergroup';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';



import App from './App.vue'
import './styles/style.scss'

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(PrimeVue,{
  unstyled: true,
  pt:Aura,
});
app.use(ToastService);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Toolbar', Toolbar);
app.component('Menu', Menu);
app.component('SelectButton', SelectButton);
app.component('Carousel', Carousel);
app.component('Tag', Tag);
app.component('Divider', Divider);
app.component('Dialog', Dialog);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Image', Image);
app.component('Panel', Panel);
app.component('MeterGroup', MeterGroup);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);
app.component('FloatLabel', FloatLabel);

app.mount('#app');
