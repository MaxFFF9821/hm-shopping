import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import Cart from '@/views/layout/cart.vue'
import User from '@/views/layout/user.vue'

const Login = () => import('@/views/login')
const Search = () => import('@/views/search/index.vue')
const Myorder = () => import('@/views/myorder')
const Pay = () => import('@/views/pay')
const Searchlist = () => import('@/views/search/list.vue')
const Prodetail = () => import('@/views/prodetail')
const store = () => import('@/store')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/category', component: Category },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/myorder', component: Myorder },
    { path: '/pay', component: Pay },
    // 动态路由传惨
    { path: '/prodetail/:id', component: Prodetail },
    { path: '/searchlist', component: Searchlist }
  ]
})
const authUrls = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    next()
    return
  }
  const token = store.getters.token
  // console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
