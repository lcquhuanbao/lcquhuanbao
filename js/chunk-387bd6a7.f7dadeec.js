(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-387bd6a7"],{"0f8e":function(t,s,e){},"3d09":function(t,s,e){"use strict";var a=e("0f8e"),r=e.n(a);r.a},f5ea:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content_height"},[e("wxLogin")],1)},r=[],i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{attrs:{id:"app_wxlogin"}},[e("div",{staticClass:"text-wrapper"},[e("div",{staticClass:"text part1"},[e("div",[e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("L")]),e("span")]),e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("o")]),e("span")]),e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("a")]),e("span")]),e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("d")]),e("span")]),e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("i")]),e("span")]),e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("n")]),e("span")]),e("span",{staticClass:"letter"},[e("div",{staticClass:"character"},[t._v("g")]),e("span")])])]),e("div",{staticClass:"how-to"},[e("span",[t._v("正在加载中，请您耐心等待...")])])])])])}],c={data:function(){return{redirect_url:"",share:"",text:"",toast:null,url:""}},created:function(){sessionStorage.setItem("is_announ",JSON.stringify(!0)),this.wxLogin()},methods:{wxLogin:function(){var t=this;if(this.$route.query.redirect){if(this.redirect_url=this.$route.query.redirect,this.$route.query.redirect.indexOf("&tshare=")){var s=new RegExp("(^|&?)tshare=([^&]*)(&)"),e=this.$route.query.redirect.substr(1).match(s);null!=e&&(this.share=unescape(e[2]))}}else if(sessionStorage.getItem("url")){this.redirect_url=sessionStorage.getItem("url");var a=sessionStorage.getItem("url");if(a.indexOf("&tshare=")){var r=new RegExp("(^|&?)tshare=([^&]*)(&)"),i=a.substr(1).match(r);null!=i&&(this.share=unescape(i[2]))}}var n={};n.tshare=this.share,n.final_link=this.redirect_url||"",this.$api.getUser.wxLogin(n).then(function(s){t.text=s,200==s.code&&(location.href=s.result)})}}},l=c,u=(e("3d09"),e("2877")),o=Object(u["a"])(l,i,n,!1,null,"8bfee8f4",null),h=o.exports,d={name:"wx",components:{wxLogin:h}},p=d,v=Object(u["a"])(p,a,r,!1,null,null,null);s["default"]=v.exports}}]);