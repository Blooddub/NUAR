import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import LoginView from '@/views/LoginView.vue'
import RulesView from '@/views/RulesView.vue'
import GameView from "@/views/GameView.vue"

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {layout: 'TheDefaultLayout'},
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView,
    meta: {layout: 'TheMainLayout'},
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: {layout: 'TheMainLayout'},
  },
  {
    path: '/game',
    name: 'game',
    component: GameView,
    meta: {layout: 'TheMainLayout'},
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {layout: 'TheDefaultLayout'},
    component: () => import( '../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
