(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca43446"],{"00a8":function(t,e,i){},"0d51":function(t,e,i){"use strict";var n=i("980a"),s=i.n(n);s.a},"3c12":function(t,e,i){"use strict";i.r(e);var n,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-cust"},[i("van-nav-bar",{staticClass:"navbar",attrs:{title:"全部客户","left-text":"","left-arrow":""},on:{"click-left":function(e){return t.$router.back(-1)}}}),i("van-grid",{staticClass:"my-cust-grid",attrs:{clickable:!0}},[i("van-grid-item",{class:{showActive:1==t.custom_type},attrs:{text:"A类客户"},on:{click:function(e){return t.tabType(1)}}}),i("van-grid-item",{class:{showActive:2==t.custom_type},attrs:{text:"B类客户"},on:{click:function(e){return t.tabType(2)}}}),i("van-grid-item",{class:{showActive:3==t.custom_type},attrs:{text:"C类客户"},on:{click:function(e){return t.tabType(3)}}}),i("van-grid-item",{class:{showActive:4==t.custom_type},attrs:{text:"其他"},on:{click:function(e){return t.tabType(4)}}})],1),i("div",{staticClass:"item-con"},[i("mescroll-vue",{ref:"mescroll",staticClass:"scol",attrs:{down:t.mescrollDown,up:t.mescrollUp,id:"mescroll"},on:{init:t.mescrollInit}},t._l(t.list,function(e,n){return i("my-customer-item",{key:n,staticClass:"item-con-item",attrs:{index:n,item:e},on:{upshow:t.getUpShow}})}),1)],1)],1)},a=[],o=i("9523"),c=i.n(o),r=(i("0ec5"),i("21ab")),l=(i("3df5"),i("2830")),m=i("8d6b"),u=i("85f5"),f={name:"MyCustomer",components:(n={},c()(n,l["a"].name,l["a"]),c()(n,r["a"].name,r["a"]),c()(n,"MyCustomerItem",u["a"]),c()(n,"MescrollVue",m["a"]),n),data:function(){return{custom_type:1,mescroll:null,mescrollDown:{},mescrollUp:{callback:this.upCallback,page:{num:0,size:10},htmlNodata:'<p class="upwarp-nodata">-- END --</p>',noMoreSize:5,toTop:{warpId:"zhanye_shop_con",src:i("90c5"),offset:1e3},empty:{warpId:"mescroll",icon:i("b45c"),tip:"暂无相关数据~"}},list:[]}},beforeRouteEnter:function(t,e,i){i(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,e,i){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),i()},created:function(){},methods:{tabType:function(t){this.custom_type=t,this.mescroll.resetUpScroll()},getUpShow:function(t){var e=this;this.$nextTick(function(){e.list[t.index].show=t.bool})},mescrollInit:function(t){this.mescroll=t},upCallback:function(t,e){var i=this,n={};n.page=t.num,n.custom_type=this.custom_type,this.$api.getZhanYe.getMyCustomList(n).then(function(n){if(200==n.code){for(var s in n.result)n.result[s].show=!1;var a=n.result;1===t.num&&(i.list=[]),i.list=i.list.concat(a),i.$nextTick(function(){e.endSuccess(a.length)})}else e.endErr()})}},watch:{$route:function(t,e){"AddFollowUp"==e.name&&this.mescroll.resetUpScroll()}}},h=f,d=(i("4e4b"),i("2877")),p=Object(d["a"])(h,s,a,!1,null,"bcf61750",null);e["default"]=p.exports},"40db":function(t,e,i){},"414a":function(t,e,i){"use strict";i("68ef"),i("40db")},"4e4b":function(t,e,i){"use strict";var n=i("00a8"),s=i.n(n);s.a},"7a82":function(t,e,i){"use strict";var n=i("d282"),s=i("4598"),a=i("68ed"),o=1e3,c=60*o,r=60*c,l=24*r;function m(t){var e=Math.floor(t/l),i=Math.floor(t%l/r),n=Math.floor(t%r/c),s=Math.floor(t%c/o),a=Math.floor(t%o);return{days:e,hours:i,minutes:n,seconds:s,milliseconds:a}}function u(t,e){var i=e.days,n=e.hours,s=e.minutes,o=e.seconds,c=e.milliseconds;return-1===t.indexOf("DD")?n+=24*i:t=t.replace("DD",Object(a["b"])(i)),-1===t.indexOf("HH")?s+=60*n:t=t.replace("HH",Object(a["b"])(n)),-1===t.indexOf("mm")?o+=60*s:t=t.replace("mm",Object(a["b"])(s)),-1===t.indexOf("ss")?c+=1e3*o:t=t.replace("ss",Object(a["b"])(o)),t.replace("SSS",Object(a["b"])(c,3))}function f(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}var h=Object(n["a"])("count-down"),d=h[0],p=h[1];e["a"]=d({props:{millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return m(this.remain)},formattedTime:function(){return u(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:function(){this.reset()}}},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(s["a"])(this.rafId)},reset:function(){this.pause(),this.remain=this.time,this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.rafId=Object(s["c"])(function(){t.setRemain(t.getRemain()),0!==t.remain&&t.microTick()})},macroTick:function(){var t=this;this.rafId=Object(s["c"])(function(){var e=t.getRemain();f(e,t.remain)&&0!==e||t.setRemain(e),0!==t.remain&&t.macroTick()})},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,0===t&&(this.pause(),this.$emit("finish"))}},render:function(t){return t("div",{class:p()},[this.slots("default",this.timeData)||this.formattedTime])}})},"85f5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-cust-item"},[i("div",{staticClass:"fx"},[i("router-link",{staticClass:"fx",attrs:{to:"/zhanye/zhanyeinfo?id="+t.item.uid+"&time="+t.item.view_time_all+"&hit="+t.item.hit_all}},[i("div",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.avatar,expression:"item.avatar"}],attrs:{src:t.item.avatar,alt:""}}),i("span",[t._v(t._s(t.item.nickname&&t.item.nickname.slice(0,10)))])]),i("div",[i("van-icon",{attrs:{name:"arrow",color:"#d1d1d1",size:"13px"}})],1)])],1),i("div",[i("p",[t._v("\n          最近浏览时间："),i("span",[t._v(t._s(t.$fnc.getTimeFormat(t.item.view_last_time)))])]),i("p",[t._v("\n          总浏览次数："),i("span",{staticClass:"item-s1"},[t._v(t._s(t.item.hit_all)+"次")]),t._v("\n          总时长："),i("span",[i("van-count-down",{staticStyle:{display:"inline"},attrs:{"auto-start":!1,time:Number(1e3*t.item.view_time_all)}})],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.item.content.length>0,expression:"item.content.length>0"}]},[i("h3",{staticClass:"fx"},[t._v("跟进记录")]),i("div",{class:{showListHeight:t.item.show}},t._l(t.item.content,function(e,n){return i("p",{key:n,staticClass:"fx"},[i("span",{staticClass:"time-floow",staticStyle:{"line-height":"1.4"}},[t._v(t._s(t.$fnc.mstime(e.follow_time)))]),i("span",{staticClass:"fx_3 ",staticStyle:{"line-height":"1.4"}},[t._v(t._s(e.content))])])}),0),i("p",{directives:[{name:"show",rawName:"v-show",value:t.item.content.length>1,expression:"item.content.length>1"}],staticClass:"tr"},[i("span",{on:{click:t.showList}},[t._v(t._s(t.item.show?"收起":"展开"))]),i("van-icon",{attrs:{name:"arrow-down"}})],1)]),i("div",{staticClass:"fx"},[t.item.tel?i("div",{staticClass:"fx_2 tc",on:{click:function(e){return e.preventDefault(),t.$fnc.tel(t.item.tel)}}},[i("a",[i("van-icon",{attrs:{name:"aim"}}),i("span",[t._v("打电话")])],1)]):i("div",{staticClass:"fx_2 tc"},[i("a",[i("van-icon",{attrs:{name:"aim"}}),i("span",[t._v("暂无电话")])],1)]),i("div",{staticClass:"fx_2 tc"},[i("router-link",{attrs:{to:"/zhanye/addfollowup?id="+t.item.id+"&name="+t.item.nickname+"&title="+t.item.custom_type}},[i("van-icon",{attrs:{name:"todo-list-o"}}),i("span",[t._v("写跟进")])],1)],1)])])},s=[],a=i("9523"),o=i.n(a),c=(i("414a"),i("7a82")),r={components:o()({},c["a"].name,c["a"]),props:{item:{type:Object,default:function(){}},index:{type:Number,default:-1}},methods:{showList:function(){var t=this;this.$nextTick(function(){t.$emit("upshow",{index:t.index,bool:!t.item.show})})}},filters:{isType:function(t){return 1==t?"A类客户":2==t?"B类客户":3==t?"C类客户":"其他"}}},l=r,m=(i("0d51"),i("2877")),u=Object(m["a"])(l,n,s,!1,null,"33d1ff0b",null);e["a"]=u.exports},"980a":function(t,e,i){}}]);