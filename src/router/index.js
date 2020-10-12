import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Landing from '@/views/Landing.vue'
import Tasks from '@/views/Tasks.vue'
import AddTask from '@/views/AddTask.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Home,
    children: [
      {
        path: 'tasks',
        name: 'tasks',
        component: Tasks,
      },
      {
        path: 'add',
        name: 'add',
        component: AddTask,
      }
    ]
  }

]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
