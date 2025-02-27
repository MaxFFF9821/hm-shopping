import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search/index.vue'
import Myorder from '@/views/myorder'
import Pay from '@/views/pay'
import Searchlist from '@/views/search/list.vue'
import Prodetail from '@/views/prodetail'
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'

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

export default router
