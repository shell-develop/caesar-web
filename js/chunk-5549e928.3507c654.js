(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5549e928"],{"0297":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("h1",[t._v(t._s(t.title))]),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:10}},[n("el-card",{attrs:{shadow:"never"}},[n("job-tpl-table",{ref:"jobTplTable",on:{handlerSelTemplate:t.handlerSelTemplate}})],1)],1),n("el-col",{attrs:{span:14}},[n("el-card",{attrs:{shadow:"never"}},[n("job-table",{ref:"jobTable"})],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"5px"},attrs:{gutter:24}},[n("el-input",{staticClass:"input",attrs:{placeholder:"输入关键字模糊查询"},model:{value:t.queryParam.queryName,callback:function(e){t.$set(t.queryParam,"queryName",e)},expression:"queryParam.queryName"}}),n("el-button",{staticStyle:{"margin-left":"5px"},on:{click:t.fetchData}},[t._v("查询")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{prop:"tplType",label:"模版类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{"disable-transitions":"",type:"primary",plain:"",size:"mini"}},[t._v(t._s(e.row.tplType))])]}}])}),n("el-table-column",{attrs:{prop:"tplVersion",label:"模版版本"}}),n("el-table-column",{attrs:{prop:"tags",label:"标签"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"tag-group"},t._l(e.row.tags,(function(e){return n("span",{key:e.id},[n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.comment,placement:"top-start"}},[n("el-tag",{staticStyle:{"margin-left":"5px"},style:{color:e.color}},[t._v(t._s(e.tagKey))])],1)],1)})),0)]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(n){return t.handlerRowSel(e.row)}}},[t._v("详情")])]}}])})],1),n("el-pagination",{attrs:{background:"","page-sizes":[10,15,20,25,30],layout:"sizes, prev, pager, next",total:t.pagination.total,"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize},on:{"current-change":t.paginationCurrentChange,"size-change":t.handleSizeChange}})],1)},o=[],s=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("5880"),c=n("4903");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"JobTplTable",data:function(){return{title:"任务模版管理",tableData:[],options:{stripe:!0},loading:!1,pagination:{currentPage:1,pageSize:10,total:0},queryParam:{instanceId:"",queryName:""},formStatus:{visible:!1,operationType:!0,addTitle:"新增任务模版配置",updateTitle:"更新任务模版配置"},businessType:10,formTagTransferStatus:{visible:!1,title:"编辑任务模版标签"}}},computed:p({},Object(l["mapState"])("d2admin/user",["info"])),mounted:function(){this.initPageSize(),this.fetchData()},components:{},methods:p({},Object(l["mapActions"])({setPageSize:"d2admin/user/set"}),{handleSizeChange:function(t){this.pagination.pageSize=t,this.info.pageSize=t,this.setPageSize(this.info),this.fetchData()},initPageSize:function(){"undefined"!==typeof this.info.pageSize&&(this.pagination.pageSize=this.info.pageSize)},handlerRowSel:function(t){this.$emit("handlerSelTemplate",t)},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()},fetchData:function(){var t=this;this.loading=!0;var e={queryName:this.queryParam.queryName,extend:1,page:this.pagination.currentPage,length:this.pagination.pageSize};Object(c["f"])(e).then((function(e){t.tableData=e.body.data,t.pagination.total=e.body.totalNum,t.loading=!1}))}})},f=d,g=(n("b5eb"),n("2877")),b=function(t){t.options.__source="src/components/opscloud/jenkins/JobTplTable.vue"},h=b,m=Object(g["a"])(f,r,o,!1,null,null,null);"function"===typeof h&&h(m);var y=m.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"5px"},attrs:{gutter:24}},[n("el-input",{staticClass:"input",attrs:{disabled:"",placeholder:"应用名称"},model:{value:t.jobTpl.name,callback:function(e){t.$set(t.jobTpl,"name","string"===typeof e?e.trim():e)},expression:"jobTpl.name"}}),n("el-input",{staticClass:"input",attrs:{disabled:""===t.jobTpl,placeholder:"关键字查询"},model:{value:t.queryParam.queryName,callback:function(e){t.$set(t.queryParam,"queryName","string"===typeof e?e.trim():e)},expression:"queryParam.queryName"}}),n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{disabled:""===t.jobTpl},on:{click:t.fetchData}},[t._v("查询")]),n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{disabled:""===t.jobTpl},on:{click:t.handlerUpgrade}},[t._v("全部升级")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handlerSwitch}},[n("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}}),t._v("SWITCH ")]),n("el-tag",{staticStyle:{float:"right","margin-right":"45px"},attrs:{type:"success"}},[t._v(t._s(t.queryType?"Build Jobs":"Deployment Jobs")+" ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"任务名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.row.jobKey,placement:"top-start"}},[n("span",[t._v(t._s(e.row.name))])])]}}])}),n("el-table-column",{attrs:{label:"引擎模版",width:"550px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"tag-group"},t._l(e.row.jobEngines,(function(e){return n("span",{key:e.id},[n("el-tag",{attrs:{effect:"dark",type:e.needUpgrade?"warning":"success"}},[t._v(t._s(e.jenkinsInstance.name)+" - "+t._s(e.name)+" [version: "+t._s(e.tplVersion)+"] "),n("el-button",{staticStyle:{"margin-left":"10px",padding:"3px 0"},attrs:{type:"text"},on:{click:function(n){return t.handlerOpenJob(e)}}},[n("span",{staticStyle:{color:"#535353"}},[t._v("打开任务")])])],1)],1)})),0)]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.row.needUpgrade,expression:"scope.row.needUpgrade"}],attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(n){return t.handlerRowTplUpgrade(e.row)}}},[t._v("升级 ")])]}}])})],1),n("el-pagination",{attrs:{background:"","page-sizes":[10,15,20,25,30],layout:"sizes, prev, pager, next",total:t.pagination.total,"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize},on:{"current-change":t.paginationCurrentChange,"size-change":t.handleSizeChange}})],1)},v=[];function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w={name:"MyCiJobTable",data:function(){return{jobTpl:"",queryType:!0,tableData:[],options:{stripe:!0},loading:!1,pagination:{currentPage:1,pageSize:10,total:0},queryParam:{queryName:""}}},computed:S({},Object(l["mapState"])("d2admin/user",["info"])),mounted:function(){this.initPageSize()},beforeDestroy:function(){},components:{},methods:S({},Object(l["mapActions"])({setPageSize:"d2admin/user/set"}),{handleSizeChange:function(t){this.pagination.pageSize=t,this.info.pageSize=t,this.setPageSize(this.info),this.fetchData()},initPageSize:function(){"undefined"!==typeof this.info.pageSize&&(this.pagination.pageSize=this.info.pageSize)},handlerSwitch:function(){this.queryType=!this.queryType,this.fetchData()},initData:function(t){this.jobTpl=t,this.fetchData()},handlerOpenJob:function(t){window.open(t.jobUrl)},handlerUpgrade:function(){var t=this;null!=this.jobTpl&&Object(c["k"])(this.jobTpl.id).then((function(e){t.$message({type:"success",message:"升级成功!"}),t.fetchData()}))},handlerRowTplUpgrade:function(t){var e=this;this.queryType?Object(c["j"])(t.id).then((function(t){e.$message({type:"success",message:"升级成功!"}),e.fetchData()})):Object(c["i"])(t.id).then((function(t){e.$message({type:"success",message:"升级成功!"}),e.fetchData()}))},paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()},fetchData:function(){var t=this;0===this.tableData.length&&(this.loading=!0);var e={jobTplId:this.jobTpl.id,queryName:this.queryParam.queryName,page:this.pagination.currentPage,length:this.pagination.pageSize};this.queryType?Object(c["d"])(e).then((function(e){t.tableData=e.body.data,t.pagination.total=e.body.totalNum,t.loading=!1})):Object(c["c"])(e).then((function(e){t.tableData=e.body.data,t.pagination.total=e.body.totalNum,t.loading=!1}))}})},T=w,P=(n("299a"),function(t){t.options.__source="src/components/opscloud/jenkins/JobTable.vue"}),_=P,z=Object(g["a"])(T,j,v,!1,null,null,null);"function"===typeof _&&_(z);var D=z.exports,k={data:function(){return{title:"模版版本管理"}},components:{JobTplTable:y,JobTable:D},mounted:function(){},methods:{handlerSelTemplate:function(t){this.$refs.jobTable.initData(t)}}},q=k,x=(n("c757"),function(t){t.options.__source="src/pages/jenkins/job/template/version/index.vue"}),C=x,N=Object(g["a"])(q,a,i,!1,null,null,null);"function"===typeof C&&C(N);e["default"]=N.exports},"299a":function(t,e,n){"use strict";var a=n("b974"),i=n.n(a);i.a},4903:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"l",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return p})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"j",(function(){return g})),n.d(e,"i",(function(){return b})),n.d(e,"k",(function(){return h}));var a=n("9bd2"),i="/jenkins/tpl";function r(t){return Object(a["a"])({url:i+"/page/query",method:"post",data:t})}function o(t){return Object(a["a"])({url:i+"/add",method:"post",data:t})}function s(t){return Object(a["a"])({url:i+"/update",method:"put",data:t})}function l(t){return Object(a["a"])({url:i+"/write",method:"put",data:t})}function c(t){return Object(a["a"])({url:i+"/del?id="+t,method:"delete"})}function u(t){return Object(a["a"])({url:i+"/instance/query?instanceId="+t,method:"get"})}function p(t){return Object(a["a"])({url:i+"/read?id="+t,method:"get"})}function d(t){return Object(a["a"])({url:i+"/ci/job/page/query",method:"post",data:t})}function f(t){return Object(a["a"])({url:i+"/cd/job/page/query",method:"post",data:t})}function g(t){return Object(a["a"])({url:i+"/ci/job/upgrade?jobId="+t,method:"get"})}function b(t){return Object(a["a"])({url:i+"/cd/job/upgrade?jobId="+t,method:"get"})}function h(t){return Object(a["a"])({url:i+"/job/upgrade?tplId="+t,method:"get"})}},"874a":function(t,e,n){},b5eb:function(t,e,n){"use strict";var a=n("874a"),i=n.n(a);i.a},b974:function(t,e,n){},c757:function(t,e,n){"use strict";var a=n("e81e"),i=n.n(a);i.a},e81e:function(t,e,n){}}]);