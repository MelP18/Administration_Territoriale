import { createRouter, createWebHistory } from 'vue-router'
import getDepartment from "@/views/departments/getDepartment.vue"
import postDepartment from "@/views/departments/postDepartment.vue"

import IndexMaster from "@/views/masterHome/IndexMaster.vue"
import HomeMaster from '@/views/masterHome/HomeMaster.vue'
import AuthMaster from '@/views/masterHome/AuthMaster.vue'

import SignUp from '@/views/authMaster/SignUp.vue'
import SignIn from '@/views/authMaster/SignIn.vue'
import Description from '@/views/indexMaster/Description.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'index',
            component: IndexMaster,
            children: [
                {
                    path: '',
                    name: 'welcome',
                    component: Description
                },
            ]
        },
        {
            path: '/',
            name: 'authentication',
            component: AuthMaster,
            children: [
                {
                    path: '/signup',
                    name: 'sign-up',
                    component: SignUp
                },
                {
                    path: '/signin',
                    name: 'sign-in',
                    component: SignIn
                },
            ]
        },
        
        {
            path: '/department',
            name: 'getDepartement',
            component: getDepartment
        },
        {
            path: '/department/post',
            name: 'setDepartement',
            component: postDepartment
        },
        {
            path: '/home',
            name: 'home',
            component: HomeMaster,
            children: [

                {
                    path: '/department/post',
                    name: 'setDepartement',
                    component: postDepartment
                },
                {
                    path: '/department',
                    name: 'getDepartement',
                    component: getDepartment
                },
            ]
        }
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    ]
})

export default router
