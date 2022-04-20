(()=>{"use strict";var t,e={773:()=>{function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Statamic.$bard.tiptap.mergeAttributes;var n=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,n),this.options=e,console.log("this:",this)}var o,r,i;return o=n,(r=[{key:"name",value:function(){return"footnote"}},{key:"schema",value:function(){return{attrs:{index:{default:12}},group:"inline",content:"inline*",inline:!0,selectable:!0,draggable:!0,parseDOM:[{tag:"footnote"}],toDOM:function(t){return["span",{class:"footnote"},0]}}}},{key:"commands",value:function(t){var e=t.type;return function(){return function(t,n){t.selection.anchor;var o=t.tr,r=e.create();return o.replaceSelectionWith(r),n(o),!0}}}},{key:"inputRules",value:function(t){return t.type,[]}},{key:"plugins",value:function(){return[]}},{key:"pasteRules",value:function(){return[]}}])&&e(o.prototype,r),i&&e(o,i),Object.defineProperty(o,"prototype",{writable:!1}),n}();var o=function(t,e,n,o,r,i,a,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):r&&(u=s?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:l}}({mixins:[BardToolbarButton],methods:{addFootnote:function(){this.editor.commands.footnote()}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-block relative"},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",domProps:{innerHTML:t._s(t.button.html)},on:{click:function(e){return t.addFootnote()}}})])}),[],!1,null,null,null);const r=o.exports;Statamic.$bard.addExtension((function(t){return(0,t.node)(new n)})),Statamic.$bard.buttons((function(t){t.push({name:"footnote",text:__("Footnote"),command:"footnote",html:"FN",component:r})}))},96:()=>{}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var a=1/0;for(c=0;c<t.length;c++){for(var[n,r,i]=t[c],s=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((t=>o.O[t](n[u])))?n.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={581:0,776:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[a,s,u]=n,l=0;if(a.some((e=>0!==t[e]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var c=u(o)}for(e&&e(n);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.O(void 0,[776],(()=>o(773)));var r=o.O(void 0,[776],(()=>o(96)));r=o.O(r)})();