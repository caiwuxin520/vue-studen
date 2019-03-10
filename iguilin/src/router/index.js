import Vue from 'vue'
import Router from 'vue-router'
import homeComponent from '@/pages/home'
import complaintComponent from '@/pages/complaint'
import myinfoComponent from '@/pages/myinfo'
import consultationComponent from '@/pages/consultation'
import tripComponent from '@/pages/trip'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     redirect:'/home'
    },
    {
      path:'/home',
      component:homeComponent
    },
    {
      path:'/complaint',
      component:complaintComponent
    },
    {
      path:'/myinfo',
      component:myinfoComponent
    },
    {
      path:'/consultation',
      component:consultationComponent
    },
    {
      path:'/trip',
      component:tripComponent
    },
  ]
})
