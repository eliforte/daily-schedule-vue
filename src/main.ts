import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(Quasar)
  .use(router)
  .use(store)
  .mount('#app');
