(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{221:function(t,e,n){var content=n(394);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("e5762b76",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";var r=n(221);n.n(r).a},394:function(t,e,n){(e=n(15)(!1)).push([t.i,".post-detail{max-width:768px}",""]),t.exports=e},395:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6b715e77",content,!0,{sourceMap:!1})},396:function(t,e,n){(e=n(15)(!1)).push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;font-feature-settings:"liga";font-size:24px;-webkit-box-pack:center;justify-content:center;letter-spacing:normal;line-height:1;text-indent:0;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.6}.v-icon--is-component,.v-icon--svg{height:24px;width:24px}.v-icon--svg{fill:currentColor}.v-icon--dense--is-component{height:20px}',""]),t.exports=e},400:function(t,e,n){"use strict";n.r(e);var r,o=n(222),l=n.n(o),c={head:function(){return{title:this.getTitle()}},data:function(){return{name:"anton",post:[]}},methods:{getPost:function(){var t=this;l.a.get("http://posokhins.beget.tech/wp-json/wp/v2/posts/?slug="+this.$route.fullPath).then((function(e){t.post=e.data}))},getTitle:function(){for(var i=0;i<this.post.length;i++){var title=this.post[i];for(var t in title){return title.title.rendered}}}},beforeMount:function(){this.getPost(),this.getTitle()}},h=(n(393),n(42)),d=n(104),f=n.n(d),v=n(401),m=n(217),x=(n(21),n(12),n(5),n(4),n(11),n(3)),w=(n(107),n(26),n(44),n(45),n(360),n(395),n(130)),y=n(103),O=n(359),j=n(73),k=n(1),S=n(0),z=n(24);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var D=Object(z.a)(w.a,y.a,O.a,j.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(k.l)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(k.i)(t).find((function(e){return t[e]}));return e&&r[e]||Object(k.d)(this.size)},getDefaultData:function(){var t=Boolean(this.listeners$.click||this.listeners$["!click"]);return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:C({"aria-hidden":!t,role:t?"button":null},this.attrs$),on:this.listeners$}},applyColors:function(data){data.class=C({},data.class,{},this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),l=o<=-1;l?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!l;var c=this.getSize();return c&&(data.style={fontSize:c}),this.applyColors(data),e(this.tag,data,n)},renderSvgIcon:function(t,e){var n=this.getSize(),r=C({},this.getDefaultData(),{style:n?{fontSize:n,height:n,width:n}:void 0});return r.class["v-icon--svg"]=!0,this.applyColors(r),e("span",r,[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:n||"32",width:n||"32",role:"img","aria-hidden":!this.attrs$["aria-label"],"aria-label":this.attrs$["aria-label"]}},[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data=this.getDefaultData();data.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(data.style={fontSize:n,height:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(component,data)}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),$=S.a.extend({name:"v-icon",$_wrapperFor:D,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(D,data,r?[r]:n)}}),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.post,(function(e,r){return n("v-container",{key:r},[n("v-btn",{staticClass:"mb-6",attrs:{dark:"",to:"/"}},[n("v-icon",{attrs:{dark:"",left:""}},[t._v("mdi-arrow-left")]),t._v("Назад\n\t\t")],1),t._v(" "),n("div",{staticClass:"post-detail"},[n("h1",[t._v(t._s(e.title.rendered))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(e.content.rendered)}})])],1)})),1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VContainer:m.a,VIcon:$})}}]);