(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c92e8176"],{1369:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container\n    integral_bg"},[e("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp,id:"integral"},on:{init:t.mescrollInit}},[e("div",{staticClass:"integral_top"},[e("van-icon",{attrs:{name:"arrow-left",size:"24px",color:"#000000"}}),e("div",{staticClass:"integral_top_middle"},[e("van-search",{staticStyle:{width:"100%",height:"30px","line-height":"20px",padding:"0","align-items":"center"},attrs:{shape:"round",placeholder:"粘贴宝贝标题，先领劵再购物"},on:{search:function(o){return t.search_shop()}},model:{value:t.search_title,callback:function(o){t.search_title=o},expression:"search_title"}})],1)],1),e("div",{staticClass:"integral_body"},t._l(t.dataList,function(o,n){return e("div",{key:n,staticClass:"integral_box"},[e("router-link",{attrs:{to:"/shop/shopdetails?tid="+t.appusers.uid+"&id="+o.id}},[e("integralItem",{attrs:{shop:o}})],1)],1)}),0)])],1)},s=[],l=e("8d6b"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"integral_box_item"},[e("div",{staticClass:"integral_box_item_top"},[e("img",{attrs:{src:t.$fnc.getImgUrl(t.shop.piclink),alt:""}})]),e("div",{staticClass:"integral_box_item_title"},[e("p",[t._v(t._s(t.shop.title)+"\n            ")]),e("p",[t._v("积分："),e("span",[t._v(t._s(t.shop.score_rob))])])])])])},r=[],a={name:"component_name",data:function(){return{}},props:{shop:{type:Object}},components:{},methods:{},created:function(){}},p=a,c=(e("6266"),e("2877")),u=Object(c["a"])(p,i,r,!1,null,"4a69997a",null),d=u.exports,h={name:"integral_shop",data:function(){return{is_search:!1,search_title:"",dataList:[],mescroll:null,mescrollDown:{},mescrollUp:{loadFull:{},callback:this.upCallback,page:{num:0,size:10},htmlNodata:'<p class="upwarp-nodata">-- END --</p>',noMoreSize:1,toTop:{warpId:"integral",src:e("90c5"),offset:1e3},empty:{warpId:"integral",icon:e("b45c"),tip:"暂无相关数据~"}}}},components:{MescrollVue:l["a"],integralItem:d},created:function(){},methods:{search_shop:function(){this.is_search=!0,this.dataList=[],this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},upCallback:function(t,o){var e=this,n={};n.page=t.num,1==this.is_search&&(n.title=this.search_title),this.$api.getShop.get_integralshop(n).then(function(n){if(200==n.code){var s=n.result;1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(s),e.$nextTick(function(){o.endSuccess(s.length)})}else o.endErr()})}},beforeRouteEnter:function(t,o,e){e(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,o,e){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),e()}},m=h,f=(e("2735"),Object(c["a"])(m,n,s,!1,null,"79bd93fa",null));o["default"]=f.exports},2735:function(t,o,e){"use strict";var n=e("f21e"),s=e.n(n);s.a},6266:function(t,o,e){"use strict";var n=e("dae8"),s=e.n(n);s.a},"8d6b":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"mescroll",staticClass:"mescroll"},[e("div",[t._t("default")],2)])},s=[],l=e("f868"),i=e.n(l),r=(e("f2fd"),{name:"MeScrollVue",data:function(){return{mescroll:null,lastScrollTop:0,lastBounce:null}},props:{up:Object,down:Object},mounted:function(){this.mescroll=new i.a(this.$refs.mescroll,{up:this.up,down:this.down}),this.$emit("init",this.mescroll)},methods:{beforeRouteEnter:function(){var t=this;this.mescroll&&(this.lastScrollTop&&(this.mescroll.setScrollTop(this.lastScrollTop),setTimeout(function(){t.mescroll.setTopBtnFadeDuration(0)},16)),null!=this.lastBounce&&this.mescroll.setBounce(this.lastBounce))},beforeRouteLeave:function(){this.mescroll&&(this.lastScrollTop=this.mescroll.getScrollTop(),this.mescroll.hideTopBtn(0),this.lastBounce=this.mescroll.optUp.isBounce,this.mescroll.setBounce(!0))}}}),a=r,p=e("2877"),c=Object(p["a"])(a,n,s,!1,null,null,null);o["a"]=c.exports},"90c5":function(t,o){t.exports="data:image/png;base64,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"},b45c:function(t,o,e){t.exports=e.p+"img/empty.ceebc9d7.png"},dae8:function(t,o,e){},f21e:function(t,o,e){},f2fd:function(t,o,e){},f868:function(t,o,e){var n,s;
/*!
 * version 1.4.1 MIT
 * 2019-2-1 wenju
 * http://www.mescroll.com
 */
/*!
 * version 1.4.1 MIT
 * 2019-2-1 wenju
 * http://www.mescroll.com
 */
(function(l,i){n=i,s="function"===typeof n?n.call(o,e,o,t):n,void 0===s||(t.exports=s)})(0,function(){var t=function(t,o){var e=this;if(e.version="1.4.0",e.isScrollBody=!t||"body"===t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var n=navigator.userAgent,s=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),l="undefined"===typeof window.orientation,i=n.indexOf("Android")>-1||n.indexOf("Adr")>-1;e.os={ios:s,pc:l,android:i},e.isDownScrolling=!1,e.isUpScrolling=!1;var r=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&r&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}};return t.prototype.extendDownScroll=function(o){t.extend(o,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",mustToTop:!1,warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip"></p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textInOffset),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textOutOffset)},onMoving:function(t,o,e){if(t.downProgressDom){var n=360*o;t.downProgressDom.style.webkitTransform="rotate("+n+"deg)",t.downProgressDom.style.transform="rotate("+n+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textLoading),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},afterLoading:function(t){return 0},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(o){var e=this.os.pc;t.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",fadeDuration:.5,duration:300,supportTap:!1,btnClick:null},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:e,barClass:"mescroll-bar"},lazyLoad:{use:!1,attr:"imgurl",showClass:"mescroll-lazy-in",delay:500,offset:200}})},t.extend=function(o,e){if(!o)return e;for(var n in e)null==o[n]?o[n]=e[n]:"object"===typeof o[n]&&t.extend(o[n],e[n]);return o},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&t.preventDefault(o),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1;var e=t.getScrollTop();t.isKeepTop=0===e,t.os.pc&&e<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent,{passive:!1}),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){if(t.startPoint){var e=t.getScrollTop();e>0&&(t.isKeepTop=!1);var n=t.getPoint(o),s=n.y-t.startPoint.y;if(s>0){if(e<=0&&(t.preventDefault(o),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){if(t.optDown.mustToTop&&!t.isKeepTop)return;var l=Math.abs(t.lastPoint.x-n.x),i=Math.abs(t.lastPoint.y-n.y),r=Math.sqrt(l*l+i*i);if(0!==r){var a=Math.asin(i/r)/Math.PI*180;if(a<t.optDown.minAngle)return}if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var p=n.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=p*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=p>0?p*t.optDown.outOffsetRate:p),t.downwarp.style.height=t.downHight+"px";var c=t.downHight/t.optDown.offset;t.optDown.onMoving(t,c,t.downHight)}}else if(s<0){var u=t.getScrollHeight(),d=t.getClientHeight(),h=u-d-e;!t.optUp.isBounce&&h<=0&&t.preventDefault(o),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(d+t.optUp.offset>=u||h<=0)&&t.triggerUpScroll()}t.lastPoint=n}},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent,{passive:!1}),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.isSetScrollAuto&&(t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.isSetScrollAuto=!1),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout(function(){t.optDown.inited(t,t.downwarp)},0)}},t.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){var t=this,o=function(){t.downHight=0,t.downwarp.style.height=0,t.isDownScrolling=!1,t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},e=t.optDown.afterLoading(t);"number"===typeof e&&e>0?setTimeout(o,e):o()},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),!1!==o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.lazyStartTime=(new Date).getTime(),o.lazyTag="mescroll-lazying",o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;if(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth)&&!o.optUp.isLock&&o.optUp.hasNext){var n=o.getScrollHeight()-o.getClientHeight()-t;n<=o.optUp.offset&&e&&o.triggerUpScroll()}var s=o.optUp.toTop;if((s.src||s.html)&&(t>=s.offset?o.showTopBtn():o.hideTopBtn()),o.optUp.lazyLoad.use){var l=(new Date).getTime();o.lazyTimer&&clearTimeout(o.lazyTimer),l-o.lazyStartTime>=o.optUp.lazyLoad.delay?(o.lazyStartTime=l,o.lazyLoad(0)):o.lazyTimer=o.lazyLoad()}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout(function(){o.optUp.inited(o,o.upwarp)},0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(!1===t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove,{passive:!1})):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){var o=this,e=t.target,n=!0;while(e!==document.body&&e!==document){var s=e.classList;if(s){if(s.contains("mescroll")||s.contains("mescroll-touch")){n=!1;break}if(s.contains("mescroll-touch-x")||s.contains("mescroll-touch-y")){var l=t.touches?t.touches[0].pageX:t.clientX,i=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=l),o.preWinY||(o.preWinY=i);var r=Math.abs(o.preWinX-l),a=Math.abs(o.preWinY-i),p=Math.sqrt(r*r+a*a);if(o.preWinX=l,o.preWinY=i,0!==p){var c=Math.asin(a/p)/Math.PI*180;if(c<=45&&s.contains("mescroll-touch-x")||c>45&&s.contains("mescroll-touch-y")){n=!1;break}}}}e=e.parentNode}n&&t.cancelable&&!t.defaultPrevented&&"function"===typeof t.preventDefault&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(t){t?this.upwarp.style.display="none":this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var o=this.upwarp.getElementsByClassName("upwarp-progress")[0];o&&o.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t,o){null!=t&&(t?this.showNoMore():this.hideUpScroll(o)),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},t.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},t.prototype.endBySize=function(t,o,e){var n;if(this.optUp.use&&null!=o){var s=(this.optUp.page.num-1)*this.optUp.page.size+t;n=s<o}this.endSuccess(t,n,e)},t.prototype.endSuccess=function(t,o,e){var n=this;if(n.isDownScrolling&&n.endDownScroll(),n.optUp.use){var s;if(null!=t){var l=n.optUp.page.num,i=n.optUp.page.size;if(1===l&&(n.clearDataList(),e&&(n.optUp.page.time=e)),t<i||!1===o)if(n.optUp.hasNext=!1,0===t&&1===l)s=!1,n.showEmpty();else{var r=(l-1)*i+t;s=!(r<n.optUp.noMoreSize),n.removeEmpty()}else s=!1,n.optUp.hasNext=!0,n.removeEmpty()}var a=!n.optUp.hasNext;n.endUpScroll(s,a),n.loadFull(),n.optUp.lazyLoad.use&&n.lazyLoad(16)}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.optUp.callback&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout(function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()},t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var n=t.getDomById(e);if(n){t.removeEmpty();var s="";if(o.icon&&(s+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(s+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(s+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=s,n.appendChild(t.emptyDom),o.btnClick){var l=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?l.addEventListener("tap",function(e){e.stopPropagation(),t.preventDefault(e),o.btnClick()}):l.onclick=function(){o.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(t){if(!this.topBtnShow){this.topBtnShow=!0;var o,e=this,n=e.optUp.toTop;if(null==e.toTopBtn)n.html?(e.toTopBtn=document.createElement("div"),e.toTopBtn.innerHTML=n.html):(e.toTopBtn=document.createElement("img"),e.toTopBtn.src=n.src),e.toTopBtn.className=n.warpClass,n.supportTap?e.toTopBtn.addEventListener("tap",function(t){t.stopPropagation(),e.preventDefault(t);var o=n.btnClick&&n.btnClick();!0!==o&&e.scrollTo(0,e.optUp.toTop.duration)}):e.toTopBtn.onclick=function(){var t=n.btnClick&&n.btnClick();!0!==t&&e.scrollTo(0,e.optUp.toTop.duration)},n.warpId&&(o=e.getDomById(n.warpId)),o||(o=document.body),o.appendChild(e.toTopBtn);e.toTopBtn.classList.remove(n.hideClass),e.toTopBtn.classList.add(n.showClass),e.setTopBtnFadeDuration(t)}},t.prototype.hideTopBtn=function(t){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass),this.setTopBtnFadeDuration(t))},t.prototype.setTopBtnFadeDuration=function(t){if(this.toTopBtn){var o=(null!=t?t:this.optUp.toTop.fadeDuration)+"s";this.toTopBtn.style.animationDuration=o,this.toTopBtn.style.webkitAnimationDuration=o}},t.prototype.scrollTo=function(t,o){var e=this,n=e.getScrollTop(),s=t;if(s>0){var l=e.getScrollHeight()-e.getClientHeight();s>l&&(s=l)}else s=0;e.isScrollTo=!0,e.scrollDom.style.webkitOverflowScrolling="auto",e.getStep(n,s,function(t){e.setScrollTop(t),t===s&&(e.scrollDom.style.webkitOverflowScrolling="touch",e.isScrollTo=!1)},o)},t.prototype.getStep=function(t,o,e,n,s){var l=o-t;if(0!==n&&0!==l){n=n||300,s=s||30;var i=n/s,r=l/i,a=0,p=window.setInterval(function(){a<i-1?(t+=r,e&&e(t,p),a++):(e&&e(o,p),window.clearInterval(p))},s)}else e&&e(o)},t.prototype.lazyLoad=function(t){var o=this,e=null!=t?t:o.optUp.lazyLoad.delay,n=setTimeout(function(){for(var t=o.scrollDom.querySelectorAll("["+o.optUp.lazyLoad.attr+"]"),e=t.length,n=0;n<e;n++){var s=t[n];if("true"!==s.getAttribute(o.lazyTag)&&o.isInSee(s,o.optUp.lazyLoad.offset)){var l=s.getAttribute(o.optUp.lazyLoad.attr),i=new Image;i.onload=function(){var t=this.src,e=this.dom,n=o.optUp.lazyLoad.showClass;n&&e.classList.add(n),"IMG"===e.tagName?e.src=t:e.style.backgroundImage="url("+t+")",e.removeAttribute(o.optUp.lazyLoad.attr),e.removeAttribute(o.lazyTag)},i.onerror=function(){this.dom.removeAttribute(o.lazyTag)},i.onabort=function(){this.dom.removeAttribute(o.lazyTag)},i.src=l,s.setAttribute(o.lazyTag,"true"),i.dom=s}}},e);return n},t.prototype.isInSee=function(t,o){o=o||0;var e=this.getOffsetTop(t),n=this.getScrollTop()-o,s=e+t.offsetHeight,l=n+o+this.getClientHeight()+o;return e<l&&e>=n||s<=l&&s>n},t.prototype.getOffsetTop=function(t){var o=t.offsetTop,e=t.offsetParent;while(null!=e&&e!==this.scrollDom)o+=e.offsetTop+e.clientTop,e=e.offsetParent;return o},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){"number"===typeof t&&(this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t)},t.prototype.getDomById=function(t){var o;return t&&("string"===typeof t?o=document.getElementById(t):t.nodeType&&(o=t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},t.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t})}}]);