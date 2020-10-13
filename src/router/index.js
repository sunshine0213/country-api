import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
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
    component: Dashboard,
    children: [
      {
        path: '/',
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
router.beforeEach((to, from, next) => {
  const firstName = JSON.parse(localStorage.getItem('taskapp'))
  if (to.fullPath === '/dashboard') {
    if (!firstName) {
      next('/');
    }
  }
  if (to.fullPath === '/dashboard/add') {
    if (!firstName) {
      next('/');
    }
  }
  if (to.fullPath === '/dashboard/tasks') {
    if (!firstName) {
      next('/');
    }
  }
  if (to.fullPath === '/') {
    if (firstName && firstName !== '') {
      next('/dashboard');
    }
  }
  next();
});

export default router
