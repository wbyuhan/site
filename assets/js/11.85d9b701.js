(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17,22,23,30,32,33],{242:function(t,e,a){},248:function(t,e,a){},249:function(t,e,a){},253:function(t,e,a){"use strict";a.r(e);var i={name:"QuickStart",props:{link:{type:String,require:!0},text:{type:String,require:!1,default:"快速开始"},type:{type:String,require:!1,default:"normal"}}},s=(a(255),a(14)),n=Object(s.a)(i,(function(){return(0,this._self._c)("a",{class:"quick-start "+this.type,attrs:{href:this.link}},[this._v(this._s(this.text))])}),[],!1,null,"d6903918",null);e.default=n.exports},255:function(t,e,a){"use strict";a(242)},260:function(t,e,a){},261:function(t,e,a){},262:function(t,e,a){},268:function(t,e,a){"use strict";a(248)},269:function(t,e,a){"use strict";a(249)},275:function(t,e,a){"use strict";a.r(e);var i={name:"Carousel",data:()=>({carouselItems:[{adjective:"极简",text:"的开发流程",message:"我们将创建、调试和发布项目的操作通过插件的方式集成到了常用的编辑器中，让项目的开发流程更简单。",img:"https://img.alicdn.com/imgextra/i4/O1CN01l3sg4x1SYD03hbh6A_!!6000000002258-1-tps-900-562.gif"},{adjective:"友好",text:"的开发体验",message:"我们提供了基于物料的可视化开发方式，区块组装生成页面，一键添加物料到代码，这对于新人来说非常友好。",img:"https://img.alicdn.com/imgextra/i1/O1CN01UwLdFD1PU8dJXVTNg_!!6000000001843-1-tps-900-562.gif"},{adjective:"强大",text:"的编码辅助",message:"代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效。",img:"https://img.alicdn.com/imgextra/i1/O1CN01p9WfQv1NddcJo0iaA_!!6000000001593-1-tps-900-562.gif"},{adjective:"详尽",text:"的代码分析",message:"非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务。",img:"https://img.alicdn.com/imgextra/i3/O1CN01JXVSwK1vbz7c7FDyU_!!6000000006192-1-tps-900-562.gif"},{adjective:"完善",text:"的编程指标",message:"我们自动追踪您在编辑器中的编码行为，通过对收集到的数据进行量化，以帮助您从数据中学习，更高效地编写代码，提高生产力。",img:"https://img.alicdn.com/imgextra/i1/O1CN01yZHsOP1wqvexiEz5r_!!6000000006360-1-tps-900-562.gif"}],activeIndex:0,timeId:null}),mounted(){this.createTick()},methods:{createTick(){this.timeId&&clearInterval(this.timeId),this.timeId=setInterval(()=>{this.activeIndex=(this.activeIndex+1)%5},3e4)},handleChangeActive(t){this.activeIndex=t,this.createTick()},handleAdd(){this.activeIndex=(this.activeIndex+1)%5,this.createTick()},handleDesc(){this.activeIndex=(this.activeIndex-1+5)%5,this.createTick()}}},s=(a(268),a(14)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"carousel-container"},[e("nav",{staticClass:"nav-items"},t._l(t.carouselItems,(function(a,i){return e("li",{key:i,staticClass:"nav-item",class:t.activeIndex===i?"nav-item-active":"",on:{click:function(e){return t.handleChangeActive(i)}}},[t._v("\n      "+t._s(a.adjective)+t._s(t.activeIndex===i?a.text:"")+"\n    ")])})),0),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("p",{key:t.carouselItems[t.activeIndex].message,staticClass:"carousel-message"},[t._v("\n      "+t._s(t.carouselItems[t.activeIndex].message)+"\n    ")])]),t._v(" "),e("div",{staticClass:"carousel-wrapper"},[e("button",{staticClass:"carousel-button left iconfont",on:{click:t.handleDesc}},[t._v("")]),t._v(" "),e("div",{staticClass:"carousel-slide-container"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("img",{key:t.carouselItems[t.activeIndex].message,attrs:{src:t.carouselItems[t.activeIndex].img,alt:"carousel-img"}})])],1),t._v(" "),e("button",{staticClass:"carousel-button right iconfont",on:{click:t.handleAdd}},[t._v("")])])],1)}),[],!1,null,"633a369d",null);e.default=n.exports},276:function(t,e,a){"use strict";a.r(e);var i={name:"NavLinks",props:{navItems:{type:Array,require:!0}}},s=(a(269),a(14)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav-container"},[e("ul",{staticClass:"nav-items"},t._l(t.navItems,(function(a,i){return e("li",{key:i,staticClass:"nav-item"},[e("img",{staticClass:"nav-icon",attrs:{src:a.imgSource,alt:"icon"}}),t._v(" "),e("a",{staticClass:"nav-link",attrs:{href:a.linkSource}},[t._v(t._s(a.text))])])})),0)])}),[],!1,null,"d162b94a",null);e.default=n.exports},290:function(t,e,a){"use strict";a(260)},291:function(t,e,a){"use strict";a(261)},292:function(t,e,a){"use strict";a(262)},293:function(t,e,a){},305:function(t,e,a){"use strict";a.r(e);var i={components:{QuickStart:a(253).default}},s=(a(290),a(14)),n=Object(s.a)(i,(function(){var t=this._self._c;return t("article",{staticClass:"logo-container"},[t("img",{staticClass:"logo",attrs:{src:"https://img.alicdn.com/imgextra/i4/O1CN01AvqMOu1sYpY1j8xaI_!!6000000005779-2-tps-574-204.png",alt:"logo"}}),this._v(" "),this._m(0),this._v(" "),t("quick-start",{staticClass:"quick-start",attrs:{text:"安装 AppWorks",type:"primary",link:"vscode:extension/iceworks-team.iceworks"}})],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"describe"},[t("p",{staticClass:"describe-title"},[this._v("AppWorks")]),this._v(" "),t("p",{staticClass:"describe-detail"},[this._v("基于 VS Code 插件的前端研发工具集，让前端开发更快更好更轻松。")])])}],!1,null,"313a92fe",null);e.default=n.exports},306:function(t,e,a){"use strict";a.r(e);var i={name:"Pack",components:{Carousel:a(275).default}},s=(a(291),a(14)),n=Object(s.a)(i,(function(){var t=this._self._c;return t("article",{staticClass:"suite-container"},[t("a",{attrs:{name:"suite",id:"suite"}}),this._v(" "),t("div",{staticClass:"suite-wrapper"},[t("carousel")],1)])}),[],!1,null,"73bd2d46",null);e.default=n.exports},307:function(t,e,a){"use strict";a.r(e);var i=a(253),s=a(276),n={name:"material",data:()=>({materialNavItems:[{imgSource:"https://img.alicdn.com/imgextra/i1/O1CN019uFWfu1C84XtBCBOP_!!6000000000035-2-tps-50-50.png",linkSource:"/materialCenter/react",text:"React 物料"},{imgSource:"https://img.alicdn.com/imgextra/i1/O1CN01Obj2nB1zIWl3XWjc4_!!6000000006691-2-tps-52-42.png",linkSource:"/materialCenter/rax",text:"Rax 物料"}]}),components:{QuickStart:i.default,NavLinks:s.default}},c=(a(292),a(14)),r=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"material-container"},[e("a",{attrs:{name:"materials",id:"materials"}}),t._v(" "),e("div",{staticClass:"rich-material"},[e("img",{staticClass:"material-img",attrs:{src:"https://img.alicdn.com/imgextra/i4/O1CN01tWElsC1bevLkCJOvI_!!6000000003491-2-tps-1428-952.png",alt:""}}),t._v(" "),e("div",{staticClass:"material-describe"},[e("h4",{staticClass:"title"},[t._v("海量物料")]),t._v(" "),e("p",{staticClass:"detail"},[t._v("提供多种垂直领域模板和区块，快速创建项目，支持风格切换，满足个性化需求。")]),t._v(" "),e("quick-start",{attrs:{text:"使用物料",type:"primary",link:"/pack/basic/materials"}}),t._v(" "),e("quick-start",{attrs:{text:"开发自定义物料",type:"primary",link:"/materials/about"}}),t._v(" "),e("nav-links",{staticClass:"material-nav",attrs:{navItems:t.materialNavItems}})],1)])])}),[],!1,null,"099df804",null);e.default=r.exports},315:function(t,e,a){"use strict";a(293)},332:function(t,e,a){"use strict";a.r(e);var i=a(305),s=a(306),n=a(307),c={name:"Body",components:{MainLogo:i.default,Pack:s.default,Material:n.default}},r=(a(315),a(14)),l=Object(r.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"body-container"},[t("MainLogo"),this._v(" "),t("Pack"),this._v(" "),t("Material")],1)}),[],!1,null,"4385d660",null);e.default=l.exports}}]);