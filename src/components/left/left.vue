<template>
    <div id="left">
        <div class="leftMeun show" id="leftMeun" style="overflow-y: scroll;">
            <div v-for="(order,index) in app.orders" :class="{'meun-item':true, 'meun-item-active': active == index}"
                 :key="index" v-on:click="showContent(index)">
                <div id="lineHight" v-html="order.orderName"></div>
            </div>
        </div>
        <right v-bind:order="app.order"></right>
    </div>
</template>

<script>
    import right from "../right/right.vue";

    let num = 0;
    export default {
        name: 'left',
        inject: {
            app: {
                default: () => ({})
            }
        },
        data() {
            return {
                active: num
            }
        },
        methods: {
            showContent: function (index) {
                this.app.order = this.app.orders[index];
                this.active = index;
            }
        },
        components: {right},
    };


</script>
