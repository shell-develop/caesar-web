(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db96445e"],{2968:function(e,t){ace.define("ace/mode/yaml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var a=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"list.markup",regex:/^(?:-{3}|\.{3})\s*(?=#|$)/},{token:"list.markup",regex:/^\s*[\-?](?:$|\s)/},{token:"constant",regex:"!![\\w//]+"},{token:"constant.language",regex:"[&\\*][a-zA-Z0-9-_]+"},{token:["meta.tag","keyword"],regex:/^(\s*\w.*?)(:(?=\s|$))/},{token:["meta.tag","keyword"],regex:/(\w+?)(\s*:(?=\s|$))/},{token:"keyword.operator",regex:"<<\\w*:\\w*"},{token:"keyword.operator",regex:"-\\s*(?=[{])"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:/[|>][-+\d\s]*$/,onMatch:function(e,t,n,a){var r=/^\s*/.exec(a)[0];return n.length<1?n.push(this.next):n[0]="mlString",n.length<2?n.push(r.length):n[1]=r.length,this.token},next:"mlString"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:/(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)/},{token:"constant.numeric",regex:/[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/},{token:"constant.language.boolean",regex:"\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:/[^\s,:\[\]\{\}]+/}],mlString:[{token:"indent",regex:/^\s*$/},{token:"indent",regex:/^\s*/,onMatch:function(e,t,n){var a=n[1];return a>=e.length?(this.next="start",n.splice(0)):this.next="mlString",this.token},next:"mlString"},{token:"string",regex:".+"}]},this.normalizeRules()};a.inherits(i,r),t.YamlHighlightRules=i})),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){"use strict";var a=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t),r=n.match(/^(\s*\})/);if(!r)return 0;var i=r[1].length,o=e.findMatchingBracket({row:t,column:i});if(!o||o.row==t)return 0;var l=this.$getIndent(e.getLine(o.row));e.replace(new a(t,0,t,i-1),l)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r})),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,n){"use strict";var a=e("../../lib/oop"),r=e("./fold_mode").FoldMode,i=e("../../range").Range,o=t.FoldMode=function(){};a.inherits(o,r),function(){this.getFoldWidgetRange=function(e,t,n){var a=this.indentationBlock(e,n);if(a)return a;var r=/\S/,o=e.getLine(n),l=o.search(r);if(-1!=l&&"#"==o[l]){var s=o.length,u=e.getLength(),c=n,d=n;while(++n<u){o=e.getLine(n);var p=o.search(r);if(-1!=p){if("#"!=o[p])break;d=n}}if(d>c){var m=e.getLine(d).length;return new i(c,s,d,m)}}},this.getFoldWidget=function(e,t,n){var a=e.getLine(n),r=a.search(/\S/),i=e.getLine(n+1),o=e.getLine(n-1),l=o.search(/\S/),s=i.search(/\S/);if(-1==r)return e.foldWidgets[n-1]=-1!=l&&l<s?"start":"","";if(-1==l){if(r==s&&"#"==a[r]&&"#"==i[r])return e.foldWidgets[n-1]="",e.foldWidgets[n+1]="","start"}else if(l==r&&"#"==a[r]&&"#"==o[r]&&-1==e.getLine(n-2).search(/\S/))return e.foldWidgets[n-1]="start",e.foldWidgets[n+1]="","";return e.foldWidgets[n-1]=-1!=l&&l<r?"start":"",r<s?"start":""}}.call(o.prototype)})),ace.define("ace/mode/yaml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/yaml_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/coffee"],(function(e,t,n){"use strict";var a=e("../lib/oop"),r=e("./text").Mode,i=e("./yaml_highlight_rules").YamlHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,l=e("./folding/coffee").FoldMode,s=function(){this.HighlightRules=i,this.$outdent=new o,this.foldingRules=new l,this.$behaviour=this.$defaultBehaviour};a.inherits(s,r),function(){this.lineCommentStart=["#","//"],this.getNextLineIndent=function(e,t,n){var a=this.$getIndent(t);if("start"==e){var r=t.match(/^.*[\{\(\[]\s*$/);r&&(a+=n)}return a},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/yaml"}.call(s.prototype),t.Mode=s}))},4882:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[[n("div",[n("h1",[e._v(e._s(e.title))])]),n("el-row",{staticStyle:{"margin-bottom":"5px","margin-left":"0px"},attrs:{gutter:24}},[n("el-select",{staticClass:"select",attrs:{filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"搜索集群","remote-method":e.getCluster},on:{change:e.handlerSelCluster},model:{value:e.queryParam.clusterId,callback:function(t){e.$set(e.queryParam,"clusterId",t)},expression:"queryParam.clusterId"}},e._l(e.clusterOptions,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),n("el-select",{staticClass:"select",attrs:{filterable:"",clearable:"",remote:"",placeholder:"选择命名空间","remote-method":e.getNamespace,disabled:""===e.queryParam.clusterId},model:{value:e.queryParam.namespaceId,callback:function(t){e.$set(e.queryParam,"namespaceId",t)},expression:"queryParam.namespaceId"}},e._l(e.namespaceOptions,(function(e){return n("el-option",{key:e.id,attrs:{label:e.namespace,value:e.id}})})),1),n("el-input",{staticClass:"input",attrs:{placeholder:"输入关键字模糊查询"},model:{value:e.queryParam.queryName,callback:function(t){e.$set(e.queryParam,"queryName",t)},expression:"queryParam.queryName"}}),n("el-input",{staticClass:"input",attrs:{placeholder:"端口查询"},model:{value:e.queryParam.queryPort,callback:function(t){e.$set(e.queryParam,"queryPort",t)},expression:"queryParam.queryPort"}}),n("el-button",{staticStyle:{"margin-left":"5px"},on:{click:e.fetchData}},[e._v("查询")]),n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{disabled:""===e.queryParam.namespaceId},on:{click:e.handlerSync}},[e._v("同步 ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"namespace",label:"集群/命名空间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.cluster.name)+" / "+e._s(t.row.namespace))])]}}])}),n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{prop:"clusterIp",label:"集群ip"}}),n("el-table-column",{attrs:{prop:"application",label:"应用"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.application?n("span",[e._v(e._s(t.row.application.name))]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"instance",label:"实例"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!=t.row.instance?n("span",[e._v(e._s(t.row.instance.instanceName))]):e._e()]}}])}),n("el-table-column",{attrs:{prop:"ports",label:"端口",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"tag-group"},e._l(t.row.ports,(function(t){return n("div",{key:t.name},[n("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"名称: nodePort/port",placement:"top-start"}},[n("el-tag",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",effect:"dark"}},[e._v(e._s(t.name)+": "),n("span",{directives:[{name:"show",rawName:"v-show",value:null!==t.nodePort,expression:"item.nodePort !== null"}]},[e._v(e._s(t.nodePort)+"/")]),e._v(e._s(t.port))])],1)],1)})),0)]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{plain:"",size:"mini"},on:{click:function(n){return e.handlerRowYAMLEdit(t.row)}}},[e._v("YAML")]),n("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(n){return e.handlerRowDel(t.row)}}},[e._v("删除")])]}}])})],1),n("el-pagination",{attrs:{background:"","page-sizes":[10,15,20,25,30],layout:"sizes, prev, pager, next",total:e.pagination.total,"current-page":e.pagination.currentPage,"page-size":e.pagination.pageSize},on:{"current-change":e.paginationCurrentChange,"size-change":e.handleSizeChange}}),n("KubernetesEditYAMLDialog",{ref:"kubernetesEditYAMLDialog",attrs:{formStatus:e.formStatus},on:{closeDialog:e.fetchData}})]],2)},r=[],i=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),o=n("d670"),l=n("e4f7"),s=n("9bd2"),u="/kubernetes/service";function c(e){return Object(s["a"])({url:u+"/page/query",method:"post",data:e})}function d(e){return Object(s["a"])({url:u+"/del?id="+e,method:"delete"})}function p(e){return Object(s["a"])({url:u+"/sync?namespaceId="+e,method:"put"})}var m=n("5880");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={data:function(){return{title:"Kubernetes服务管理",formStatus:{visible:!1,operationType:!0,addTitle:"新增集群配置",updateTitle:"更新集群配置"},tableData:[],options:{stripe:!0},loading:!1,pagination:{currentPage:1,pageSize:10,total:0},queryParam:{queryName:"",queryPort:"",namespaceId:"",clusterId:""},clusterOptions:[],namespaceOptions:[]}},computed:h({},Object(m["mapState"])("d2admin/user",["info"])),mounted:function(){this.initPageSize(),this.getCluster(""),this.fetchData()},components:{KubernetesEditYAMLDialog:o["a"]},methods:h({},Object(m["mapActions"])({setPageSize:"d2admin/user/set"}),{handleSizeChange:function(e){this.pagination.pageSize=e,this.info.pageSize=e,this.setPageSize(this.info),this.fetchData()},initPageSize:function(){"undefined"!==typeof this.info.pageSize&&(this.pagination.pageSize=this.info.pageSize)},getCluster:function(e){var t=this,n={queryName:e,extend:0,page:1,length:10};Object(l["f"])(n).then((function(e){t.clusterOptions=e.body.data}))},handlerSync:function(){var e=this;p(this.queryParam.namespaceId).then((function(t){e.$message({type:"success",message:"后台同步中!"})}))},handlerRowYAMLEdit:function(e){this.$refs.kubernetesEditYAMLDialog.initData(e.deploymentYAML),this.formStatus.visible=!0,this.formStatus.operationType=!1},handlerSelCluster:function(){this.queryParam.namespaceId="",this.getNamespace()},getNamespace:function(){var e=this,t={queryName:"",clusterId:this.queryParam.clusterId,extend:0,page:1,length:10};Object(l["e"])(t).then((function(t){e.namespaceOptions=t.body.data}))},handlerRowDel:function(e){var t=this;this.$confirm("此操作将删除当前配置?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){d(e.id).then((function(e){t.fetchData(),t.$message({type:"success",message:"删除成功!"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},paginationCurrentChange:function(e){this.pagination.currentPage=e,this.fetchData()},fetchData:function(){var e=this;this.loading=!0;var t={queryName:this.queryParam.queryName,queryPort:this.queryParam.queryPort,namespaceId:this.queryParam.namespaceId,extend:1,page:this.pagination.currentPage,length:this.pagination.pageSize};c(t).then((function(t){e.tableData=t.body.data,e.pagination.total=t.body.totalNum,e.loading=!1}))}})},b=g,y=(n("c48c"),n("2877")),v=function(e){e.options.__source="src/pages/kubernetes/service/index.vue"},k=v,x=Object(y["a"])(b,a,r,!1,null,"a28362d8",null);"function"===typeof k&&k(x);t["default"]=x.exports},"7c1d":function(e,t,n){},b376:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s}));var a=n("9bd2"),r="/kubernetes/template";function i(e){return Object(a["a"])({url:r+"/page/query",method:"post",data:e})}function o(e){return Object(a["a"])({url:r+"/add",method:"post",data:e})}function l(e){return Object(a["a"])({url:r+"/update",method:"put",data:e})}function s(e){return Object(a["a"])({url:r+"/del?id="+e,method:"delete"})}},c48c:function(e,t,n){"use strict";var a=n("7c1d"),r=n.n(a);r.a},d670:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.formStatus.operationType?e.formStatus.addTitle:e.formStatus.updateTitle,visible:e.formStatus.visible},on:{"update:visible":function(t){return e.$set(e.formStatus,"visible",t)}}},[n("el-form",{attrs:{model:e.template}},[n("el-form-item",{attrs:{label:"名称","label-width":e.labelWidth,required:!0}},[n("el-input",{model:{value:e.template.name,callback:function(t){e.$set(e.template,"name",t)},expression:"template.name"}})],1),n("el-form-item",{attrs:{label:"模版类型","label-width":e.labelWidth,required:!0}},[n("el-select",{attrs:{filterable:"",clearable:"",placeholder:"选择模版类型"},model:{value:e.template.templateType,callback:function(t){e.$set(e.template,"templateType",t)},expression:"template.templateType"}},e._l(e.tplTypeOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"环境类型","label-width":e.labelWidth,required:!0}},[n("el-select",{attrs:{clearable:""},model:{value:e.template.envType,callback:function(t){e.$set(e.template,"envType",t)},expression:"template.envType"}},e._l(e.envTypeOptions,(function(e){return n("el-option",{key:e.id,attrs:{label:e.envName,value:e.envType}})})),1)],1),n("el-form-item",{attrs:{label:"描述","label-width":e.labelWidth}},[n("el-input",{model:{value:e.template.comment,callback:function(t){e.$set(e.template,"comment",t)},expression:"template.comment"}})],1),n("el-form-item",{attrs:{label:"YAML","label-width":e.labelWidth}},[n("editor",{attrs:{lang:"yaml",theme:"chrome",height:"400",options:e.options},on:{init:e.editorInit},model:{value:e.template.templateYaml,callback:function(t){e.$set(e.template,"templateYaml",t)},expression:"template.templateYaml"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.formStatus.visible=!1}}},[e._v("关闭")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.handlerSave}},[e._v("确定")])],1)],1)},r=[],i=n("b376"),o={enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0},l={data:function(){return{labelWidth:"100px",template:"",options:o,tplTypeOptions:[],envTypeOptions:[]}},name:"KubernetesEditYAMLDialog",props:["formStatus"],mounted:function(){},components:{editor:n("7c9e")},methods:{editorInit:function(){n("2099"),n("2968"),n("95b8"),n("ec5e")},initData:function(e,t,n){this.template=e,this.tplTypeOptions=t,this.envTypeOptions=n},handleClick:function(){this.$emit("input",!this.value)},handlerSave:function(){var e=this;setTimeout((function(){var t=Object.assign({},e.template);e.formStatus.operationType?Object(i["a"])(t).then((function(t){e.$message({message:"成功",type:"success"}),e.formStatus.visible=!1,e.$emit("closeDialog")})):Object(i["d"])(t).then((function(t){e.$message({message:"成功",type:"success"}),e.formStatus.visible=!1,e.$emit("closeDialog")}))}),600)}}},s=l,u=n("2877"),c=function(e){e.options.__source="src/components/opscloud/kubernetes/KubernetesEditYAMLDialog.vue"},d=c,p=Object(u["a"])(s,a,r,!1,null,null,null);"function"===typeof d&&d(p);t["a"]=p.exports},e4f7:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"i",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return m}));var a=n("9bd2"),r="/kubernetes/cluster";function i(e){return Object(a["a"])({url:r+"/page/query",method:"post",data:e})}function o(e){return Object(a["a"])({url:r+"/add",method:"post",data:e})}function l(e){return Object(a["a"])({url:r+"/update",method:"put",data:e})}function s(e){return Object(a["a"])({url:r+"/del?id="+e,method:"delete"})}function u(e){return Object(a["a"])({url:r+"/namespace/page/query",method:"post",data:e})}function c(e){return Object(a["a"])({url:r+"/namespace/add",method:"post",data:e})}function d(e){return Object(a["a"])({url:r+"/namespace/update",method:"put",data:e})}function p(e){return Object(a["a"])({url:r+"/namespace/del?id="+e,method:"delete"})}function m(e){return Object(a["a"])({url:r+"/namespace/exclude/query",method:"post",data:e})}},ec5e:function(e,t){ace.define("ace/snippets/yaml",["require","exports","module"],(function(e,t,n){"use strict";t.snippetText=void 0,t.scope="yaml"}))}}]);