import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'

import App from './app.vue'
import Top from   './components/top.vue'
import Help from  './components/help.vue'
import Login from './components/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Top },
    { path: '/help', component: Help },
    { path: '/login', component: Login }
  ]
})

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
