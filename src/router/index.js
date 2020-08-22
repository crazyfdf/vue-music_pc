import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/category.vue')
const Profile = () => import('../views/profile/profile.vue')
const Cart = () => import('../views/cart/cart.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router