import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectView from '../views/ProjectView.vue'
import AboutMe from '@/views/AboutMe.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import AditionalView from '@/views/AditionalView.vue'
import EducationView from '@/views/EducationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Projetos',
      component: ProjectView
    },
    {
      path: '/experience',
      name: 'Experiência',
      component: ExperienceView
    },
    {
      path: '/skills',
      name: 'Habilidades',
      component: SkillsView
    },
    {
      path: '/aditional',
      name: 'Contribuições',
      component: AditionalView
    },
    {
      path: '/education',
      name: 'Educação',
      component: EducationView
    },
    {
      path: '/about-me',
      name: 'Sobre mim',
      component: AboutMe
    }
  ]
})

export default router
