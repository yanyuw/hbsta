import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticleList from '../views/ArticleList.vue'
import Detail from '../views/Detail.vue'
import Info from '../views/Info.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list/:cid',
    name: 'ArticleList',
    component: ArticleList,
    // children:[]
  },{
    path: '/list/:cid/article/:aid',
    component: Detail,
    name: 'Detail',
  },{
    path: '/info',
    component: Info,
    name: 'info',
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
