import Vue from 'vue'
import index from '../../pages/index/index.vue'

import store from '../../store'
Vue.config.productionTip = true;



new Vue({
    store,
    render: h => h(index),
}).$mount("#index");



