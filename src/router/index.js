import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import MealDetail from '../views/MealDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meal/:id',
    name: 'Meal Detail',
    component: MealDetail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
