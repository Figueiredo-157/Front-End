import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/Inicio.vue';
import Eventos from './components/Eventos.vue';
import Sobre from './components/Sobre.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/eventos', component: Eventos },
  { path: '/sobre', component: Sobre },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
