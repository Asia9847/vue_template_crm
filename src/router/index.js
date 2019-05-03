import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/home'),
      // children :[
      //   {
      //       path:'navleft',
      //       name:'navleft',
      //       component:()=>import('@/components/navmenu/navleft')
      //   },
      //   {
      //       path:'navtop',
      //       name:'navtop',
      //       component:()=>import('@/components/navmenu/navtop')
      //   },
      //   {
      //       path:'content',
      //       name:'content',
      //       component:()=>import('@/components/main')
      //   }
      // ]
    }
  ]
})
