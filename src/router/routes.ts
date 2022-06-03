import { RouteRecordRaw } from 'vue-router';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Login,
    name: 'login',
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
  },
];

export default routes;
