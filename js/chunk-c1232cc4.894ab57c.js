(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1232cc4"],{9976:function(t,a,i){"use strict";var n=i("f017"),e=i.n(n);e.a},cfc9:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"zhanye-admin"},[i("div",{staticClass:"zhanye_admin_content"},[i("data-look",{staticClass:"bgwrite zy-box",attrs:{info:t.info}}),i("echart",{staticClass:"bgwrite zy-box"})],1)])},e=[],s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"admin_part"},[i("div",{staticClass:"z-zhan-box-title",staticStyle:{"padding-left":"0"}},[t._v("\n            数据看板\n        ")]),i("div",{staticClass:"admin_part_title "}),i("div",{staticClass:"admin_data_box"},[i("div",{staticClass:"admin_data_item admin_data_item_no"},[i("p",[t._v("总点击量")]),i("p",[t._v(t._s(t.info.num_1))]),i("p",[t._v("--")])]),i("div",{staticClass:"admin_data_item admin_data_item_no"},[i("p",[t._v("今日点击")]),i("p",[t._v(t._s(t.info.num_2))]),i("p",[t._v("--")])]),i("div",{staticClass:"admin_data_item admin_data_item_no"},[i("p",[t._v("昨日击量")]),i("p",[t._v(t._s(t.info.num_3))]),i("p",[t._v("--")])]),i("div",{staticClass:"admin_data_item admin_data_item_no"},[i("p",[t._v("总咨询量")]),i("p",[t._v(t._s(t.info.num_4))]),i("p",[t._v("--")])]),i("div",{staticClass:"admin_data_item admin_data_item_no"},[i("p",[t._v("今日咨询")]),i("p",[t._v(t._s(t.info.num_5))]),i("p",[t._v("--")])]),i("div",{staticClass:"admin_data_item admin_data_item_no"},[i("p",[t._v("昨日咨询")]),i("p",[t._v(t._s(t.info.num_6))]),i("p",[t._v("--")])])])])])},_=[],o={name:"zhanyeadmin_data",props:{info:{type:Object,default:function(){}}},data:function(){return{time:"",time_show:!1}},methods:{time_btn:function(){this.time_show=!0}}},d=o,c=i("2877"),r=Object(c["a"])(d,s,_,!1,null,"5413b7d9",null),m=r.exports,l=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"admin_part"},[i("div",{staticClass:"z-zhan-box-title",staticStyle:{"padding-left":"0"}},[t._v("\n            流量图表\n        ")]),i("div",{staticClass:"admin_data_box"},[i("div",{staticStyle:{width:"100%",height:"200px"},attrs:{id:"main"}})])])])}],u=i("3eba");i("ef97"),i("007d"),i("627c"),i("d28f");var f={name:"zhanyeadmin_tb",data:function(){return{}},mounted:function(){this.getHitWeek()},methods:{getHitWeek:function(){var t=this;this.$api.getZhanYe.getHitWeek({}).then(function(a){200==a.code&&t.$nextTick(function(){this.drawLine("main",a.result)})})},drawLine:function(t,a){this.charts=u.init(document.getElementById(t)),this.charts.setOption({tooltip:{trigger:"axis"},grid:{left:"6%",right:"8%",bottom:"3%",top:"12%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:a.day.reverse()},yAxis:{type:"value"},series:[{name:"近七日点击",type:"line",stack:"总量",data:a.num.reverse(),color:"#007ffd"}]})}}},p=f,h=Object(c["a"])(p,l,v,!1,null,"1f5f3663",null),b=h.exports,g=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"admin_part"},[t._m(0),i("div",{staticClass:"admin_tg_box"},[t._m(1),i("div",{staticClass:"admin_tg_box_bottom"},[t._m(2),i("div",{staticClass:"admin_tg_box_bottom_right"},[i("div",{staticClass:"admin_tg_box_bottom_right_item"},[i("van-icon",{attrs:{name:"stop",size:"12px",color:"#ff5167"}}),i("p",[t._v("点击数 ")]),i("span",[t._v("0")])],1),i("div",{staticClass:"admin_tg_box_bottom_right_item"},[i("van-icon",{attrs:{name:"stop",size:"12px",color:"#1acc78"}}),i("p",[t._v("转换数 ")]),i("span",[t._v("0")])],1),i("div",{staticClass:"admin_tg_box_bottom_right_item"},[i("van-icon",{attrs:{name:"stop",size:"12px",color:"#ffb804"}}),i("p",[t._v("推手数 ")]),i("span",[t._v("0")])],1)])])])])])},x=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin_part_title "},[i("p",[t._v("上周推广周报")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin_tg_box_top"},[i("p",[t._v("上周总点击量")]),i("p",[t._v("2019-05-27 ~ 2019-06-02")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"admin_tg_box_bottom_left"},[i("p",[t._v("总次数(次)")]),i("p",[t._v("0.00")])])}],C={name:"zhanyeadmin_tg",data:function(){return{}},components:{},methods:{}},y=C,z=Object(c["a"])(y,g,x,!1,null,"b00dc990",null),w=z.exports,$=i("d5fa"),k={name:"ZhanYeadmin",data:function(){return{info:{},list:[],sn:"last_time"}},components:{dataLook:m,echart:b,spread:w,rank:$["a"]},created:function(){this.getDataBoard(),this.getDataBoardList(this.sn)},mounted:function(){},methods:{getSortDate:function(t){this.sn=t,this.getDataBoardList(t)},getDataBoard:function(t){var a=this;this.$api.getZhanYe.getDataBoard({}).then(function(t){200==t.code&&(a.info=t.result)})},getDataBoardList:function(t){var a=this;t=t||"",this.$api.getZhanYe.getDataList({sn:t}).then(function(t){200==t.code&&(a.list=t.result)})}}},E=k,D=(i("9976"),Object(c["a"])(E,n,e,!1,null,"6068ea5a",null));a["default"]=D.exports},f017:function(t,a,i){}}]);