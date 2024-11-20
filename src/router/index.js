import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main/Main.vue';
import Login from '../views/signIn/Login.vue';
import Kbox from '../views/kbox/KboxMain.vue';
import KboxDetail from '../views/kbox/KboxDetail.vue';
import KboxHistory from '../views/kbox/KboxHistory.vue';
import Notification from '../views/notification/NotificationList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/kbox/:no',
      name: 'Kbox',
      component: Kbox,
    },
    {
      path: '/kboxdetail',
      name: 'KboxDetail',
      component: KboxDetail,
    },
    {
      path: '/kboxhistory',
      name: 'KboxHistory',
      component: KboxHistory,
    },
    {
      path: '/notification',
      name: 'Notification',
      component: Notification,
    },
    {
      path: '/kbox/create',
      name: 'kbox-create',
      component: () => import('@/views/kbox/KboxCreate.vue')
    },
    {
      path: '/kbox/edit/:id',
      name: 'kbox-edit',
      component: () => import('@/views/kbox/KboxCreate.vue')
    },
    {
      path: '/kbox/group/create',
      name: 'GroupKboxCreate',
      component: () => import('@/views/kbox/GroupKboxCreate.vue')
    }
  ],
});


export default router;