<!--suppress ALL -->
<template>
    <div id="app">
        <div class="navbar navbar-default ace-save-state">
            <div class="navbar-container ace-save-state" id="navbar-container">
                <div class="navbar-header">
                    <a href="#" class="navbar-brand center">
                        <small>
                            小冰智能机器人
                        </small>
                    </a>
                </div>
            </div>
        </div>
        <ul id="tab_header" class="nav nav-pills">
            <li v-for="(orderType, index) in orderTypes" :key="orderType.id" role="presentation" :class="{'active':index===active}" v-on:click="changeLeft(index)">
                <a href="#" v-html="orderType.orderTypeName"></a>
            </li>
        </ul>
        <left v-bind:orders="orders" v-bind:order="order"></left>
        <tip :widNum="86.5" :leftSite="6.5" :topDistance="20" :pdt="22" :pdb="47"></tip>
    </div>
</template>
<script type="text/javascript">
    import left from "./components/left/left.vue"
    import tip from "./components/tip/tip.vue"
    import {ordertype} from "./assets/request"

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
            ordertype().getOrdertypes()
                .then(response => {
                    this.orderTypes = response.data;
                    this.orders = response.data[0].orders;
                    this.order = response.data[0].orders[0];
                });
        },
        components: {left,tip},
        methods: {
            changeLeft:function(index){
                this.orders = this.orderTypes[index].orders;
                this.active = index;
                this.order = this.orderTypes[index].orders[0];
            }
        }
    }

</script>


<style scoped>
    @import "/bootstrap-jq/css/common.css";
    @import "/bootstrap-jq/css/flat-ui.min.css";
    @import "/bootstrap-jq/css/bootstrap.min.css";
    @import "/bootstrap-jq/css/ace.min.css";
    @import "/bootstrap-jq/css/fonts.googleapis.com.css";
    @import "/user-defind/user-defined.css";
</style>

