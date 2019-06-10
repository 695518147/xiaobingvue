<template>
    <div id="index">
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
            <li v-for="(orderType, index) in orderTypes" :key="orderType.id" role="presentation"
                :class="{'active':index===active}" v-on:click="changeLeft(index)">
                <a href="#" v-html="orderType.orderTypeName"></a>
            </li>
        </ul>
        <left></left>
        <tip :widNum="86.5" :leftSite="6.5" :topDistance="20" :pdt="22" :pdb="47"></tip>
    </div>
</template>
<script type="text/javascript" defer>
    import left from "../../components/left/left.vue"
    import tip from "../../components/tip/tip.vue"
    import {ordertype} from "../../assets/request"

    export default {
        name: "index",
        computed: {
            orderTypes() {
                return this.$store.state.orderTypes;
            },
            active() {
                return this.$store.state.tabActive;
            }
        },
        mounted() {
            ordertype().getOrdertypes()
                .then(response => {
                    this.$store.commit("ordertypes", response.data)
                });
        },
        components: {left, tip},
        methods: {
            changeLeft: function (index) {
                this.$store.commit("orders", index);
                this.$store.commit("tabActive", index);
                this.$store.commit("order", 0);
                this.$store.commit("leftActive", 0);


            }
        }
    }

</script>


<style scoped >
    @import url("../../assets/bootstrap-jq/css/common.css");
    @import url("../../assets/bootstrap-jq/css/flat-ui.min.css");
    @import url("../../assets/bootstrap-jq/css/bootstrap.min.css");
    @import url("../../assets/bootstrap-jq/css/ace.min.css");
    @import url("../../assets/bootstrap-jq/css/fonts.googleapis.com.css");
    @import url("../../assets/user-defind/user-defined.css");
</style>

