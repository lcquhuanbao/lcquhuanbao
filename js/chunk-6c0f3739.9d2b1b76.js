(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c0f3739"],{"0359":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"first"}},[a("mescroll-vue",{ref:"mescroll",staticClass:"scol",attrs:{down:t.mescrollDown,up:t.mescrollUp},on:{init:t.mescrollInit}},[a("div",{staticClass:"game_top"},[a("van-icon",{staticClass:"left_back",staticStyle:{"vertical-align":"middle"},attrs:{name:"arrow-left"},on:{click:t.toBack}}),a("img",{attrs:{src:s("5cd4"),alt:""}})],1),a("div",{staticClass:"game_box"},[a("div",{staticClass:"content_title"},[a("img",{staticClass:"img-circle title_ava",attrs:{src:s("e754"),alt:""}}),a("p",[t._v("赛季:"+t._s(t.rules["begin_day"])+"-"+t._s(t.rules["end_day"]))])]),a("div",{staticClass:"content_body"},[a("p",[t._v("\n        上期赛季总奖池：\n        "),a("span",[t._v(t._s(t.rules["charge_up"]))])]),a("p",[t._v("本赛季已累计奖励额")]),a("div",{staticClass:"content_balance"},[a("p",[t._v(t._s(t.rules["charge_now"]))])])]),a("div",{staticClass:"content_join"},[a("div",{staticClass:"join_left"},[a("img",{staticClass:"img-circle title_ava",attrs:{src:s("e754"),alt:""}}),a("p",[t._v("\n          倒计时:\n          "+t._s(t.day+"天"+t.hr+"小时"+t.min+"分钟"+t.sec+"秒")+"\n        ")])]),a("router-link",{attrs:{replace:"",to:"/ccl/ccl"}},[t._v("进入游戏")])],1)]),a("div",{staticClass:"game_footer"},[a("div",{staticClass:"game_footer_title"},[a("p",[t._v("赛季排行榜")]),a("img",{attrs:{src:s("421b"),alt:""}})]),a("div",{staticClass:"game_footer_box"},t._l(t.user,function(e){return a("div",{key:e.id,staticClass:"game_footer_item"},[a("div",{staticClass:"item item1"},[1==e["ranking"]?a("img",{attrs:{src:s("7be2"),alt:""}}):2==e["ranking"]?a("img",{attrs:{src:s("be89"),alt:""}}):3==e["ranking"]?a("img",{attrs:{src:s("656a"),alt:""}}):a("p",[t._v(t._s(e["ranking"]))])]),a("div",{staticClass:"item item2"},[a("img",{staticClass:"img-circle",attrs:{src:e["avatar"],alt:""}})]),a("div",{staticClass:"item item3"},[a("p",[t._v(t._s(e["nickname"]))]),""==e["nickname"]?a("p",[t._v(t._s(e["username"]))]):t._e()]),a("div",{staticClass:"item item4"},[a("p",[t._v("胜率")]),a("p",[t._v(t._s(e["win_percent"])+"%")])]),a("div",{staticClass:"item item5"},[a("p",[t._v("胜"+t._s(e["win_num"])+"场")])])])}),0)])])],1)},i=[],n=s("8d6b"),c={name:"cclseason",components:{MescrollVue:n["a"]},data:function(){return{msg:"First~~",rules:{},user:{},day:0,hr:0,min:0,sec:0,mescroll:null,mescrollDown:{mustToTop:!0},mescrollUp:{callback:this.upCallback,page:{num:0,size:10},htmlNodata:'<p class="upwarp-nodata">-- END --</p>',noMoreSize:1,toTop:{src:s("90c5"),offset:1e3},empty:{warpId:"",icon:"./static/mescroll/mescroll-empty.png",tip:"暂无相关数据~"}}}},beforeRouteEnter:function(t,e,s){s(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,e,s){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),s()},methods:{mescrollInit:function(t){this.mescroll=t},upCallback:function(t,e){var s=this;this.$api.getCoin.getCclSeasonList({page:t.num,username:this.username}).then(function(a){if(200==a.code){s.rules=a.result;var i=a.result.ar;1===t.num&&(s.user=[]),s.user=s.user.concat(i),s.$nextTick(function(){e.endSuccess(i.length)})}else e.endErr()})},countdown:function(){var t=this,e=new Date,s=e.getFullYear(),a=e.getMonth()+1;if(a>=12)var i=parseInt(s+1)+"-"+parseInt(1);else if(a>0&&a<12)i=parseInt(s)+"-"+parseInt(a+1)+"-01 00:00:00";var n=new Date(i).getTime(),c=Date.parse(new Date),r=n-c,l=parseInt(r/1e3/60/60/24),o=parseInt(r/1e3/60/60%24),m=parseInt(r/1e3/60%60),u=parseInt(r/1e3%60);this.day=l,this.hr=o>9?o:"0"+o,this.min=m>9?m:"0"+m,this.sec=u>9?u:"0"+u,setTimeout(function(){t.countdown()},1e3)}},mounted:function(){this.countdown()}},r=c,l=(s("0458"),s("2877")),o=Object(l["a"])(r,a,i,!1,null,"2296113f",null);e["default"]=o.exports},"0458":function(t,e,s){"use strict";var a=s("6331"),i=s.n(a);i.a},"5cd4":function(t,e,s){t.exports=s.p+"img/bj3-caicaile.71e515c4.png"},6331:function(t,e,s){}}]);