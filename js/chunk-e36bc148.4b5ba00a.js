(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e36bc148"],{4187:function(t,s,e){},"4c9d":function(t,s,e){"use strict";var a=e("4187"),i=e.n(a);i.a},"95d5":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"first"}},[a("mescroll-vue",{ref:"mescroll",staticClass:"scol",attrs:{down:t.mescrollDown,up:t.mescrollUp},on:{init:t.mescrollInit}},[a("div",{staticClass:"game_top"},[a("van-icon",{staticClass:"left_back",staticStyle:{"vertical-align":"middle"},attrs:{name:"arrow-left"},on:{click:t.toBack}}),a("img",{attrs:{src:e("ef5c"),alt:""}})],1),a("div",{staticClass:"game_box"},[a("div",{staticClass:"content_title"},[a("img",{staticClass:"img-circle title_ava",attrs:{src:e("e754"),alt:""}}),a("p",[t._v("赛季:"+t._s(t.rules["begin_day"])+"-"+t._s(t.rules["end_day"]))])]),a("div",{staticClass:"content_body"},[a("p",[t._v("\n        上期赛季总奖池：\n        "),a("span",[t._v(t._s(t.rules["charge_up"]))])]),a("p",[t._v("本赛季已累计奖励额")]),a("div",{staticClass:"content_balance"},[a("p",[t._v(t._s(t.rules["charge_now"]))])])]),a("div",{staticClass:"content_join"},[a("div",{staticClass:"join_left"},[a("img",{staticClass:"img-circle title_ava",attrs:{src:e("e754"),alt:""}}),a("p",[t._v("\n          倒计时:\n          "+t._s(t.day+"天"+t.hr+"小时"+t.min+"分钟"+t.sec+"秒")+"\n        ")])]),a("router-link",{attrs:{replace:"",to:"/punch/punchindex"}},[t._v("进入游戏")])],1)]),a("div",{staticClass:"game_footer"},[a("div",{staticClass:"game_footer_title"},[a("p",[t._v("赛季排行榜")]),a("img",{attrs:{src:e("421b"),alt:""}})]),a("div",{staticClass:"game_footer_box"},[t._l(t.user[0],function(s){return a("div",{key:s.id,staticClass:"game_footer_item"},[a("div",{staticClass:"item item1"},[1==s["champion"]?a("img",{attrs:{src:e("7be2"),alt:""}}):2==s["champion"]?a("img",{attrs:{src:e("be89"),alt:""}}):3==s["champion"]?a("img",{attrs:{src:e("656a"),alt:""}}):a("p",[t._v(t._s(s["champion"]))])]),a("div",{staticClass:"item item2"},[a("img",{staticClass:"img-circle",attrs:{src:s["avatar"],alt:""}})]),a("div",{staticClass:"item item3"},[a("p",[t._v(t._s(s["nickname"]))]),""==s["nickname"]?a("p",[t._v(t._s(s["username"]))]):t._e()]),a("div",{staticClass:"item item5"},[a("p",[t._v("签到次数最多")]),a("p",[t._v(t._s(s["recode"])+"次")])])])}),t._l(t.user[1],function(s){return a("div",{key:s.id,staticClass:"game_footer_item"},[a("div",{staticClass:"item item1"},[1==s["champion"]?a("img",{attrs:{src:e("7be2"),alt:""}}):2==s["champion"]?a("img",{attrs:{src:e("be89"),alt:""}}):3==s["champion"]?a("img",{attrs:{src:e("656a"),alt:""}}):a("p",[t._v(t._s(s["champion"]))])]),a("div",{staticClass:"item item2"},[a("img",{staticClass:"img-circle",attrs:{src:s["avatar"],alt:""}})]),a("div",{staticClass:"item item3"},[a("p",[t._v(t._s(s["nickname"]))]),""==s["nickname"]?a("p",[t._v(t._s(s["username"]))]):t._e()]),a("div",{staticClass:"item item5"},[a("p",[t._v("累计偷懒最多")]),a("p",[t._v(t._s(s["recode"])+t._s(t.rules.early_balance_type_cn))])])])}),t._l(t.user[2],function(s){return a("div",{key:s.id,staticClass:"game_footer_item"},[a("div",{staticClass:"item item1"},[1==s["champion"]?a("img",{attrs:{src:e("7be2"),alt:""}}):2==s["champion"]?a("img",{attrs:{src:e("be89"),alt:""}}):3==s["champion"]?a("img",{attrs:{src:e("656a"),alt:""}}):a("p",[t._v(t._s(s["champion"]))])]),a("div",{staticClass:"item item2"},[a("img",{staticClass:"img-circle",attrs:{src:s["avatar"],alt:""}})]),a("div",{staticClass:"item item3"},[a("p",[t._v(t._s(s["nickname"]))]),""==s["nickname"]?a("p",[t._v(t._s(s["username"]))]):t._e()]),a("div",{staticClass:"item item5"},[a("p",[t._v("累计瓜分最多")]),a("p",[t._v(t._s(s["recode"])+t._s(t.rules.early_balance_type_cn))])])])})],2)])])],1)},i=[],c=e("8d6b"),n={name:"punchseason",components:{MescrollVue:c["a"]},data:function(){return{msg:"First~~",rules:{},user:{},day:0,hr:0,min:0,sec:0,mescroll:null,mescrollDown:{mustToTop:!0},mescrollUp:{callback:this.upCallback,page:{num:0,size:10},htmlNodata:'<p class="upwarp-nodata">-- END --</p>',noMoreSize:1,toTop:{src:e("90c5"),offset:1e3},empty:{warpId:"",icon:"./static/mescroll/mescroll-empty.png",tip:"暂无相关数据~"}}}},beforeRouteEnter:function(t,s,e){e(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,s,e){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),e()},methods:{mescrollInit:function(t){this.mescroll=t},upCallback:function(t,s){var e=this;this.$api.getPunch.getPunchSeason({page:t.num,username:this.username}).then(function(a){if(200==a.code){e.rules=a.result;var i=a.result.ar;1===t.num&&(e.user=[]),e.user=e.user.concat(i),e.$nextTick(function(){s.endSuccess(i.length)})}else s.endErr()})},countdown:function(){var t=this,s=new Date,e=s.getFullYear(),a=s.getMonth()+1;if(a>=12)var i=parseInt(e+1)+"-"+parseInt(1);else if(a>0&&a<12)i=parseInt(e)+"-"+parseInt(a+1)+"-01 00:00:00";var c=new Date(i).getTime(),n=Date.parse(new Date),r=c-n,l=parseInt(r/1e3/60/60/24),o=parseInt(r/1e3/60/60%24),m=parseInt(r/1e3/60%60),u=parseInt(r/1e3%60);this.day=l,this.hr=o>9?o:"0"+o,this.min=m>9?m:"0"+m,this.sec=u>9?u:"0"+u,setTimeout(function(){t.countdown()},1e3)}},mounted:function(){this.countdown()}},r=n,l=(e("4c9d"),e("2877")),o=Object(l["a"])(r,a,i,!1,null,"bc3b9260",null);s["default"]=o.exports},ef5c:function(t,s,e){t.exports=e.p+"img/bj2-zaoqi.dab11233.png"}}]);