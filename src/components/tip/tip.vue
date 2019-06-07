<template>
    <div id="tip" class="dialog">
        <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
        <div class="dialog-cover back"  v-if="isShow"  @click="closeMyself"></div>
        <!-- transition 这里可以加一些简单的动画效果 -->
        <transition name="drop">
            <!--style 通过props 控制内容的样式  -->
            <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}"  v-if="isShow">
                <div class="dialog_head back ">
                    <!--弹窗头部 title-->
                    <slot name="header"></slot>
                </div>
                <div class="dialog_main " :style="{paddingTop:pdt+'px',paddingBottom:pdb+'px'}">
                    <!--弹窗的内容-->
                    <p name="main" v-html="message"></p>
                </div>
                <!--弹窗关闭按钮-->
                <div  class="foot_close " @click="closeMyself">
                    <div class="close_img back"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    import {tip} from "../../assets/request"

    /** 弹窗组件*/
    export default {
        name: "tip",
        props: {
            widNum: {
                type: Number,
                default: 86.5
            },
            leftSite: {
                // 左定位
                type: Number,
                default: 6.5
            },
            topDistance: {
                //top上边距
                type: Number,
                default: 20
            },
            pdt: {
                //上padding
                type: Number,
                default: 22
            },
            pdb: {
                //下padding
                type: Number,
                default: 47
            }
        },
        data(){
            return {
                message:"",
                isShow: false,
            }
        },
        methods: {
            closeMyself() {
                this.isShow = false;
                this.$emit("on-close");
            }
        },
        created() {
            let that = this;
            tip().getTips().then(response => {
                if (response.status == 200) {
                    if (response.data) {
                        that.message = response.data[0].tipContent;
                        that.isShow = true;
                    }else{
                        that.isShow = false;
                    }
                }
            });
        }
    };
</script>
<style lang="scss" scoped>
    /** 弹窗动画*/
    .drop-enter-active {
        // 动画进入过程：0.5s
        transition: all 0.5s ease;
    }
    .drop-leave-active {
        // 动画离开过程：0.5s
        transition: all 0.3s ease;
    }
    .drop-enter {
        //动画之前的位置
        transform: translateY(-500px);
    }
    .drop-leave-active {
        //动画之后的位置
        transform: translateY(-500px);
    }
    // 最外层 设置position定位
    .dialog {
        position: relative;
        color: #2e2c2d;
        font-size: 16px;
    }
    // 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
    .dialog-cover {
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    // 内容层 z-index要比遮罩大，否则会被遮盖，
    .dialog-content {
        position: fixed;
        top: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 300;
        .dialog_head {
            // 头部title的背景 居中圆角等属性。
            // 没有图片就把background-image注释掉
            background-image: url("../../assets/c.jpg");
            width: 18rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .dialog_main {
            // 主体内容样式设置
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-content: center;
            width: 18rem;
            height: 18rem;
            padding: 22px 0 47px 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
        .foot_close {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #fcca03;
            display: flex;
            justify-content: center;
            align-content: center;
            margin-top: -25px;
            .close_img {
                background-image: url("../../assets/h.png");
                margin-top: 9.5px;
                width: 30px;
                height: 30px;
            }
        }
    }
</style>
