(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48c872b2"],{"1e01":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bgwrite order_item"},[i("router-link",{attrs:{to:"/order/orderdetails?id="+t.item.id+(t.isSupplier?"&sup=supplier":"")}},[i("div",{staticClass:"fx order_item_head"},[i("div",[i("h4",[t._v(t._s(0==t.item.is_pay?"未支付":t.item.sid_cn))]),i("span",{staticClass:"order_item_head_s1"},[t._v("订单编号："+t._s(t.item.oid))])]),i("span",{staticClass:"order_item_head_s2"},[t._v(t._s(t.item.status))])])]),i("div",{staticClass:"order_item_shop"},[t._l(t.item.product,function(e,s){return i("div",{key:s},[i("div",{staticClass:"fx foot_order_item_list"},[i("div",{staticClass:"fx"},[i("router-link",{key:s,staticClass:"a1",attrs:{to:0==e.pid?"":"/shop/shopdetails?tid="+t.appusers.uid+"&id="+e.pid}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.piclink,expression:"it.piclink"}],attrs:{src:e.piclink,alt:""}})]),i("div",{staticClass:"fx_3"},[i("router-link",{key:s,staticClass:"fx orderlist_a",attrs:{to:0==e.pid?"":"/shop/shopdetails?tid="+t.appusers.uid+"&id="+e.pid}},[i("div",[i("p",{staticClass:"order_p van-ellipsis"},[t._v("\n                                    "+t._s(e.title.length>=23?e.title.slice(0,23)+"...":e.title)+"\n                                ")]),e.sku_cn?i("p",[t._v(t._s(e.sku_cn))]):t._e()]),i("div",{staticClass:"fx"},[i("p",[t._v("￥"+t._s(t.$fnc.toFixedZ(e.price)))]),i("p",[t._v("×"+t._s(e.number))])])]),1!=e.status&&2!=e.status&&3!=e.status||t.isSupplier?t._e():i("p",{staticClass:"ppp2 tr"},[i("van-button",{attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.closeOrder(e.id)}}},[t._v("取消退货")])],1),i("div",{staticClass:"fx"},[i("div",[i("van-button",{directives:[{name:"show",rawName:"v-show",value:"已完成"==t.item.status&&!t.isSupplier,expression:"item.status=='已完成' && !isSupplier"}],staticClass:"review_order_list",attrs:{plain:"",to:"/shop/shopreview?id="+e.id}},[t._v("待评价")])],1),e.order_return&&t.isSupplier?i("van-button",{staticClass:"review_order_list",attrs:{type:"danger",size:"mini"}},[t._v(t._s(e.order_return)+"\n                            ")]):t._e()],1)],1)],1),i("div",{staticClass:"fx tr"})])])}),i("div",{staticClass:"tr foot_order_item"},[t._v("\n            共\n            "),i("span",[t._v(t._s(t.item.product.length))]),t._v(" 件商品\n            "),i("span",[t._v("订单金额 ￥"+t._s(t.$fnc.toFixedZ(t.item.money)))])]),t.isSupplier?i("div",{staticClass:"foot_order_btn tr"},["已支付"==t.item.status||"已发货"==t.item.status?i("van-button",{attrs:{plain:"",size:"small"},on:{click:t.subDeliverGoods}},[t._v("\n                "+t._s("已支付"==t.item.status?"确认发货":"查看物流"))]):t._e()],1):i("div",{staticClass:"foot_order_btn tr"},["未支付"==t.item.status?i("van-button",{attrs:{plain:"",size:"small",to:"/order/payorder?id="+t.item.id}},[t._v("去支付")]):1==t.item.is_return?i("van-button",{attrs:{plain:"",size:"small",to:"/order/orderdetails?id="+t.item.id}},[t._v("退货中")]):"已支付"==t.item.status?i("van-button",{attrs:{plain:"",size:"small",to:"/order/orderdetails?id="+t.item.id}},[t._v("待发货")]):"配货中"==t.item.status?i("van-button",{attrs:{plain:"",size:"small",to:"/order/orderdetails?id="+t.item.id}},[t._v("配货中")]):"已发货"==t.item.status?i("van-button",{attrs:{plain:"",size:"small",to:""},on:{click:function(e){return t.subConfim(t.item.id)}}},[t._v("确认收货")]):"已完成"==t.item.status?i("van-button",{attrs:{plain:"",size:"small",to:"/shop/shopdetails?tid="+t.appusers.uid+"&id="+t.item.product[0].pid}},[t._v("再次购买")]):t._e()],1)],2),i("van-popup",{staticClass:"sub-goods",attrs:{position:"right","get-container":"#app"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.isSupplier?i("deliver-goods",{attrs:{item:t.item},on:{opThis:t.opThis}}):t._e()],1)],1)},a=[],l=i("5118"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods"},[i("van-nav-bar",{staticClass:"navbar",attrs:{title:"确认发货","left-text":"","left-arrow":"",border:!1},on:{"click-left":t.toBackLeft}}),i("van-cell-group",{staticClass:"c2",attrs:{title:"收货信息"}},[i("van-cell",{attrs:{title:"收货人",value:t.item.mail_name}}),i("van-cell",{attrs:{title:"联系电话",value:t.item.mail_tel}}),i("van-cell",{attrs:{title:"收货地址",value:t.$fnc.deleteNumber(t.item.mail_province+t.item.mail_city+t.item.mail_area+t.item.mail_town+t.item.mail_address)}})],1),i("van-cell-group",{staticClass:"c2",attrs:{title:"订单信息"}},[i("van-cell",{attrs:{title:"订单号",value:t.item.oid}}),i("van-cell",{attrs:{title:"下单会员",value:t.item.uid_nick+"("+t.item.uid_cn+")"}}),i("van-cell",{attrs:{title:"金额",value:t.$fnc.toFixedZ(t.item.money)}}),i("van-cell",{attrs:{title:"备注",value:t.item.remark}})],1),i("van-cell-group",{staticClass:"c2",attrs:{title:"物流选择"}},[i("van-radio-group",{staticClass:"fx mail-xz",model:{value:t.item.mail_type,callback:function(e){t.$set(t.item,"mail_type",e)},expression:"item.mail_type"}},[i("van-radio",{staticClass:"ra1",attrs:{name:"0"}},[t._v("常规发货")]),1==t.$store.state.config.plugin.kdlwnjk.is_open?i("van-radio",{attrs:{name:"1"}},[t._v("快递鸟发货")]):t._e()],1)],1),0==t.item.mail_type?i("van-cell-group",{staticClass:"c2 good-cell",attrs:{title:"物流信息"}},[i("van-cell",{attrs:{title:"物流公司",value:t.item.mail_courier}}),i("van-cell",{attrs:{title:"发货时间",value:t.$fnc.getTimeFormat(t.item.mail_time)}}),i("van-cell",{staticClass:"cell",attrs:{title:"物流单号"}},[i("van-field",{staticClass:"input_cells",attrs:{placeholder:"请输入物流单号","input-align":"right"},model:{value:t.item.mail_oid,callback:function(e){t.$set(t.item,"mail_oid",e)},expression:"item.mail_oid"}})],1)],1):i("van-cell-group",{staticClass:"c2 good-cell",attrs:{title:"物流信息"}},[i("van-cell",{attrs:{title:"快递鸟面单号",value:t.item.kdn_order_code}}),i("van-cell",{attrs:{title:"发货时间",value:t.$fnc.getTimeFormat(t.item.mail_time)}})],1),i("van-button",{staticClass:"pay_order_btn ",attrs:{type:"primary",size:"large"},on:{click:t.subMail}},[t._v("提交")])],1)},o=[],r=i("9523"),c=i.n(r),u=(i("be7f"),i("565f")),d={components:c()({},u["a"].name,u["a"]),props:{item:{type:Object,default:function(){}}},data:function(){return{mail:""}},methods:{toBackLeft:function(){this.$emit("opThis")},subMail:function(){var t=this;return 0==t.$store.state.config.plugin.kdlwnjk.is_open&&1==t.item.mail_type?(t.$toast.fail("请选择发货方式"),!1):""==t.item.mail_oid&&0==t.item.mail_type?(t.$toast.fail("请填写物流单号"),!1):void this.$dialog.confirm({message:"是否确认发货？"}).then(function(){var e={};e.id=t.item.id,e.mail_type=t.item.mail_type,e.mail_oid=t.item.mail_oid,t.$api.getSupplier.sendMail(e).then(function(e){200==e.code&&(t.$toast.success("发货成功"),Object(l["setTimeout"])(function(){t.$emit("opThis",!0)},1500))})})}}},m=d,p=(i("6ea0"),i("2877")),v=Object(p["a"])(m,n,o,!1,null,"10b006a1",null),_=v.exports,f={props:{item:{type:Object,default:function(){}},isSupplier:{type:Boolean,default:!1}},components:{DeliverGoods:_},data:function(){return{show:!1}},methods:{opThis:function(t){t&&this.$emit("openThis"),this.show=!1},closeOrder:function(t){var e=this,i=this;i.$dialog.confirm({title:"提示",message:"是否确认取消退货？"}).then(function(){i.$api.getOrder.closeOrderCancel({id:t}).then(function(t){200==t.code&&(i.$toast.success(t.result),Object(l["setTimeout"])(function(){e.$emit("openThis")},1500))})}).catch(function(){})},subConfim:function(t){var e=this,i=this;i.$dialog.confirm({title:"提示",message:"是否确认收货"}).then(function(){i.$api.getOrder.closeOrder({id:t}).then(function(t){200==t.code&&(i.$toast.success(t.result),Object(l["setTimeout"])(function(){e.$emit("openThis","已完成")},1500))})}).catch(function(){})},subDeliverGoods:function(){this.show=!0}}},h=f,b=(i("b17b"),Object(p["a"])(h,s,a,!1,null,"10268cac",null));e["a"]=b.exports},"6ea0":function(t,e,i){"use strict";var s=i("c937"),a=i.n(s);a.a},"85d8":function(t,e,i){"use strict";var s=i("bb54"),a=i.n(s);a.a},8831:function(t,e,i){"use strict";i.r(e);var s,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"order_list_con",attrs:{id:"order_con"}},[i("van-nav-bar",{staticClass:"navbar",attrs:{title:"订单","left-text":"","left-arrow":"",border:!1},on:{"click-left":t.toBack}}),i("van-tabs",{on:{click:t.onClickDisabled},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{attrs:{name:"",title:"全部订单"}}),"未完成"==t.$route.query.status?i("van-tab",{attrs:{name:"未完成",title:"未完成"}}):t._e(),i("van-tab",{attrs:{name:"已完成",title:"已完成"}}),i("van-tab",{attrs:{name:"待发货",title:"待发货"}}),i("van-tab",{attrs:{name:"退货中",title:"退货中"}})],1),i("mescroll-vue",{ref:"mescroll",staticClass:"scol",attrs:{down:t.mescrollDown,up:t.mescrollUp,id:"mescroll"},on:{init:t.mescrollInit}},[i("div",[i("form",{attrs:{action:"/"}},[i("van-search",{staticClass:"srarc_order",attrs:{background:"#f3f3f3",placeholder:"请输入搜索关键词"},on:{search:t.onSearch},model:{value:t.oid,callback:function(e){t.oid=e},expression:"oid"}})],1),t._l(t.list,function(e,s){return i("orderItem",{key:s,attrs:{item:e,isSupplier:!0},on:{openThis:t.getopenThis}})})],2)])],1)},l=[],n=i("9523"),o=i.n(n),r=(i("0ec5"),i("21ab")),c=(i("3df5"),i("2830")),u=(i("be7f"),i("565f")),d=i("8d6b"),m=i("1e01"),p={name:"huoyiorder",components:(s={orderItem:m["a"],MescrollVue:d["a"]},o()(s,u["a"].name,u["a"]),o()(s,c["a"].name,c["a"]),o()(s,r["a"].name,r["a"]),s),data:function(){return{active:this.$route.query.status||"",show:!1,mescroll:null,mescrollDown:{},mescrollUp:{callback:this.upCallback,page:{num:0,size:10},htmlNodata:'<p class="upwarp-nodata">-- END --</p>',noMoreSize:5,toTop:{warpId:"mescroll",src:i("90c5"),offset:1e3},empty:{warpId:"mescroll",icon:i("b45c"),tip:"暂无相关数据~"}},list:[],info:{},oid:""}},beforeRouteEnter:function(t,e,i){i(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,e,i){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),i()},created:function(){},methods:{onClickDisabled:function(t,e){this.active=t,this.mescroll.resetUpScroll()},onSearch:function(t){""!=t?(this.oid=t,this.mescroll.resetUpScroll()):(this.oid="",this.mescroll.resetUpScroll())},mescrollInit:function(t){this.mescroll=t},getopenThis:function(){this.mescroll.resetUpScroll()},upCallback:function(t,e){var i=this,s={};s.page=t.num,s.oid=this.oid||"",s.status=this.active||this.$route.query.status||"",this.$api.getSupplier.getSuplierOrderList(s).then(function(s){if(200==s.code){var a=s.result;1===t.num&&(i.list=[]),i.list=i.list.concat(a),i.$nextTick(function(){e.endSuccess(a.length)})}else e.endErr()})}}},v=p,_=(i("85d8"),i("2877")),f=Object(_["a"])(v,a,l,!1,null,"a7685a22",null);e["default"]=f.exports},b17b:function(t,e,i){"use strict";var s=i("ee10"),a=i.n(s);a.a},bb54:function(t,e,i){},c937:function(t,e,i){},ee10:function(t,e,i){}}]);