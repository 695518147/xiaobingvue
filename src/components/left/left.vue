<template>
    <div id="left">
        <div class="leftMeun show" id="leftMeun" style="overflow-y: scroll;">
            <div v-for="(order,index) in orders" class="meun-item meun-item-active" v-on:click="showContent(index)">
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
        props: ['orders','order'],
        methods: {
            showContent: function (index) {
                this.order = this.orders[index];
            }
        },mounted() {
            console.log(this.order)
        },
        components:{right}

    };


</script>
