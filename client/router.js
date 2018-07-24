import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('~/pages/index').then(m => m.default || m)
const Tasks = () => import('~/pages/tasks').then(m => m.default || m)
const About = () => import('~/pages/about').then(m => m.default || m)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/tasks',
        name: 'tasks',
        component: Tasks
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
    ]
  })
}


