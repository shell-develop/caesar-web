(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1180838e"],{"2d8e":function(e,t,r){"use strict";r.d(t,"h",(function(){return a})),r.d(t,"g",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"m",(function(){return c})),r.d(t,"j",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"l",(function(){return g})),r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"k",(function(){return m})),r.d(t,"i",(function(){return f}));var n=r("9bd2");function a(e,t,r,a){return Object(n["a"])({url:"/user/page/query?username="+e+"&extend="+t+"&page="+r+"&length="+a,method:"get"})}function o(){return Object(n["a"])({url:"/user/detail",method:"get"})}function i(e){return Object(n["a"])({url:"/user/page/fuzzy/query",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/user/create",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/user/update",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/user/retire?id="+e,method:"put"})}function l(e){return Object(n["a"])({url:"/user/del?id="+e,method:"delete"})}function d(){return Object(n["a"])({url:"/user/password/random",method:"get"})}function g(){return Object(n["a"])({url:"/user/ldap/sync",method:"get"})}function p(e){return Object(n["a"])({url:"/user/token/apply",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/user/token/del?id="+e,method:"delete"})}function m(e){return Object(n["a"])({url:"/user/credential/save",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/user/server/tree/query",method:"post",data:e})}},"446e":function(e,t){ace.define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var n=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,o=t.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",i=t.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",s=function(){var e=this.createKeywordMapper({keyword:o,"support.function.builtin":i,"invalid.deprecated":"debugger"},"identifier"),t="(?:(?:[1-9]\\d*)|(?:0))",r="(?:\\.\\d+)",n="(?:\\d+)",a="(?:(?:"+n+"?"+r+")|(?:"+n+"\\.))",s="(?:(?:"+a+"|"+n+"))",c="(?:"+s+"|"+a+")",u="(?:&"+n+")",l="[a-zA-Z_][a-zA-Z0-9_]*",d="(?:"+l+"(?==))",g="(?:\\$(?:SHLVL|\\$|\\!|\\?))",p="(?:"+l+"\\s*\\(\\))";this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string.start",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string.end",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(e,t,r){var n="-"==e[2]?"indentedHeredoc":"heredoc",a=e.split(this.splitRegex);return r.push(n,a[4]),[{type:"constant",value:a[1]},{type:"text",value:a[2]},{type:"string",value:a[3]},{type:"support.class",value:a[4]},{type:"string",value:a[5]}]},rules:{heredoc:[{onMatch:function(e,t,r){return e===r[1]?(r.shift(),r.shift(),this.next=r[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^\t+"},{onMatch:function(e,t,r){return e===r[1]?(r.shift(),r.shift(),this.next=r[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(e,t){return"heredoc"===t[0]||"indentedHeredoc"===t[0]?t[0]:e}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:g},{token:"variable",regex:d},{include:"variables"},{token:"support.function",regex:p},{token:"support.function",regex:u},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:c},{token:"constant.numeric",regex:t+"\\b"},{token:e,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};n.inherits(s,a),t.ShHighlightRules=s})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,r){"use strict";var n=e("../../lib/oop"),a=e("../../range").Range,o=e("./fold_mode").FoldMode,i=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(i,o),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var n=e.getLine(r);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var a=this._getFoldWidgetBase(e,t,r);return!a&&this.startRegionRe.test(n)?"start":a},this.getFoldWidgetRange=function(e,t,r,n){var a=e.getLine(r);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,r);var o=a.match(this.foldingStartMarker);if(o){var i=o.index;if(o[1])return this.openingBracketBlock(e,o[1],r,i);var s=e.getCommentFoldRange(r,i+o[0].length,1);return s&&!s.isMultiLine()&&(n?s=this.getSectionRange(e,r):"all"!=t&&(s=null)),s}if("markbegin"!==t){o=a.match(this.foldingStopMarker);if(o){i=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],r,i):e.getCommentFoldRange(r,i,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),n=r.search(/\S/),o=t,i=r.length;t+=1;var s=t,c=e.getLength();while(++t<c){r=e.getLine(t);var u=r.search(/\S/);if(-1!==u){if(n>u)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=o)break;if(l.isMultiLine())t=l.end.row;else if(n==u)break}s=t}}return new a(o,i,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,r){var n=t.search(/\s*$/),o=e.getLength(),i=r,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,c=1;while(++r<o){t=e.getLine(r);var u=s.exec(t);if(u&&(u[1]?c--:c++,!c))break}var l=r;if(l>i)return new a(i,n,l,t.length)}}.call(i.prototype)})),ace.define("ace/mode/sh",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sh_highlight_rules","ace/range","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],(function(e,t,r){"use strict";var n=e("../lib/oop"),a=e("./text").Mode,o=e("./sh_highlight_rules").ShHighlightRules,i=e("../range").Range,s=e("./folding/cstyle").FoldMode,c=e("./behaviour/cstyle").CstyleBehaviour,u=function(){this.HighlightRules=o,this.foldingRules=new s,this.$behaviour=new c};n.inherits(u,a),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,r){var n=this.$getIndent(t),a=this.getTokenizer().getLineTokens(t,e),o=a.tokens;if(o.length&&"comment"==o[o.length-1].type)return n;if("start"==e){var i=t.match(/^.*[\{\(\[:]\s*$/);i&&(n+=r)}return n};var e={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(t,r,n){if("\r\n"!==n&&"\r"!==n&&"\n"!==n)return!1;var a=this.getTokenizer().getLineTokens(r.trim(),t).tokens;if(!a)return!1;do{var o=a.pop()}while(o&&("comment"==o.type||"text"==o.type&&o.value.match(/^\s+$/)));return!!o&&("keyword"==o.type&&e[o.value])},this.autoOutdent=function(e,t,r){r+=1;var n=this.$getIndent(t.getLine(r)),a=t.getTabString();n.slice(-a.length)==a&&t.remove(new i(r,n.length-a.length,r,n.length))},this.$id="ace/mode/sh"}.call(u.prototype),t.Mode=u}))},b06d:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return s}));var n=r("9bd2");function a(e,t,r,a){return Object(n["a"])({url:"/server/group/type/page/query?name="+e+"&grpType="+t+"&page="+r+"&length="+a,method:"get"})}function o(e){return Object(n["a"])({url:"/server/group/type/add",method:"post",data:e})}function i(e){return Object(n["a"])({url:"/server/group/type/del?id="+e,method:"delete"})}function s(e){return Object(n["a"])({url:"/server/group/type/update",method:"put",data:e})}},b3df:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",[[r("div",[r("h1",[e._v("批量命令")])]),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:8}},[r("ServerTree",{ref:"serverTree"})],1),r("el-col",{attrs:{span:16}},[r("el-tooltip",{attrs:{content:"系统命令输入框",placement:"bottom",effect:"light"}},[r("editor",{attrs:{lang:"sh",theme:"chrome",width:"800",height:"80",options:e.options},on:{init:e.editorInit},model:{value:e.executorCommandParam.command,callback:function(t){e.$set(e.executorCommandParam,"command",t)},expression:"executorCommandParam.command"}})],1),r("el-row",{staticStyle:{"margin-top":"5px"},attrs:{gutter:10}},[r("el-col",{attrs:{span:6}},[r("el-tooltip",{attrs:{content:"并发线程数",placement:"bottom",effect:"light"}},[r("el-slider",{attrs:{min:2,max:10,step:2,"show-stops":""},model:{value:e.executorCommandParam.concurrent,callback:function(t){e.$set(e.executorCommandParam,"concurrent",t)},expression:"executorCommandParam.concurrent"}})],1)],1),r("el-col",{attrs:{span:2}},[r("el-tooltip",{attrs:{content:"批量命令执行",placement:"bottom",effect:"light"}},[r("el-button",{style:e.searchBarStyle,on:{click:e.executorCommand}},[e._v("执行")])],1)],1)],1),r("AnsibleResult",{ref:"ansibleResult"})],1)],1)]],2)},a=[],o=r("c8c3"),i=r("ebec"),s=r("67ee"),c={data:function(){return{taskId:"",searchBarHeadStyle:{display:"inline-block",maxWidth:"200px"},searchBarStyle:{marginLeft:"5px"},serverGroup:{},uuid:"",options:{stripe:!0},executorCommandParam:{command:"",concurrent:4,becomeUser:"",hostPatterns:[],uuid:"",taskType:0}}},mounted:function(){},components:{ServerTree:o["a"],AnsibleResult:i["a"],editor:r("7c9e")},methods:{editorInit:function(){r("2099"),r("446e"),r("95b8"),r("ec5e")},executorCommand:function(){var e=this;try{var t=Object.assign({},this.executorCommandParam);t.uuid=this.$refs.serverTree.getUuid(),t.hostPatterns=this.$refs.serverTree.getCheckedKeys(!0),console.log(JSON.stringify(t)),Object(s["h"])(t).then((function(t){t.success?(e.$message({message:"任务执行中!",type:"success"}),e.$refs.ansibleResult.initData(t.body.id)):e.$message.error(t.msg)}))}catch(r){console.log(r)}}}},u=c,l=r("2877"),d=function(e){e.options.__source="src/pages/task/command/index.vue"},g=d,p=Object(l["a"])(u,n,a,!1,null,null,null);"function"===typeof g&&g(p);t["default"]=p.exports},c8c3:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticStyle:{"margin-bottom":"5px","margin-left":"2px"}},[r("el-input",{style:e.searchBarHeadStyle,attrs:{placeholder:"名称"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}}),r("el-select",{style:e.searchBarStyle,attrs:{filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"输入关键词搜组类型","remote-method":e.getGrpType,loading:e.loading},model:{value:e.queryParam.grpType,callback:function(t){e.$set(e.queryParam,"grpType",t)},expression:"queryParam.grpType"}},e._l(e.grpTypeOptions,(function(e){return r("el-option",{key:e.grpType,attrs:{label:e.name,value:e.grpType}})})),1),r("el-button",{style:e.searchBarStyle,attrs:{loading:e.searching},on:{click:e.fetchData}},[e._v("查询")]),e._e(),r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"5px"},attrs:{shadow:"never"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[r("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}})]),r("el-tag",{staticStyle:{float:"right"},attrs:{"disable-transitions":""}},[e._v("Size: "+e._s(e.serverSize))])],1),r("el-tree",{ref:"myServerTree",attrs:{data:e.serverTree.tree,"show-checkbox":"","node-key":"id"}})],1)],1)},a=[],o=(r("b0c0"),r("b06d")),i=r("2d8e"),s=r("67ee"),c={data:function(){return{serverSize:0,loading:!1,grpTypeOptions:[],searching:!1,creating:!1,searchBarHeadStyle:{display:"inline-block",maxWidth:"200px"},searchBarStyle:{marginLeft:"5px"},queryParam:{name:"",grpType:""},serverTree:{}}},name:"ServerTree",props:[],mixins:[],mounted:function(){this.getGrpType("")},methods:{getGrpType:function(e){var t=this;Object(o["c"])(e,"",1,10).then((function(e){t.grpTypeOptions=e.body.data}))},createAnsibleHostsCfg:function(){var e=this;this.creating=!0,Object(s["e"])().then((function(t){t.success?e.$message({message:"ansible主机配置文件创建成功!",type:"success"}):e.$message.error(t.msg),e.creating=!1}))},getCheckedKeys:function(e){return this.$refs.myServerTree.getCheckedKeys(e)},getUuid:function(){return this.serverTree.uuid},fetchData:function(){var e=this;this.searching=!0,this.uuid="";var t={queryName:this.queryParam.name,grpType:this.queryParam.grpType};Object(i["i"])(t).then((function(t){e.serverTree=t.body,e.serverSize=t.body.size||0,e.uuid=t.body.uuid,e.searching=!1}))}}},u=c,l=r("2877"),d=function(e){e.options.__source="src/components/opscloud/tree/ServerTree.vue"},g=d,p=Object(l["a"])(u,n,a,!1,null,null,null);"function"===typeof g&&g(p);t["a"]=p.exports},ec5e:function(e,t){ace.define("ace/snippets/yaml",["require","exports","module"],(function(e,t,r){"use strict";t.snippetText=void 0,t.scope="yaml"}))}}]);