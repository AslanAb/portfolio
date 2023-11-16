import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('@/views/EducationView.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('@/views/SkillsView.vue')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/views/ContactsView.vue')
    }
  ]
})

export default router
