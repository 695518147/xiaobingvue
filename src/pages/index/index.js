import Vue from 'vue'
import index from '../../pages/index/index.vue'
import router from '../../router'


import store from '../../store'
Vue.config.productionTip = false;



new Vue({
    store,
    router,
    render: h => h(index),
}).$mount("#index");



