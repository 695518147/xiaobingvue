(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)o=a[d],i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={index:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([1,"chunk-vendors"]),r()})({1:function(t,e,r){t.exports=r("44eb")},"2b66":function(t,e,r){"use strict";var n=r("564c"),i=r.n(n);i.a},"44eb":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("a026"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"index"}},[t._m(0),r("ul",{staticClass:"nav nav-pills",attrs:{id:"tab_header"}},t._l(t.orderTypes,function(e,n){return r("li",{key:e.id,class:{active:n===t.active},attrs:{role:"presentation"},on:{click:function(e){return t.changeLeft(n)}}},[r("a",{attrs:{href:"#"},domProps:{innerHTML:t._s(e.orderTypeName)}})])}),0),r("keep-alive",[r("left")],1),r("tip",{attrs:{widNum:86.5,leftSite:6.5,topDistance:20,pdt:22,pdb:47}})],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar navbar-default ace-save-state"},[r("div",{staticClass:"navbar-container ace-save-state",attrs:{id:"navbar-container"}},[r("div",{staticClass:"navbar-header"},[r("a",{staticClass:"navbar-brand center",attrs:{href:"#"}},[r("small",[t._v("\n                        小冰智能机器人\n                    ")])])])])])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"left"}},[r("div",{staticClass:"leftMeun show",staticStyle:{"overflow-y":"scroll"},attrs:{id:"leftMeun"}},t._l(t.orders,function(e,n){return r("div",{key:n,class:{"meun-item":!0,"meun-item-active":t.active==n},on:{click:function(e){return t.showContent(n)}}},[r("div",{attrs:{id:"lineHight"},domProps:{innerHTML:t._s(e.orderName)}})])}),0),r("right")],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rightContent",staticStyle:{"overflow-y":"scroll"},attrs:{id:"right"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row clearfix"},[r("div",{staticClass:"col-md-12 column"},[r("div",{staticClass:"list-group"},[t.order.split?r("div",{staticClass:"list-group-item",attrs:{id:"content2"}}):t._e(),t.order.split?r("hr"):t._e(),r("div",{staticClass:"list-group-item",attrs:{id:"content1"}})])])])])])},l=[],u=(r("ac6a"),r("28a5"),{name:"right",computed:{order:function(){return void 0==this.$store.state.order.id?{split:"",orderTypeDescription:"",orderDescription:""}:this.$store.state.order}},updated:function(){var t=(new Date).getTime();if(void 0!=this.$store.state.order.id){if(this.$store.state.order.split){var e=document.getElementById("content2");this.parse(e,this.$store.state.order.orderDescription)}var r=document.getElementById("content1");this.parse(r,this.$store.state.order.orderTypeDescription)}var n=(new Date).getTime();console.log("stop - start",n-t)},methods:{parse:function(t,e){t.innerHTML=e;var r=t.clientWidth;d(t.childNodes,r)}}});function d(t,e){Array.prototype.forEach.call(t,function(t){if("IMG"==t.tagName){var r=t.getAttribute("width");if(r<e)t.style.width=r+"px";else{var n=t.clientHeight*(1*e/r);t.style.height=n+"px"}}0!=t.childNodes.length&&d(t.childNodes,e)})}var f=u,p=r("2877"),v=Object(p["a"])(f,c,l,!1,null,null,null),h=v.exports,m={name:"left",computed:{orders:function(){return this.$store.state.orders},active:function(){return this.$store.state.leftActive}},methods:{showContent:function(t){this.$store.commit("leftActive",t),this.$store.commit("order",t)}},components:{right:h}},g=m,b=Object(p["a"])(g,o,a,!1,null,null,null),y=b.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dialog",attrs:{id:"tip"}},[t.isShow?r("div",{staticClass:"dialog-cover back",on:{click:t.closeMyself}}):t._e(),r("transition",{attrs:{name:"drop"}},[t.isShow?r("div",{staticClass:"dialog-content",style:{top:t.topDistance+"%",width:t.widNum+"%",left:t.leftSite+"%"}},[r("div",{staticClass:"dialog_head back "},[t._t("header")],2),r("div",{staticClass:"dialog_main ",style:{paddingTop:t.pdt+"px",paddingBottom:t.pdb+"px"}},[r("p",{attrs:{name:"main"},domProps:{innerHTML:t._s(t.message)}})]),r("div",{staticClass:"foot_close ",on:{click:t.closeMyself}},[r("div",{staticClass:"close_img back"})])]):t._e()])],1)},_=[],x=(r("c5f6"),r("96cf"),r("3b8d")),C=r("bc3a"),T=r.n(C),$="http://120.78.205.51:7070";function O(){return{getTips:function(){var t=Object(x["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.a.get($+"/xiaobing/tips");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}}function S(){return{getOrdertypes:function(){var t=Object(x["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T.a.get($+"/xiaobing/orderTypes");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}}var k={name:"tip",props:{widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:20},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},data:function(){return{message:"",isShow:!1}},methods:{closeMyself:function(){this.isShow=!1,this.$emit("on-close")}},mounted:function(){var t=this;O().getTips().then(function(e){200==e.status&&(0!==e.data.length?(t.message=e.data[0].tipContent,t.isShow=!0):t.isShow=!1,setInterval(t.closeMyself,1e4))})}},A=k,M=(r("b9f3"),Object(p["a"])(A,w,_,!1,null,"2ac86a20",null)),j=M.exports,N={name:"index",computed:{orderTypes:function(){return this.$store.state.orderTypes},active:function(){return this.$store.state.tabActive}},beforeCreate:function(){var t=this;S().getOrdertypes().then(function(e){t.$store.commit("ordertypes",e.data)})},components:{left:y,tip:j},methods:{changeLeft:function(t){this.$store.commit("orders",t),this.$store.commit("tabActive",t),this.$store.commit("order",0),this.$store.commit("leftActive",0)}}},D=N,P=(r("2b66"),Object(p["a"])(D,i,s,!1,null,"5a2642e9",null)),E=P.exports,H=r("b054"),L=r.n(H),B=r("2f62");n["a"].use(B["a"]);var I={collapsed:!1,filter:function(t){return"aBlacklistedMutation"!==t.type},transformer:function(t){return t.subTree},mutationTransformer:function(t){return t},logger:console},R=new B["a"].Store({state:{orderTypes:[],orders:[],order:{},tabActive:0,leftActive:0,rightActive:0},mutations:{ordertypes:function(t,e){t.orderTypes=e,this.commit("orders",0),this.commit("order",0)},orders:function(t,e){t.orderTypes.length>e&&(t.orders=t.orderTypes[e].orders)},order:function(t,e){t.orders.length>e&&(t.order=t.orders[e])},tabActive:function(t,e){t.tabActive=e},leftActive:function(t,e){t.leftActive=e},rightActive:function(t,e){t.rightActive=e}},actions:{},plugins:[L()(I)]});n["a"].config.productionTip=!0,new n["a"]({store:R,render:function(t){return t(E)}}).$mount("#index")},"564c":function(t,e,r){},b9f3:function(t,e,r){"use strict";var n=r("fa49"),i=r.n(n);i.a},fa49:function(t,e,r){}});
//# sourceMappingURL=index.30bc1d2c.js.map