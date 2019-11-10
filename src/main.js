import Vue from 'vue';
import App from './App.vue';
import NotFound from './pages/404.vue';
import VueSocketIO from 'vue-socket.io';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const routes = {
  '/':  App,
};

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
}));

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app');
