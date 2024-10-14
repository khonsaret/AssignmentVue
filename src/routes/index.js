import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Course from '@/pages/Course.vue';
import Process from '@/pages/Process.vue';
import Hosting from '@/pages/Hosting.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/course', component: Course },
    { path: '/about', component: About },
    { path: '/process', component: Process },
    { path: '/hosting', component: Hosting }, 
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router
