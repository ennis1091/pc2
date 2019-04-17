// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件

Vue.use(VueLazyload, {
  preLoad: 1.3,
/*  error: 'dist/error.png',*/
  loading: require('img/defalt.jpg'),
  attempt: 1
})
Vue.config.productionTip = false

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})