import { createRouter, createWebHashHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import ToolsLenguageView from '../views/ToolsLenguageView'
import JobProfileView from '../views/JobProfileView'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/ToolsLenguage',
    name: 'ToolsLenguage',
    component: ToolsLenguageView
  }, 
  {
    path: '/jobprofile',
    name: 'JobProfile',
    component: JobProfileView
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
