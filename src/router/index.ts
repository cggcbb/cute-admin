import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'

const Home = () => import('@/views/home.vue')
const Naive = () => import('@/views/naive.vue')
const Pinia = () => import('@/views/pinia.vue')
const Axios = () => import('@/views/axios.vue')

const Layout = () => import(/** layout */ '@/components/layout.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '/home',
    component: Layout,
    redirect: '/axios',
    children: [
      {
        path: '/axios',
        component: Axios
      },
      {
        path: '/naive',
        component: Naive
      },
      {
        path: '/pinia',
        component: Pinia
      }
    ]
  },
  {
    path: '/naive',
    name: '/naive',
    component: Naive
  },
  {
    path: '/pinia',
    name: '/pinia',
    component: Pinia
  },
  {
    path: '/axios',
    name: '/axios',
    component: Axios
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
