<template>
    <div class="rightContent" style="overflow-y: scroll;" id="right">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="list-group">

                        <div id="content2" class="list-group-item"
                             v-if="order.split">
                        </div>
                        <hr v-if="order.split">
                        <div id="content1" class="list-group-item">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cheerio from 'cheerio'


    export default {
        name: "right",
        computed: {
            order() {
                //解决闪现undefind
                return this.$store.state.order.id == undefined ? {
                    split: "",
                    orderTypeDescription: "",
                    orderDescription: ""
                } : this.$store.state.order;
            }
        },
        updated() {
            let start = new Date().getTime()
            if (!(this.$store.state.order.id == undefined)) {
                if (this.$store.state.order.split) {
                    let dom_content2 = document.getElementById("content2")
                    this.parse(dom_content2, this.$store.state.order.orderDescription)

                }
                let dom_content1 = document.getElementById("content1")
                this.parse(dom_content1, this.$store.state.order.orderTypeDescription)
            }
            let stop = new Date().getTime()
            console.log("stop - start", stop - start)
        },
        methods: {
            parse(dom, description) {
                dom.innerHTML = description;
                let p_width = dom.clientWidth
                parseNode(dom.childNodes, p_width)
            },

        }
    };

    function parseNode(nodes, p_width) {

        Array.prototype.forEach.call(nodes, function (node) {

            if (node.tagName == "IMG") {
                let c_width = node.getAttribute("width")

                if (c_width < p_width) {
                    node.style.width = c_width + 'px'
                } else {
                    let height = node.clientHeight * (p_width * 1.0 / c_width)
                    node.style.height = height + 'px'
                }
            }
            if (node.childNodes.length != 0) {
                parseNode(node.childNodes, p_width)
            }
        });
    }

</script>
