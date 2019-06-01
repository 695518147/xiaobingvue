<template>
    <div id="app">
        <ul class="nav nav-pills">
            <li v-for="(orderType, index) in orderTypes" role="presentation" :class="{'active':index===0}"><a
                    href="#" v-html="orderType.orderTypeName"></a></li>
        </ul>
        <left v-bind:orders="orders" v-bind:order="order"></left>

    </div>
</template>

<script type="text/javascript">
    import axios from 'axios'
    import left from "./components/left/left.vue"


    export default {
        name:"app",
        data() {
            return {
                orderTypes: [],
                orders:[],
                order:{}
            }
        },
        mounted() {
            axios.get('http://192.168.1.103:8080/xiaobing/orderTypes')
                .then(response => {
                    this.orderTypes = response.data;
                    this.orders = this.orderTypes[0].orders;
                    this.order = this.orderTypes[0].orders[0];
                })
        },
        components: {left}
    }

</script>
