import Vue from 'vue'
import App from './App.vue'
import  store  from '../store';
import VueRouter from 'vue-router';
import Notifications from 'vue-notification'
Vue.use(Notifications);
Vue.use(VueRouter);
Vue.config.productionTip = false;

import posting from './components/posting';
import first from './components/first';
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/post',
            component: posting,
        },
        {
            path: '/first',
            component: first,

        },
    ],
});


new Vue({
    store,
    router,
  render: h => h(App),
}).$mount('#app');
