<template>
    <div id="left">
        <div class="leftMeun show" id="leftMeun" style="overflow-y: scroll;">
            <div v-for="(order,index) in orders" :class="index===active?'meun-item meun-item-active':'meun-item'" :key="index" v-on:click="showContent(index)">
                <div id="lineHight" v-html="order.orderName"></div>
            </div>
        </div>
        <right v-bind:order="order"></right>
    </div>
</template>

<script>
    import right from "../right/right.vue";

    export default {
        name: 'left',
        props: ['orders', 'order'],
        data(){
            return{
                active:0
            }
        },
        methods: {
            showContent: function (index) {
                this.order = this.orders[index];
                this.active = index;
                console.log(this.order)
            }
        },
        components: {right},
        mounted() {
            console.log(this.order)
            this.order = this.order;
        }

    };


</script>
