import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import './styles/style.scss'


const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app');
