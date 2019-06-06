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
            <li v-for="(orderType, index) in orderTypes" :key="index" role="presentation" :class="{'active':index===active}" v-on:click="changeLeft(index)">
                <a href="#" v-html="orderType.orderTypeName"></a>
            </li>
        </ul>
        <left v-bind:orders="orders" v-bind:order="order"></left>

    </div>
</template>
<script type="text/javascript">
    import left from "./components/left/left.vue"
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
        created() {
            ordertype().getOrdertypes()
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

