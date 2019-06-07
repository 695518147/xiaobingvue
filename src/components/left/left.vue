<template>
    <div id="left">
        <div class="leftMeun show" id="leftMeun" style="overflow-y: scroll;">
            <div v-for="(order,index) in orders" :class="{'meun-item':true, 'meun-item-active': active == index}"
                 :key="index" v-on:click="showContent(index)">
                <div id="lineHight" v-html="order.orderName"></div>
            </div>
        </div>
        <right></right>
    </div>
</template>

<script>
    import right from "../right/right.vue";

    export default {
        name: 'left',
        computed: {
            orders() {
                return this.$store.state.orders;
            },
            active() {
                return this.$store.state.leftActive;
            }
        },
        methods: {
            showContent: function (index) {
                this.$store.commit("leftActive", index);
                this.$store.commit("order", index);

            }
        },
        components: {right},
    };


</script>
