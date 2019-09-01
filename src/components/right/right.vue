<template>
    <div class="rightContent" style="overflow-y: scroll;" id="right">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="list-group">

                        <div id="content2" class="list-group-item" v-html="parse(order.orderDescription,'content2')"
                             v-if="order.split">
                        </div>
                        <hr v-if="order.split">
                        <div id="content1" class="list-group-item"
                             v-html="parse(order.orderTypeDescription, 'content1')">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jQuery'

    export default {
        name: "right",
        computed: {
            order() {
                return this.$store.state.order;
            }
        },
        methods: {
            parse(str, parentId) {
                var objE = document.createElement("div");
                objE.innerHTML = str;
                let $parent = $("#" + parentId)
                let $dom = $(objE).children();
                $dom.find("img").each((index, item) => {
                    if ($(item).prop("width") < $parent.width()) {
                        let width = $(item).prop("width");
                        $(item).width(width)
                    } else {
                        let width = $parent.width();
                        let height = $(item).prop('height') * ($parent.width() * 1.0 / $(item).prop("width"));
                        $(item).width(width);
                        $(item).height(height)
                    }
                });
                console.log($dom.html());
                return $(objE).html();
            }
        }
    };
</script>
