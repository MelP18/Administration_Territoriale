import { createRouter, createWebHistory } from 'vue-router'
import getDepartment from "@/views/departments/getDepartment.vue"
import postDepartment from "@/views/departments/postDepartment.vue"
import index from "@/views/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },
    {
      path: '/department',
      name: 'getDepartement',
      component:getDepartment
    },
    {
      path: '/department/post',
      name: 'setDepartement',
      component:postDepartment
    } 
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  ]
})

export default router
