import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MillView from '../views/MillView.vue'
import FlowersView from '../views/FlowersView.vue'
import LightView from '../views/LightView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/windmill',
      name: 'windmill',
      component: MillView
    },
    {
      path: '/Flowers',
      name: 'Flowers',
      component: FlowersView
    },
    {
      path: '/Light',
      name: 'light',
      component: LightView
    }
  ]
})

export default router
