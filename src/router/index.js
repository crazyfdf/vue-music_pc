import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../components/content/main/Main')

const PersonalizedRecommendation = () => import('../views/DiscoverMusic/PersonalizedRecommendation')
const SongSheet = () => import('../views/DiscoverMusic/SongSheet.vue')
const RankingList = () => import('../views/DiscoverMusic/RankingList.vue')
const Singer = () => import('../views/DiscoverMusic/Singer.vue')


const SingerInfo = () => import('../views/singerInfo/SingerInfo.vue')
const MusicSheet = () => import('../views/musicSheet/MusicSheet.vue')
const UserIndex = () => import('../views/userIndex/UserIndex.vue')

// const Profile = () => import('../views/profile/profile.vue')
// const Cart = () => import('../views/cart/cart.vue')
// const Layout = () => import('../views/element/Layout.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Main,
    children: [{
        path: '/index',
        redirect: '/index/personalizedRecommendation'
      },
      {
        path: '/index/personalizedRecommendation',
        name: 'personalizedRecommendation',
        component: PersonalizedRecommendation,
      }, {
        path: '/index/songSheet',
        name: 'songSheet',
        component: SongSheet,
      },
      {
        path: '/index/rankingList',
        name: 'rankingList',
        component: RankingList,
      }, {
        path: '/index/singer',
        name: 'singer',
        component: Singer,
      },
    ]
  },
  {
    path: '/musicSheet',
    name: 'musicSheet',
    component: MusicSheet,
  }, {
    path: '/singerInfo',
    name: 'singerInfo',
    component: SingerInfo,
  }, {
    path: '/userIndex',
    name: 'userIndex',
    component: UserIndex,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
