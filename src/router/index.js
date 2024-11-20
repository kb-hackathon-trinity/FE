import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main/Main.vue';
import Login from '../views/signIn/Login.vue';

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
    ],
  });


export default router;