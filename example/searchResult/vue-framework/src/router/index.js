import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'

Vue.use(VueRouter)

const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('../views/AboutView.vue')
//   },
  {
    path: '/',
    name: 'search',
    component: SearchView
    // component: () => import('../views/SearchView.vue')
  },
  {
    path: '/stackShowLazy',
    name: 'search2',
    component: () => import('../views/SearchView2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
