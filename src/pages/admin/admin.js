import Vue from 'vue'
import admin from '../../pages/admin/admin.vue'


Vue.config.productionTip = false;



new Vue({
    render: h => h(admin),
}).$mount("#admin");



