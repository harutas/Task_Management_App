(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"d-flex flex-nowrap overflow-auto pb-3"},[n("div",{staticClass:"d-flex flex-column"},[n("div",{staticClass:"d-flex"},[n("v-form",{ref:"form",staticClass:"d-flex"},[n("v-text-field",{staticClass:"ma-3",attrs:{label:"Section",required:""},model:{value:t.sectionName,callback:function(e){t.sectionName=e},expression:"sectionName"}}),n("v-btn",{staticClass:"mt-5",on:{click:t.createSection}},[t._v(" ADD SECTION ")])],1)],1),n("div",{staticClass:"d-flex align-start"},t._l(t.sectionArray,(function(e,i){return n("task-section",{key:e.sectionId,attrs:{section:e},on:{"delete-section":function(e){return t.deleteSection(i)},"create-task":t.createTask,"delete-task":t.deleteTask,input:t.changeSectionName,"change-task-title":t.changeTaskTitle,"change-task-content":t.changeTaskContent,"toggle-can-edit":t.toggleCanEdit,"toggle-is-done":t.toggleIsDone,"toggle-is-favorite":t.toggleIsFavorite}})})),1)])])])},a=[],o=(n("7db0"),n("d3b7"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-3"},[n("v-card",{staticClass:"pa-1",attrs:{width:"250"}},[n("v-text-field",{attrs:{label:"Section","hide-details":"false"},on:{input:function(e){return t.$emit("input",e,t.section.sectionId)}},model:{value:t.sectionName,callback:function(e){t.sectionName=e},expression:"sectionName"}}),t._l(t.section.taskArray,(function(e){return n("task-card",{key:e.taskId,attrs:{sectionName:t.sectionName,section:t.section,task:e},on:{"delete-task":t.deleteTask,"change-task-title":t.changeTaskTitle,"change-task-content":t.changeTaskContent,"toggle-can-edit":t.toggleCanEdit,"toggle-is-done":t.toggleIsDone,"toggle-is-favorite":t.toggleIsFavorite}})})),n("div",{staticClass:"d-flex justify-space-between px-3 py-2"},[n("v-icon",{staticClass:"btn btn-outline-primary",on:{click:t.createTask}},[t._v(" mdi-plus ")]),n("v-icon",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.$emit("delete-section",t.section.sectionId)}}},[t._v(" mdi-delete ")])],1)],2)],1)}),c=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",[n("v-card",{staticClass:"pa-2"},[n("v-text-field",{attrs:{label:"title","hide-details":"false"},on:{input:function(e){return t.$emit("change-task-title",e,t.section.sectionId,t.task.taskId)}},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("div",{staticClass:"text-caption my-2"},[t._v(" Section name: "+t._s(t.sectionName)+" ")]),t.task.canEdit?n("v-textarea",{attrs:{label:"Write todo",outlined:"","hide-details":"false"},on:{input:function(e){return t.$emit("change-task-content",e,t.section.sectionId,t.task.taskId)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}):n("div",[t._v(t._s(t.content))]),n("v-card-actions",{staticClass:"d-flex justify-end"},[n("v-icon",{staticClass:"mx-1",on:{click:function(e){return t.$emit("toggle-can-edit",t.task.canEdit,t.section.sectionId,t.task.taskId)}}},[t._v("mdi-note")]),t.task.isDone?n("v-icon",{staticClass:"mx-1",attrs:{color:"green"},on:{click:function(e){return t.$emit("toggle-is-done",t.task.isDone,t.section.sectionId,t.task.taskId)}}},[t._v("mdi-check-bold")]):n("v-icon",{staticClass:"mx-1",on:{click:function(e){return t.$emit("toggle-is-done",t.task.isDone,t.section.sectionId,t.task.taskId)}}},[t._v("mdi-check-bold")]),t.task.isFavorite?n("v-icon",{staticClass:"mx-1",attrs:{color:"yellow"},on:{click:function(e){return t.$emit("toggle-is-favorite",t.task.isFavorite,t.section.sectionId,t.task.taskId)}}},[t._v("mdi-star")]):n("v-icon",{staticClass:"mx-1",on:{click:function(e){return t.$emit("toggle-is-favorite",t.task.isFavorite,t.section.sectionId,t.task.taskId)}}},[t._v("mdi-star")]),n("v-icon",{staticClass:"mx-1",on:{click:function(e){return t.$emit("delete-task",t.section.sectionId,t.task.taskId)}}},[t._v(" mdi-delete ")])],1)],1)],1)},l=[],u={name:"TaskCard",data:function(){return{title:this.task.title,content:this.task.content}},props:{task:Object,section:Object,sectionName:String}},d=u,f=n("2877"),k=n("6544"),h=n.n(k),v=n("b0af"),g=n("99d9"),m=n("62ad"),p=n("132d"),I=n("8654"),b=n("a844"),x=Object(f["a"])(d,r,l,!1,null,null,null),y=x.exports;h()(x,{VCard:v["a"],VCardActions:g["a"],VCol:m["a"],VIcon:p["a"],VTextField:I["a"],VTextarea:b["a"]});var C=n("d4ec"),T=n("bee2"),_=function(){function t(e,n,i,s,a,o,c){Object(C["a"])(this,t),this.sectionId=e,this.taskId=n,this.title=i,this.content=s,this.canEdit=a,this.isDone=o,this.isFavorite=c}return Object(T["a"])(t,null,[{key:"createDefaultTask",value:function(e){var n=new t(e,0,"","",!0,!1,!1),i=[];return i.push(n),i}}]),t}(),O=Object(T["a"])((function t(e,n){Object(C["a"])(this,t),this.sectionId=e,this.sectionName=n,this.taskArray=_.createDefaultTask(e)})),$={name:"TaskSection",components:{TaskCard:y},props:{section:Object},data:function(){return{taskId:1,sectionName:this.section.sectionName}},methods:{createTask:function(){var t=new _(this.section.sectionId,this.taskId,"","",!0,!1,!1);this.taskId++,this.$emit("create-task",this.section.sectionId,t)},deleteTask:function(t,e){return this.$emit("delete-task",t,e)},changeTaskTitle:function(t,e,n){return this.$emit("change-task-title",t,e,n)},changeTaskContent:function(t,e,n){return this.$emit("change-task-content",t,e,n)},toggleCanEdit:function(t,e,n){return this.$emit("toggle-can-edit",t,e,n)},toggleIsDone:function(t,e,n){return this.$emit("toggle-is-done",t,e,n)},toggleIsFavorite:function(t,e,n){return this.$emit("toggle-is-favorite",t,e,n)}},computed:{currSectionName:function(){return this.sectionName}}},j=$,N=Object(f["a"])(j,o,c,!1,null,null,null),w=N.exports;h()(N,{VCard:v["a"],VIcon:p["a"],VTextField:I["a"]});var S={name:"App",components:{TaskSection:w},data:function(){return{sectionId:0,sections:[],sectionName:""}},methods:{createSection:function(){var t=new O(this.sectionId,this.sectionName);return this.sectionId++,console.log(this.sections),this.sections.push(t)},deleteSection:function(t){this.$delete(this.sections,t)},changeSectionName:function(t,e){var n=this.sections.find((function(t){return t.sectionId===e}));n.sectionName=t},createTask:function(t,e){var n=this.sections.find((function(e){return e.sectionId===t}));n.taskArray.push(e)},deleteTask:function(t,e){for(var n=this.sections.find((function(e){return e.sectionId===t})),i=n.taskArray,s=0;s<i.length;s++)i[s].taskId===e&&i.splice(s,1)},changeTaskTitle:function(t,e,n){for(var i=this.sections.find((function(t){return t.sectionId===e})),s=i.taskArray,a=0;a<s.length;a++)s[a].taskId===n&&(s[a].title=t)},changeTaskContent:function(t,e,n){for(var i=this.sections.find((function(t){return t.sectionId===e})),s=i.taskArray,a=0;a<s.length;a++)s[a].taskId===n&&(s[a].content=t)},toggleCanEdit:function(t,e,n){for(var i=this.sections.find((function(t){return t.sectionId===e})),s=i.taskArray,a=0;a<s.length;a++)s[a].taskId===n&&(s[a].canEdit=!t)},toggleIsDone:function(t,e,n){for(var i=this.sections.find((function(t){return t.sectionId===e})),s=i.taskArray,a=0;a<s.length;a++)s[a].taskId===n&&(s[a].isDone=!t)},toggleIsFavorite:function(t,e,n){for(var i=this.sections.find((function(t){return t.sectionId===e})),s=i.taskArray,a=0;a<s.length;a++)s[a].taskId===n&&(s[a].isFavorite=!t)}},computed:{sectionArray:function(){return this.sections}}},A=S,D=n("7496"),F=n("8336"),V=n("4bd4"),E=Object(f["a"])(A,s,a,!1,null,null,null),P=E.exports;h()(E,{VApp:D["a"],VBtn:F["a"],VForm:V["a"],VTextField:I["a"]});var M=n("f309");i["a"].use(M["a"]);var J=new M["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:J,render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.2f762d99.js.map