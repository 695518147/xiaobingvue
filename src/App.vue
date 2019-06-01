<template>
    <div id="app">
        <ul class="nav nav-pills">
            <li v-for="(orderType, index) in orderTypes" role="presentation" :class="{'active':index===active}" v-on:click="changeLeft(index)">
                <a href="#" v-html="orderType.orderTypeName"></a>
            </li>
        </ul>
        <left v-bind:orders="orders" v-bind:order="order"></left>

    </div>
</template>
<script type="text/javascript">
    import axios from 'axios'
    import left from "./components/left/left.vue"

    //配置后台域名
    const baseRequestUrl="http://localhost:7070";


    export default {
        name: "app",
        data() {
            return {
                orderTypes: [],
                orders: [],
                order: {},
                active:0
            }
        },
        mounted() {
            console.log(baseRequestUrl)
            axios.get(baseRequestUrl + '/xiaobing/orderTypes')
                .then(response => {
                    this.orderTypes = response.data;
                    this.orders = this.orderTypes[0].orders;
                    this.order = this.orderTypes[0].orders[0];
                })
        },
        components: {left},
        methods: {
            changeLeft:function(index){
                this.orders = this.orderTypes[index].orders;
                this.active = index;
            }
        }
    }

</script>
