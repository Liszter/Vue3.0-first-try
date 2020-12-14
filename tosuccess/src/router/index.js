import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/login/index.vue';

const routes = [
  {
    path: '/',
    isHidden: true, 
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    isHidden: true, 
    component: Login
  },
  {
    isHidden: false,
    path: '/homePage',
    name: 'homePage',
    redirect: 'homePageIndex',
    component: ()=> import("@/views/homePage/layout/index.vue"),
    children: [
      {
        path: '/homePageIndex',
        name: 'homePageIndex',
        component: ()=> import("@/views/homePage/index.vue")
      }
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
