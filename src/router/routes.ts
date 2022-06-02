import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
    name: 'login',
  },
  {
    path: '/register',
    component: () => import('pages/Register.vue'),
    name: 'register',
  },
];

export default routes;
