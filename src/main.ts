import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import VueHighcharts from './directive/highcharts';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(Antd);
app.use(VueHighcharts);
app.use(store).use(router).mount('#app');

