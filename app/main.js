import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Desk from './components/Desk.vue'

import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/desk', component: Desk }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app-desk',
  router,
  store,
  render: h => h(App)
})
