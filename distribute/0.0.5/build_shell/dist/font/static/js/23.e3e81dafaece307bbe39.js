webpackJsonp([23],{PUO8:function(t,a){},oF3q:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s("Dd8w"),r=s.n(n),e=s("NYxO"),o={name:"ProjectInfo",props:["project"],data:function(){return{}},computed:r()({},Object(e.c)(["appBodyHeight","userInfo"]),Object(e.c)("projectglobal",["createDocumentType"]),Object(e.c)("document",["breadNav"]),{containerHeight:function(){return this.appBodyHeight}}),methods:r()({},Object(e.d)("projectglobal",["setCreateDocumentType","setCreateDialogShow"])),created:function(){var t=this;this.$axios.get("/api/common/dicconfig/5/dicconfigs").then(function(a){t.platforms=a.data.result},function(t){}),this.$axios.get("/api/common/users/list").then(function(a){t.userList=a.data.result},function(t){}),this.$axios.get("/api/project/products").then(function(a){t.products=a.data.result},function(t){}),this.projectInfo=this.project},mounted:function(){},watch:{project:function(){this.projectInfo=this.project}},components:{}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{style:"overflow-y:auto;height:"+t.containerHeight+"px"},[s("div",{staticClass:"info-body"},[s("Card",{staticClass:"member-card",staticStyle:{"background-color":"#f0f0f0"},attrs:{bordered:!1,"dis-hover":""}},[s("Row",{staticStyle:{"font-size":"14px"}},[s("i-col",{attrs:{span:"6"}},[s("span",[t._v("名称")])]),t._v(" "),s("i-col",{attrs:{span:"6"}},[s("span",[t._v("用法")])]),t._v(" "),s("i-col",{attrs:{span:"12"}},[s("span",[t._v("说明")])])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          WORKSPACE\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${WORKSPACE}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          代表当前任务在Agent上的工作目录\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          BUILDTOOL\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${BUILDTOOL}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          Agent上的构建工具目录\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          BUILDVERSION\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${BUILDVERSION}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          代表当前任务的构建版本，根据构建次数自增\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          COMMONSPACE\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${COMMONSPACE}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          各构建任务可以共享的一个目录\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          BUILDBACKUPSPACE\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${BUILDBACKUPSPACE}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          根据构建版本自动创建的目录，不会随任务执行清除\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          TASKID\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${TASKID}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          构建任务ID\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          TASKNAME\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${TASKNAME}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          构建任务名称\n        ")])],1)],1),t._v(" "),s("Card",{staticClass:"member-card",attrs:{bordered:!1,"dis-hover":""}},[s("Row",[s("i-col",{attrs:{span:"6"}},[t._v("\n          HISTORYID\n        ")]),t._v(" "),s("i-col",{attrs:{span:"6"}},[t._v("\n          ${HISTORYID}\n        ")]),t._v(" "),s("i-col",{attrs:{span:"12"}},[t._v("\n          构建任务记录ID,使用记录相关API获取上传package下载URL\n        ")])],1)],1)],1)])},staticRenderFns:[]};var i=s("VU/8")(o,c,!1,function(t){s("PUO8")},"data-v-e30d1af0",null);a.default=i.exports}});
//# sourceMappingURL=23.e3e81dafaece307bbe39.js.map