(function(e){function t(t){for(var r,s,n=t[0],l=t[1],c=t[2],u=0,m=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},o={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-subheader",[e._v("VISTAS")]),a("v-list-item",{attrs:{link:"",to:{name:"home"}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Home")])],1)],1),a("v-list-item",{attrs:{link:"",to:{name:"reportes"}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-alert")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Reportes")])],1)],1),a("v-list-item",{attrs:{link:"",to:{name:"inventario"}}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-book-outline")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Inventario")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Inventario")])],1),a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"shrink"},[a("router-view")],1)],1)],1)],1),a("v-footer",{attrs:{app:""}},[a("span",[a("v-icon",{attrs:{small:""}},[e._v("mdi-coffee-outline")]),e._v(" Joshua Salcido "),a("v-icon",{attrs:{small:""}},[e._v("mdi-database-check")]),e._v(" Aranza Alanis © 2019 ")],1)])],1)},i=[],s={data:function(){return{drawer:null}}},n=s,l=a("2877"),c=a("6544"),d=a.n(c),u=a("7496"),m=a("40dc"),v=a("5bc1"),p=a("62ad"),h=a("a523"),f=a("a75b"),b=a("553a"),g=a("132d"),I=a("8860"),k=a("da13"),x=a("1800"),_=a("5d23"),w=a("f774"),V=a("0fd9"),y=a("e0c7"),S=a("2a7f"),C=Object(l["a"])(n,o,i,!1,null,null,null),D=C.exports;d()(C,{VApp:u["a"],VAppBar:m["a"],VAppBarNavIcon:v["a"],VCol:p["a"],VContainer:h["a"],VContent:f["a"],VFooter:b["a"],VIcon:g["a"],VList:I["a"],VListItem:k["a"],VListItemAction:x["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VNavigationDrawer:w["a"],VRow:V["a"],VSubheader:y["a"],VToolbarTitle:S["a"]});var T=a("8c4f"),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{href:"https://github.com/tavaresjoshua8",icon:"",large:"",target:"_blank"}},r),[a("v-icon",{attrs:{large:""}},[e._v("mdi-github-circle")])],1)]}}])},[a("span",[e._v("GitHub Profile")])]),a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{href:"https://www.linkedin.com/in/joshua-tavares-30b1b418a/",icon:"",large:"",target:"_blank"}},r),[a("v-icon",{attrs:{large:""}},[e._v("mdi-linkedin")])],1)]}}])},[a("span",[e._v("LinkedIn Profile")])]),a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{href:"https://twitter.com/tavaresjoshua8",icon:"",large:"",target:"_blank"}},r),[a("v-icon",{attrs:{large:""}},[e._v("mdi-twitter-circle")])],1)]}}])},[a("span",[e._v("Twitter Profile")])]),a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{href:"mailto:tavaresjoshua8@gmail.com",icon:"",large:"",target:"_blank"}},r),[a("v-icon",[e._v("mdi-gmail")])],1)]}}])},[a("span",[e._v("E-mail")])])],1)},O=[],$={name:"home"},E=$,j=a("8336"),A=a("3a2f"),q=Object(l["a"])(E,R,O,!1,null,null,null),P=q.exports;d()(q,{VBtn:j["a"],VIcon:g["a"],VTooltip:A["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{"loading-text":"Cargando...","sort-by":"folio",headers:e.headers,items:e.items,search:e.search,loading:e.loadingItems},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Computadoras")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Buscar","append-icon":e.mdiMagnify,singleLine:"",hideDetails:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("Nueva Computadora")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{loading:e.savingItems}},[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Nombre",rules:e.rules.required},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Sistema Operativo",rules:e.rules.required},model:{value:e.editedItem.operative_system,callback:function(t){e.$set(e.editedItem,"operative_system",t)},expression:"editedItem.operative_system"}})],1)],1),a("h2",[e._v("Hardware")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Modelo",rules:e.rules.required},model:{value:e.editedItem.hardware.model,callback:function(t){e.$set(e.editedItem.hardware,"model",t)},expression:"editedItem.hardware.model"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Marca",rules:e.rules.required},model:{value:e.editedItem.hardware.brand,callback:function(t){e.$set(e.editedItem.hardware,"brand",t)},expression:"editedItem.hardware.brand"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"No. de Serie",rules:e.rules.required},model:{value:e.editedItem.hardware.serial,callback:function(t){e.$set(e.editedItem.hardware,"serial",t)},expression:"editedItem.hardware.serial"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"RAM",rules:e.rules.required},model:{value:e.editedItem.hardware.ram,callback:function(t){e.$set(e.editedItem.hardware,"ram",t)},expression:"editedItem.hardware.ram"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Procesador",rules:e.rules.required},model:{value:e.editedItem.hardware.processor,callback:function(t){e.$set(e.editedItem.hardware,"processor",t)},expression:"editedItem.hardware.processor"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Disco Duro",rules:e.rules.required},model:{value:e.editedItem.hardware.hdd,callback:function(t){e.$set(e.editedItem.hardware,"hdd",t)},expression:"editedItem.hardware.hdd"}})],1)],1),a("h2",[e._v("Ubicación")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Departamento",rules:e.rules.required},model:{value:e.editedItem.location.department,callback:function(t){e.$set(e.editedItem.location,"department",t)},expression:"editedItem.location.department"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Responsable",rules:e.rules.required},model:{value:e.editedItem.location.leader,callback:function(t){e.$set(e.editedItem.location,"leader",t)},expression:"editedItem.location.leader"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Observaciones"},model:{value:e.editedItem.location.observations,callback:function(t){e.$set(e.editedItem.location,"observations",t)},expression:"editedItem.location.observations"}})],1),a("v-col",{attrs:{cols:"12"}},[e.response.error?a("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.response.message)+" ")]):e._e()],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Guardar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var r=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reiniciar")])]},proxy:!0}])}),a("v-snackbar",{attrs:{color:e.snackbar.color,top:""},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.message)+" "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){e.snackbar.show=!1}}},[e._v(" "+e._s(e.snackbar.close)+" ")])],1),a("v-snackbar",{attrs:{color:"error",top:""},model:{value:e.deletedSnackbar,callback:function(t){e.deletedSnackbar=t},expression:"deletedSnackbar"}},[e._v(" Computadora Eliminada. "),a("v-btn",{attrs:{dark:"",text:""},on:{click:e.backDeletedItem}},[e._v(" Deshacer ")])],1)],1)},z=[],N=(a("c975"),a("a434"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("bc3a")),L=a.n(N),B={data:function(){return{snackbar:{show:!1,message:"",color:"cyan darken-2",close:"Cerrar"},deletedSnackbar:!1,loadingItems:!1,savingItems:!1,search:"",dialog:!1,response:{error:!1,message:""},rules:{required:[function(e){return!!e||"Este campo es necesario."}]},headers:[{text:"Nombre",value:"name"},{text:"S.O",value:"operative_system"},{text:"Modelo",value:"hardware.model"},{text:"Marca",value:"hardware.brand"},{text:"No. de Serie",value:"hardware.serial",sortable:!1},{text:"RAM",value:"hardware.ram"},{text:"Procesador",value:"hardware.processor"},{text:"Disco Duro",value:"hardware.hdd"},{text:"Departamento",value:"location.department"},{text:"Acciones",value:"action",sortable:!1}],items:[],editedIndex:-1,editedItem:{id:0,name:"",operative_system:"",hardware:{model:"",brand:"",serial:"",ram:"",processor:"",hdd:""},location:{department:"",leader:"",observations:""}},defaultItem:{id:0,name:"",operative_system:"",hardware:{model:"",brand:"",serial:"",ram:"",processor:"",hdd:""},location:{department:"",leader:"",observations:""}},lastDeletedItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nueva Computadora":"Editar Computadora"},imageRules:function(){return-1===this.editedIndex?[function(e){return!!e||"Este campo es necesario."}]:[]}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;this.loadingItems=!0,L.a.get("/api/computers").then((function(t){e.items=t.data,e.loadingItems=!1}))},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,a=this.items.indexOf(e);confirm("¿Está seguro que quiere eliminar este item?")&&(this.loadingItems=!0,L.a.delete("/api/computers/"+e.id).then((function(e){t.lastDeletedItem=e.data,t.loadingItems=!1,t.items.splice(a,1),t.showDeletedSnackbar()})).catch((function(e){t.loadingItems=!1,t.showSnackbar(e.response.data.message,"error")})))},close:function(){var e=this;this.$refs.form.resetValidation(),this.setResponseError(null),this.dialog=!1,this.image=null,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this;this.$refs.form.validate()&&(this.savingItems=!0,this.setResponseError(null),this.editedIndex>-1?L.a.put("/api/computers/"+this.editedItem.id,{computer:this.editedItem}).then((function(t){e.savingItems=!1,Object.assign(e.items[e.editedIndex],t.data),e.close(),e.showSnackbar("Computadora actualizada con éxito.")})).catch((function(t){e.setResponseError(t),e.savingItems=!1})):L.a.post("/api/computers",{computer:this.editedItem}).then((function(t){e.savingItems=!1,e.items.push(t.data),e.close(),e.showSnackbar("Computadora guardada con éxito.")})).catch((function(t){e.setResponseError(t),e.savingItems=!1})))},backDeletedItem:function(){this.editItem(this.lastDeletedItem),this.deletedSnackbar=!1},slug:function(e){e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase();for(var t="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",a="aaaaaeeeeeiiiiooooouuuunc------",r=0,o=t.length;r<o;r++)e=e.replace(new RegExp(t.charAt(r),"g"),a.charAt(r));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e},setResponseError:function(e){this.response=null==e?{error:!1,message:""}:{error:!0,message:e.response.data.message}},showSnackbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cyan darken-2",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Cerrar";this.snackbar={color:t,message:e,close:a,show:!0}},showDeletedSnackbar:function(){this.deletedSnackbar=!0}}},F=B,G=a("0798"),H=a("b0af"),J=a("99d9"),U=a("8fea"),K=a("169a"),Q=a("ce7e"),W=a("4bd4"),X=a("2db4"),Y=a("2fa4"),Z=a("8654"),ee=a("a844"),te=a("71d9"),ae=Object(l["a"])(F,M,z,!1,null,null,null),re=ae.exports;d()(ae,{VAlert:G["a"],VBtn:j["a"],VCard:H["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:p["a"],VContainer:h["a"],VDataTable:U["a"],VDialog:K["a"],VDivider:Q["a"],VForm:W["a"],VIcon:g["a"],VRow:V["a"],VSnackbar:X["a"],VSpacer:Y["a"],VTextField:Z["a"],VTextarea:ee["a"],VToolbar:te["a"],VToolbarTitle:S["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{"loading-text":"Cargando...","sort-by":"folio",headers:e.headers,items:e.items,search:e.search,loading:e.loadingItems},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Reportes")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Buscar","append-icon":e.mdiMagnify,singleLine:"",hideDetails:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("Nuevo Reporte")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{loading:e.savingItems}},[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{label:"Computadora",items:e.computers},model:{value:e.editedItem.computer_id,callback:function(t){e.$set(e.editedItem,"computer_id",t)},expression:"editedItem.computer_id"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-date-picker",{attrs:{label:"Fecha"},model:{value:e.editedItem.date,callback:function(t){e.$set(e.editedItem,"date",t)},expression:"editedItem.date"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Descripción",rules:e.rules.required},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Solución"},model:{value:e.editedItem.solution,callback:function(t){e.$set(e.editedItem,"solution",t)},expression:"editedItem.solution"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Guardar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var r=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reiniciar")])]},proxy:!0}])}),a("v-snackbar",{attrs:{color:e.snackbar.color,top:""},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.message)+" "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){e.snackbar.show=!1}}},[e._v(" "+e._s(e.snackbar.close)+" ")])],1),a("v-snackbar",{attrs:{color:"error",top:""},model:{value:e.deletedSnackbar,callback:function(t){e.deletedSnackbar=t},expression:"deletedSnackbar"}},[e._v(" Reporte Eliminado. "),a("v-btn",{attrs:{dark:"",text:""},on:{click:e.backDeletedItem}},[e._v(" Deshacer ")])],1)],1)},ie=[],se={data:function(){return{snackbar:{show:!1,message:"",color:"cyan darken-2",close:"Cerrar"},deletedSnackbar:!1,loadingItems:!1,savingItems:!1,search:"",computers:[],dialog:!1,response:{error:!1,message:""},rules:{required:[function(e){return!!e||"Este campo es necesario."}]},headers:[{text:"No. de Reporte",value:"id"},{text:"Computadora",value:"computer.name"},{text:"Fecha",value:"date"},{text:"Descripción",value:"description"},{text:"Solución",value:"solution"},{text:"Acciones",value:"action",sortable:!1}],items:[],editedIndex:-1,editedItem:{id:0,computer_id:0,date:"",description:"",solution:"",computer:{name:""}},defaultItem:{id:0,computer_id:0,date:"",description:"",solution:"",computer:{name:""}},lastDeletedItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Reporte":"Editar Reporte"},imageRules:function(){return-1===this.editedIndex?[function(e){return!!e||"Este campo es necesario."}]:[]}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;this.loadingItems=!0,L.a.get("/api/reports").then((function(t){e.items=t.data,e.loadingItems=!1})),L.a.get("/api/computers/select").then((function(t){e.computers=t.data}))},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,a=this.items.indexOf(e);confirm("¿Está seguro que quiere eliminar este item?")&&(this.loadingItems=!0,L.a.delete("/api/reports/"+e.id).then((function(e){t.lastDeletedItem=e.data,t.loadingItems=!1,t.items.splice(a,1),t.showDeletedSnackbar()})).catch((function(e){t.loadingItems=!1,t.showSnackbar(e.response.data.message,"error")})))},close:function(){var e=this;this.$refs.form.resetValidation(),this.setResponseError(null),this.dialog=!1,this.image=null,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this;this.$refs.form.validate()&&(this.savingItems=!0,this.setResponseError(null),this.editedIndex>-1?L.a.put("/api/reports/"+this.editedItem.id,{report:this.editedItem}).then((function(t){e.savingItems=!1,Object.assign(e.items[e.editedIndex],t.data),e.close(),e.showSnackbar("Item actualizado con éxito.")})).catch((function(t){e.setResponseError(t),e.savingItems=!1})):L.a.post("/api/reports",{report:this.editedItem}).then((function(t){e.savingItems=!1,e.items.push(t.data),e.close(),e.showSnackbar("Item guardado con éxito.")})).catch((function(t){e.setResponseError(t),e.savingItems=!1})))},backDeletedItem:function(){this.editItem(this.lastDeletedItem),this.deletedSnackbar=!1},slug:function(e){e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase();for(var t="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",a="aaaaaeeeeeiiiiooooouuuunc------",r=0,o=t.length;r<o;r++)e=e.replace(new RegExp(t.charAt(r),"g"),a.charAt(r));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e},setResponseError:function(e){this.response=null==e?{error:!1,message:""}:{error:!0,message:e.response.data.message}},showSnackbar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cyan darken-2",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Cerrar";this.snackbar={color:t,message:e,close:a,show:!0}},showDeletedSnackbar:function(){this.deletedSnackbar=!0}}},ne=se,le=a("2e4b"),ce=a("b974"),de=Object(l["a"])(ne,oe,ie,!1,null,null,null),ue=de.exports;d()(de,{VBtn:j["a"],VCard:H["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:p["a"],VContainer:h["a"],VDataTable:U["a"],VDatePicker:le["a"],VDialog:K["a"],VDivider:Q["a"],VForm:W["a"],VIcon:g["a"],VRow:V["a"],VSelect:ce["a"],VSnackbar:X["a"],VSpacer:Y["a"],VTextField:Z["a"],VTextarea:ee["a"],VToolbar:te["a"],VToolbarTitle:S["a"]}),r["a"].use(T["a"]);var me=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:P},{path:"/inventario",name:"inventario",component:re},{path:"/reportes",name:"reportes",component:ue}],ve=new T["a"]({mode:"history",base:"/",routes:me}),pe=ve,he=a("f309");r["a"].use(he["a"]);var fe=new he["a"]({icons:{iconfont:"mdi"},theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({router:pe,vuetify:fe,render:function(e){return e(D)}}).$mount("#app")}});
//# sourceMappingURL=app.3c4ba91b.js.map