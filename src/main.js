import Vue from 'vue';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from "./routes";

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
}));

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
