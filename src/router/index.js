import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import GameCounterView from '@/views/GameCounterView.vue';
import TableView from '@/views/TableView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/GameCounter',
    name: 'GameCounter',
    component: GameCounterView,
  },
  {
    path: '/table',
    name: 'table',
    component: TableView,
  },
]

const router = createRouter({
    routes,
    history: createWebHistory()
});


export default router
