(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d177d1a2"],{1946:function(t,o,e){t.exports=e.p+"img/stork.fd4dae52.png"},6985:function(t,o,e){"use strict";var n=e("edcb"),s=e.n(n);s.a},"80e9":function(t,o,e){"use strict";var n=e("dddf"),s=e.n(n);s.a},"8d6b":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"mescroll",staticClass:"mescroll"},[e("div",[t._t("default")],2)])},s=[],i=e("f868"),l=e.n(i),r=(e("f2fd"),{name:"MeScrollVue",data:function(){return{mescroll:null,lastScrollTop:0,lastBounce:null}},props:{up:Object,down:Object},mounted:function(){this.mescroll=new l.a(this.$refs.mescroll,{up:this.up,down:this.down}),this.$emit("init",this.mescroll)},methods:{beforeRouteEnter:function(){var t=this;this.mescroll&&(this.lastScrollTop&&(this.mescroll.setScrollTop(this.lastScrollTop),setTimeout(function(){t.mescroll.setTopBtnFadeDuration(0)},16)),null!=this.lastBounce&&this.mescroll.setBounce(this.lastBounce))},beforeRouteLeave:function(){this.mescroll&&(this.lastScrollTop=this.mescroll.getScrollTop(),this.mescroll.hideTopBtn(0),this.lastBounce=this.mescroll.optUp.isBounce,this.mescroll.setBounce(!0))}}}),p=r,a=e("2877"),c=Object(a["a"])(p,n,s,!1,null,null,null);o["a"]=c.exports},"90c5":function(t,o){t.exports="data:image/png;base64,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"},"95b2":function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAUCAMAAADm3a4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMjFmMzkzOS02MGRmLTIwNDUtYjdmYi0zMzQzMDhiNTY3MmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE1NjAwMzk5MEYwMTFFOTkxNDU4NUFGNjE3Q0Y1NTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE1NjAwMzg5MEYwMTFFOTkxNDU4NUFGNjE3Q0Y1NTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzM5N2JlNTYtMjRmYS1lZTQxLTk1YWEtMWQxM2QyMDFmZDM2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzgzNzMwNGItNmI0OS0wYjQzLWFiMzEtNjQ2NjFhYWQxM2I5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5zotkAAAAwBQTFRF9atO/4UA/2YA9mEA8YMu8/r+8fn/+/nr8vf99Pb58/b58ff68/X79/Tx8fP59fHu9u/p9tW3/10A/2oA/2QA8ff/8vf7+ffz8PX99/Tv8fT3/58A9okI9qJh8vLz8fPy8vL08fLz8vLx/20A8/Hy/2gA8vLw/2wB8f///2gC/2gB8/Pz8fP28fLx8vT28fLy8fz/9PTz8/Py8vP28PP68fT18fHx8PP1/2kA9fXz/4gA8fr/8/P09d7D8fL08fP1/1gA/2wA+vTj/4oA8/X4/2IA9PPz9/Pv9aFB9+C88vT198+J/4kB/ZwA+2ID9OHI8oIy8fX48dfB8fT6/WoA8vX48beK+Obc8vPv/Pjo8/Px84cJ9owP8vP088yv9clz+ObP+fTm9daq8f7/+YkK9bdt8vHw6bVv9MSe8vPy+IAA8+LG9sVv+/ro8M+4/mkA97pT87uP+ZNN8P//8fT59uHK9fT18vT08vX09cZl9PLx9IQE/ogA/4kA8oIw8PT68Yw+/mkC/2kC9NC29fDp/34A9vDn8ff97/X79503+HQV/24A8d/S9oAl+IUv+p0A8/f+89ey+LhK9O3k872S9PHy+GwA9F0A8PPy8vP69KAR47B98Hok7Lt599+w8vP18t7P8/P19s2p9MF5+cyA8biL9J4K9fX39fb29uTD/GQA8uzl9u7h9+/q+fTs87dk9Ofd9+rc96AH/6AA9tnC9dqu99yp9tyt/YUA9sqW/4cA/4YC8PP0+c2a8fP0/pcA9c6d9eHG9cBp8v3//J8C854683Qe828J8syz8bFY/mgB9tm99tid+N28+oYF/pkA9YQx9PTy9fPw98+v+a8u9rEz+qpu8vT48vT5/4IA8Z023Zxg+5BI+OXL9mUB78SI8PX48/Lz8fT48cOc9PT1+qNk9fT082cI9fX1+2QA8vX13Jhb9sNk8rl0/GAA8vX39PPy9fPz9PLw9IsT8IME9Jcs9Joq+b5e4ql39Men8YEw+2sD8Pv/8PX68fP78vLyGzqqHQAAAitJREFUeNpi+I8MVP6TBBjI1KzyX1FRnoGAIjncmu2gmuXe/ynW0Ehm09NGV7QQrBtD2AxEqIE163MJLHp6p+ia4CUufRQ1inwSEiY6qPoU5GCGKYE0K67YuDRglYPQ74bHa12QdSu6rXNySuS1UUTRPN/Y2E4OHmCBhlO6hEQ0HS1ce5tdypHUvRKYODf9fulHL2TNUz9YWl40gms+3HPhJdOpRnXlkGmy4WIIZXppB77JVMcwHKzIRITbvmDP+MptVcb/5RTAmjVO+DFpqZ5S73ZUrdvCitDMYeuRxWi1Q+btmkCEYOjKglnLrm5vB4ayHFjzTwctLS1NdWVl1TmCSJqt96Yw7qp1ZjyaIIqIugnem6Q3nz9kAPI9WHPcOybVJpBmYZbTKJrP3dzt48x46y5Cc+yEJf3S0vu/G8D8bLCgz1VEFajZIl92gxiysztbGa0Ya1In30AI8mRPOuJ7ZSsbzM/c/IXHmJmYhIXvsVxebopQJ9Wy82v0l88MZ20UEIL2n+blvDnTxgf0MiRtc64O+/V8OvPxhowIbqRImfGAP2n9ycX+pua6CEElxZk8LvU6SoiM8WJt3o/Xt2cHuT9BTU1uvO6Sks+i1FAEjQwNjZTU/quoQDUrlomzR+ayi+uh5QM5neslj+z/qymhisrJyyPZ/F93j8m/jr/m8rpm2LKQkhqagLw8Rn5+SEpBIA+NZ2Coy0MoonTJo5YkQE+Acy2pmgECDAAL1Jo6TBWHoAAAAABJRU5ErkJggg=="},adc3:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAUCAMAAADm3a4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMjFmMzkzOS02MGRmLTIwNDUtYjdmYi0zMzQzMDhiNTY3MmYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE1NjAwMzE5MEYwMTFFOTkxNDU4NUFGNjE3Q0Y1NTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE1NjAwMzA5MEYwMTFFOTkxNDU4NUFGNjE3Q0Y1NTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzM5N2JlNTYtMjRmYS1lZTQxLTk1YWEtMWQxM2QyMDFmZDM2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzgzNzMwNGItNmI0OS0wYjQzLWFiMzEt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"},dddf:function(t,o,e){},ebc1:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"shop_list_con "},[e("waterfall",{staticStyle:{padding:"9.5px",margin:"0 auto"},attrs:{col:2,width:t.itemWidth,gutterWidth:10,gutterHeight:20,data:t.top_shoplist}},[t._l(t.top_shoplist,function(o,n){return e("div",{key:n,staticClass:"grid-item"},[e("router-link",{attrs:{to:"/shop/shopdetails?tid="+t.appusers.uid+"&id="+o.id||!1}},[e("shopitem",{attrs:{item:o}})],1)],1)})],2)],1)},s=[],i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"shop_item_con"},[n("div",{staticClass:"dddd1"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.piclink,expression:"item.piclink"}],attrs:{src:t.item.piclink,alt:""}}),t.item.stock<=0?n("img",{staticClass:"stork_0",attrs:{src:e("1946"),alt:""}}):t._e()]),n("div",{staticClass:"shop_info"},[n("p",{staticClass:"shop_title"},[n("span",[t._v(t._s(t.item.title&&t.item.title.length>=20?t.item.title.slice(0,20)+"...":t.item.title))])]),t.item.label?n("p",{staticClass:"shop_title2",domProps:{innerHTML:t._s(t.item.label)}}):t._e(),n("p",{staticClass:"fx shop_title3"},[n("span",[n("small",[t._v("￥")]),t._v(t._s(t.item.price))]),n("span",[t._v(t._s(t.item.sale||0)+"人付款")])])])])},l=[],r={props:{item:{type:Object,default:{}}}},p=r,a=(e("80e9"),e("2877")),c=Object(a["a"])(p,i,l,!1,null,"a8c18430",null),u=c.exports,d={components:{shopitem:u},props:{top_shoplist:{type:Array,default:[]}},data:function(){return{}},computed:{itemWidth:function(){return document.documentElement.clientWidth/375*172},gutterWidth:function(){}},created:function(){}},m=d,h=(e("6985"),Object(a["a"])(m,n,s,!1,null,"1e2b5bf8",null));o["a"]=h.exports},edcb:function(t,o,e){},f2fd:function(t,o,e){},f868:function(t,o,e){var n,s;
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
(function(i,l){n=l,s="function"===typeof n?n.call(o,e,o,t):n,void 0===s||(t.exports=s)})(0,function(){var t=function(t,o){var e=this;if(e.version="1.4.0",e.isScrollBody=!t||"body"===t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var n=navigator.userAgent,s=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i="undefined"===typeof window.orientation,l=n.indexOf("Android")>-1||n.indexOf("Adr")>-1;e.os={ios:s,pc:i,android:l},e.isDownScrolling=!1,e.isUpScrolling=!1;var r=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&r&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}};return t.prototype.extendDownScroll=function(o){t.extend(o,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",mustToTop:!1,warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip"></p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textInOffset),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textOutOffset)},onMoving:function(t,o,e){if(t.downProgressDom){var n=360*o;t.downProgressDom.style.webkitTransform="rotate("+n+"deg)",t.downProgressDom.style.transform="rotate("+n+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textLoading),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},afterLoading:function(t){return 0},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(o){var e=this.os.pc;t.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",fadeDuration:.5,duration:300,supportTap:!1,btnClick:null},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:e,barClass:"mescroll-bar"},lazyLoad:{use:!1,attr:"imgurl",showClass:"mescroll-lazy-in",delay:500,offset:200}})},t.extend=function(o,e){if(!o)return e;for(var n in e)null==o[n]?o[n]=e[n]:"object"===typeof o[n]&&t.extend(o[n],e[n]);return o},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&t.preventDefault(o),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1;var e=t.getScrollTop();t.isKeepTop=0===e,t.os.pc&&e<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent,{passive:!1}),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){if(t.startPoint){var e=t.getScrollTop();e>0&&(t.isKeepTop=!1);var n=t.getPoint(o),s=n.y-t.startPoint.y;if(s>0){if(e<=0&&(t.preventDefault(o),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){if(t.optDown.mustToTop&&!t.isKeepTop)return;var i=Math.abs(t.lastPoint.x-n.x),l=Math.abs(t.lastPoint.y-n.y),r=Math.sqrt(i*i+l*l);if(0!==r){var p=Math.asin(l/r)/Math.PI*180;if(p<t.optDown.minAngle)return}if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var a=n.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=a*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=a>0?a*t.optDown.outOffsetRate:a),t.downwarp.style.height=t.downHight+"px";var c=t.downHight/t.optDown.offset;t.optDown.onMoving(t,c,t.downHight)}}else if(s<0){var u=t.getScrollHeight(),d=t.getClientHeight(),m=u-d-e;!t.optUp.isBounce&&m<=0&&t.preventDefault(o),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(d+t.optUp.offset>=u||m<=0)&&t.triggerUpScroll()}t.lastPoint=n}},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent,{passive:!1}),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.isSetScrollAuto&&(t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.isSetScrollAuto=!1),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout(function(){t.optDown.inited(t,t.downwarp)},0)}},t.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){var t=this,o=function(){t.downHight=0,t.downwarp.style.height=0,t.isDownScrolling=!1,t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},e=t.optDown.afterLoading(t);"number"===typeof e&&e>0?setTimeout(o,e):o()},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),!1!==o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.lazyStartTime=(new Date).getTime(),o.lazyTag="mescroll-lazying",o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;if(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth)&&!o.optUp.isLock&&o.optUp.hasNext){var n=o.getScrollHeight()-o.getClientHeight()-t;n<=o.optUp.offset&&e&&o.triggerUpScroll()}var s=o.optUp.toTop;if((s.src||s.html)&&(t>=s.offset?o.showTopBtn():o.hideTopBtn()),o.optUp.lazyLoad.use){var i=(new Date).getTime();o.lazyTimer&&clearTimeout(o.lazyTimer),i-o.lazyStartTime>=o.optUp.lazyLoad.delay?(o.lazyStartTime=i,o.lazyLoad(0)):o.lazyTimer=o.lazyLoad()}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout(function(){o.optUp.inited(o,o.upwarp)},0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(!1===t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove,{passive:!1})):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){var o=this,e=t.target,n=!0;while(e!==document.body&&e!==document){var s=e.classList;if(s){if(s.contains("mescroll")||s.contains("mescroll-touch")){n=!1;break}if(s.contains("mescroll-touch-x")||s.contains("mescroll-touch-y")){var i=t.touches?t.touches[0].pageX:t.clientX,l=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=i),o.preWinY||(o.preWinY=l);var r=Math.abs(o.preWinX-i),p=Math.abs(o.preWinY-l),a=Math.sqrt(r*r+p*p);if(o.preWinX=i,o.preWinY=l,0!==a){var c=Math.asin(p/a)/Math.PI*180;if(c<=45&&s.contains("mescroll-touch-x")||c>45&&s.contains("mescroll-touch-y")){n=!1;break}}}}e=e.parentNode}n&&t.cancelable&&!t.defaultPrevented&&"function"===typeof t.preventDefault&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(t){t?this.upwarp.style.display="none":this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var o=this.upwarp.getElementsByClassName("upwarp-progress")[0];o&&o.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t,o){null!=t&&(t?this.showNoMore():this.hideUpScroll(o)),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},t.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},t.prototype.endBySize=function(t,o,e){var n;if(this.optUp.use&&null!=o){var s=(this.optUp.page.num-1)*this.optUp.page.size+t;n=s<o}this.endSuccess(t,n,e)},t.prototype.endSuccess=function(t,o,e){var n=this;if(n.isDownScrolling&&n.endDownScroll(),n.optUp.use){var s;if(null!=t){var i=n.optUp.page.num,l=n.optUp.page.size;if(1===i&&(n.clearDataList(),e&&(n.optUp.page.time=e)),t<l||!1===o)if(n.optUp.hasNext=!1,0===t&&1===i)s=!1,n.showEmpty();else{var r=(i-1)*l+t;s=!(r<n.optUp.noMoreSize),n.removeEmpty()}else s=!1,n.optUp.hasNext=!0,n.removeEmpty()}var p=!n.optUp.hasNext;n.endUpScroll(s,p),n.loadFull(),n.optUp.lazyLoad.use&&n.lazyLoad(16)}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.optUp.callback&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout(function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()},t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var n=t.getDomById(e);if(n){t.removeEmpty();var s="";if(o.icon&&(s+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(s+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(s+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=s,n.appendChild(t.emptyDom),o.btnClick){var i=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?i.addEventListener("tap",function(e){e.stopPropagation(),t.preventDefault(e),o.btnClick()}):i.onclick=function(){o.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(t){if(!this.topBtnShow){this.topBtnShow=!0;var o,e=this,n=e.optUp.toTop;if(null==e.toTopBtn)n.html?(e.toTopBtn=document.createElement("div"),e.toTopBtn.innerHTML=n.html):(e.toTopBtn=document.createElement("img"),e.toTopBtn.src=n.src),e.toTopBtn.className=n.warpClass,n.supportTap?e.toTopBtn.addEventListener("tap",function(t){t.stopPropagation(),e.preventDefault(t);var o=n.btnClick&&n.btnClick();!0!==o&&e.scrollTo(0,e.optUp.toTop.duration)}):e.toTopBtn.onclick=function(){var t=n.btnClick&&n.btnClick();!0!==t&&e.scrollTo(0,e.optUp.toTop.duration)},n.warpId&&(o=e.getDomById(n.warpId)),o||(o=document.body),o.appendChild(e.toTopBtn);e.toTopBtn.classList.remove(n.hideClass),e.toTopBtn.classList.add(n.showClass),e.setTopBtnFadeDuration(t)}},t.prototype.hideTopBtn=function(t){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass),this.setTopBtnFadeDuration(t))},t.prototype.setTopBtnFadeDuration=function(t){if(this.toTopBtn){var o=(null!=t?t:this.optUp.toTop.fadeDuration)+"s";this.toTopBtn.style.animationDuration=o,this.toTopBtn.style.webkitAnimationDuration=o}},t.prototype.scrollTo=function(t,o){var e=this,n=e.getScrollTop(),s=t;if(s>0){var i=e.getScrollHeight()-e.getClientHeight();s>i&&(s=i)}else s=0;e.isScrollTo=!0,e.scrollDom.style.webkitOverflowScrolling="auto",e.getStep(n,s,function(t){e.setScrollTop(t),t===s&&(e.scrollDom.style.webkitOverflowScrolling="touch",e.isScrollTo=!1)},o)},t.prototype.getStep=function(t,o,e,n,s){var i=o-t;if(0!==n&&0!==i){n=n||300,s=s||30;var l=n/s,r=i/l,p=0,a=window.setInterval(function(){p<l-1?(t+=r,e&&e(t,a),p++):(e&&e(o,a),window.clearInterval(a))},s)}else e&&e(o)},t.prototype.lazyLoad=function(t){var o=this,e=null!=t?t:o.optUp.lazyLoad.delay,n=setTimeout(function(){for(var t=o.scrollDom.querySelectorAll("["+o.optUp.lazyLoad.attr+"]"),e=t.length,n=0;n<e;n++){var s=t[n];if("true"!==s.getAttribute(o.lazyTag)&&o.isInSee(s,o.optUp.lazyLoad.offset)){var i=s.getAttribute(o.optUp.lazyLoad.attr),l=new Image;l.onload=function(){var t=this.src,e=this.dom,n=o.optUp.lazyLoad.showClass;n&&e.classList.add(n),"IMG"===e.tagName?e.src=t:e.style.backgroundImage="url("+t+")",e.removeAttribute(o.optUp.lazyLoad.attr),e.removeAttribute(o.lazyTag)},l.onerror=function(){this.dom.removeAttribute(o.lazyTag)},l.onabort=function(){this.dom.removeAttribute(o.lazyTag)},l.src=i,s.setAttribute(o.lazyTag,"true"),l.dom=s}}},e);return n},t.prototype.isInSee=function(t,o){o=o||0;var e=this.getOffsetTop(t),n=this.getScrollTop()-o,s=e+t.offsetHeight,i=n+o+this.getClientHeight()+o;return e<i&&e>=n||s<=i&&s>n},t.prototype.getOffsetTop=function(t){var o=t.offsetTop,e=t.offsetParent;while(null!=e&&e!==this.scrollDom)o+=e.offsetTop+e.clientTop,e=e.offsetParent;return o},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){"number"===typeof t&&(this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t)},t.prototype.getDomById=function(t){var o;return t&&("string"===typeof t?o=document.getElementById(t):t.nodeType&&(o=t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},t.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t})}}]);