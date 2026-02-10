import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import GameCounterView from '@/views/RegisterGameView.vue';
import TableView from '@/views/TabelView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/SpielEintragen',
    name: 'SpielEintragen',
    component: GameCounterView,
  },
  {
    path: '/tabelle',
    name: 'tabelle',
    component: TableView,
  },
]

const router = createRouter({
    routes,
    history: createWebHistory()
});


export default router
