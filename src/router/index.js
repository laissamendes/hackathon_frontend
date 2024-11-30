import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import Inicio from '../views/InicioView.vue';
import Conselho from '../views/ConselhoView.vue';
import PreConselho from '../views/PreConselhoView.vue';
import AboutView from '../views/AboutView.vue';

import AddOcorrencia from '@/components/AddOcorrenciaVue.vue';

import Ocorrencia from '../views/Ocorrencia.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/conselho',
      name: 'conselho',
      component: Conselho,
    },
    {
      path: '/addocorrencia',
      name: 'addocorrencia',
      component: AddOcorrencia,
    },
    {
      path: '/ocorrencia',
      name: 'ocorrencia',
      component: Ocorrencia,
    },
    {
      path: '/preconselho',
      name: 'preconselho',
      component: PreConselho,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/inicio',
      name: 'inicio',

      component: Inicio,
    },
      ]}
  ]
})

export default router
