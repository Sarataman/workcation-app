import Vue from 'vue'
import Router from 'vue-router'
import Homepage from './views/Homepage.vue'
import Bookingpage from './views/Bookingpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/bookingpage',
      name: 'bookingpage',
      component: Bookingpage
    }
  ]
})
