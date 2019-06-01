import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;


new Vue({
    data() {
        return {
            orderTypes: {},
        }
    },
    router,
    render: h => h(App),
}).$mount('#app');


