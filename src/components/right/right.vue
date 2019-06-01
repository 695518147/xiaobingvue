<template>
    <div class="rightContent" style="overflow-y: scroll;" id="right">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="list-group">

                        <div id="content2" class="list-group-item" v-html="order.orderDescription">
{{order}}
                        </div>
                        <hr>
                        <div id="content1" class="list-group-item" v-html="order.orderTypeDescription">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"right",
        props: ['order'],
    };
</script>
