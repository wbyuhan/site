(window.webpackJsonp=window.webpackJsonp||[]).push([[25,34],{250:function(t,i,s){},263:function(t,i,s){},270:function(t,i,s){"use strict";s(250)},277:function(t,i,s){"use strict";s.r(i);var e={name:"LinkItem",props:{item:{type:Object}}},n=(s(270),s(14)),a=Object(n.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"link-item-container"},[this.item.img?t("img",{staticStyle:{"max-width":"16px","max-height":"16px"},attrs:{src:this.item.img,alt:"icon"}}):this._e(),this._v(" "),t("a",{attrs:{href:this.item.url}},[this._v(this._s(this.item.text))])])}),[],!1,null,"10966a78",null);i.default=a.exports},294:function(t,i,s){"use strict";s(263)},308:function(t,i,s){"use strict";s.r(i);var e={name:"ResourceList",components:{Linkitem:s(277).default},props:{title:{type:String},linkItems:{type:Array}}},n=(s(294),s(14)),a=Object(n.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"linklist-container"},[t("h4",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),t("ul",{staticClass:"linklist-items"},this._l(this.linkItems,(function(i){return t("Linkitem",{key:i.text,attrs:{item:i}})})),1)])}),[],!1,null,"413e718b",null);i.default=a.exports}}]);