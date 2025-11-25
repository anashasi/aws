import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RecreationalTourism from '../views/RecreationalTourism.vue'
import TherapeuticTourism from '../views/TherapeuticTourism.vue'
import EducationalTourism from '../views/EducationalTourism.vue'
import EntertainmentTourism from '../views/EntertainmentTourism.vue'
import JordanianFoods from '../views/JordanianFoods.vue'
import TouristSites from '../views/TouristSites.vue'

// Use hash mode for GitHub Pages compatibility
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recreational',
      name: 'RecreationalTourism',
      component: RecreationalTourism
    },
    {
      path: '/therapeutic',
      name: 'TherapeuticTourism',
      component: TherapeuticTourism
    },
    {
      path: '/educational',
      name: 'EducationalTourism',
      component: EducationalTourism
    },
    {
      path: '/entertainment',
      name: 'EntertainmentTourism',
      component: EntertainmentTourism
    },
    {
      path: '/foods',
      name: 'JordanianFoods',
      component: JordanianFoods
    },
    {
      path: '/sites',
      name: 'TouristSites',
      component: TouristSites
    }
  ]
})

export default router

