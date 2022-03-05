import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RulesView from '../views/RulesView.vue'
import AdoptView from '../views/AdoptView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/rules',
      name: 'RulesView',
      component: RulesView
    },
    {
      path: '/adopt',
      name: 'AdoptView',
      component: AdoptView
    },
  ]
})

export default router
