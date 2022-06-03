import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes: Array<RouteRecordRaw> = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
