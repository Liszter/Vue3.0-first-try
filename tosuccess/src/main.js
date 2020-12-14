import { createApp } from 'vue';
import App from './App.vue'
import router from './router/index'
import store from './store'
// 引入通用样式
import './styles/index.scss';

createApp(App).use(router).use(store).mount('#app')
