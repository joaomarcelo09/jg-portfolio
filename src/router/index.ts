import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import AboutView from '@/views/AboutView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import AditionalView from '@/views/AditionalView.vue'
import EducationView from '@/views/EducationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/about-me',
      name: 'about',
      component: AboutView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/aditional',
      name: 'aditional',
      component: AditionalView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/projects',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
