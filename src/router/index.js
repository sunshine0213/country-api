import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Landing from '@/views/Landing.vue'
import Tasks from '@/views/Tasks.vue'
import AddTask from '@/views/AddTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
    children: [
      { path: '/tasks', component: Tasks },
      { path: 'add', component: AddTask },]
  },
  {
    path: '/add',
    name: 'Add',
    component: AddTask,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
