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
                    dom_content2.innerHTML = this.$store.state.order.orderDescription
                    this.parse(dom_content2)
                }
                let dom_content1 = document.getElementById("content1")
                dom_content1.innerHTML = this.$store.state.order.orderTypeDescription
                this.parse(dom_content1)
            }
            let stop = new Date().getTime()
            console.log("stop - start", stop - start)
        },
        methods: {
            parse(dom) {
                let p_width = dom.clientWidth
                console.log("p_width", p_width)
                let nodeIterator = document.createNodeIterator(dom, NodeFilter.SHOW_ELEMENT, (node) => {
                    return node.nodeName.toLowerCase() === 'img' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                });
                let currentNode;
                while (currentNode = nodeIterator.nextNode()) {
                    let c_width = currentNode.getAttribute("width")
                    console.log("c_width", c_width)
                    if (c_width < p_width) {
                        currentNode.style.width = c_width + 'px'
                    } else {
                        let height = currentNode.getAttribute("height") * (p_width * 1.0 / c_width)
                        console.log("height", height)
                        currentNode.style.height = height + 'px'
                    }
                }
            }
        }
    };

</script>
