(function(t){function e(e){for(var r,o,c=e[0],u=e[1],i=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"37bc":function(t,e,n){"use strict";var r=n("790f"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{attrs:{id:"header-css"}},[n("step-progress",{attrs:{steps:t.mySteps,"current-step":t.currentStep,"icon-class":"fa fa-check"}})],1),n("div",{attrs:{id:"body"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],staticClass:"start-button",on:{click:t.showButtonTrigger}},[t._v("スタート")]),n("router-view")],1)])},s=[],o=n("46e0"),c=n.n(o),u=(n("c91a"),{name:"app",components:{"step-progress":c.a},data:function(){return{showButton:!0,mySteps:["Learn Vue","Open Source","???","Profit"],currentStep:0,activeColor:"red",passiveColor:"gray",lineThickness:12,activeThickness:5,passiveThickness:5}},methods:{showButtonTrigger:function(){this.showButton=!1,this.$router.push("/views/start")}}}),i=u,l=(n("034f"),n("2877")),f=Object(l["a"])(i,a,s,!1,null,null,null),d=f.exports,h=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start-container"},[n("div",{staticClass:"Question-view"},[n("Question",{attrs:{"question-data":t.answerData}})],1),n("div",{staticClass:"QuizButton-con"},t._l(t.buttonData,(function(t,e){return n("div",{key:"first-"+e,staticClass:"QuizButton-view"},[n("QuizButton",{attrs:{"button-data":[t,e]}})],1)})),0),n("div",{staticClass:"AnswerButton-con"},t._l(t.buttonData,(function(e,r){return n("div",{key:"second-"+r,staticClass:"AnswerButton-view"},[n("AnswerButton",{attrs:{"answer-data":[e,r]},on:{ans:t.anscheack}})],1)})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{id:"overlay"}},[n("div",{attrs:{id:"content"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.showCrrect,expression:"showCrrect"}]},[t._v("せいかい！")]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.showWrong,expression:"showWrong"}]},[t._v("はずれ！")]),n("button",{on:{click:t.closeAction}},[t._v("次へ")])])])])},v=[],w=(n("96cf"),n("1da1")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quizbuttons-container"},[n("button",{staticClass:"replay-button",class:t.color1,on:{click:t.voiceReplay}},[n("div",{staticClass:"innerButton"})])])},m=[],g=(n("07ac"),n("ac1f"),n("5319"),{name:"QuizButton",props:{buttonData:[Array]},data:function(){return{color1:"default-class1"}},created:function(){var t=this.buttonData[1];this.color1=0===t?"outer-class1":1===t?"outer-class2":2===t?"outer-class3":"outer-class4"},methods:{voiceReplay:function(){var t=Object.values(this.buttonData[0])[0],e=t.replace("/front/public","");console.log("data",e);var n=new Audio(e);n.play()}}}),C=g,D=(n("a4d2"),Object(l["a"])(C,b,m,!1,null,"4a95c000",null)),y=D.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-container"},[n("div",{staticClass:"q-text"},[t._v(t._s(t.questionData))])])},_=[],O={name:"Qestion",props:["questionData"]},k=O,j=(n("37bc"),Object(l["a"])(k,x,_,!1,null,"49c5c015",null)),$=j.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answerbuttons-container"},[n("div",{staticClass:"vertical-line",class:t.color1}),n("button",{staticClass:"answer-button",class:t.color1,on:{click:t.answer}},[n("div",{staticClass:"innerButton"})])])},B=[],P=(n("b64b"),{name:"AnswerButton",props:{answerData:[Array]},data:function(){return{color1:"default-class1",color2:"default-class2"}},created:function(){var t=this.answerData[1];this.color1=0===t?"outer-class1":1===t?"outer-class2":2===t?"outer-class3":"outer-class4"},methods:{answer:function(){var t=Object.keys(this.answerData[0])[0];console.log("answer",t),this.$emit("ans",t)}}}),Q=P,A=(n("a9f8"),Object(l["a"])(Q,q,B,!1,null,"2ec433df",null)),S=A.exports,R=n("2f62"),M=n("bc3a"),T=n.n(M);r["a"].use(R["a"]);var E=new R["a"].Store({strict:!0,state:{data:null,count:0,correctCount:0},getters:{getData:function(t){return t.data}},mutations:{setData:function(t,e){t.data=e.getquestion},countPlus:function(t){t.count++},correctCountPlus:function(t){t.correctCount++},resetData:function(t){t.data=null},resetCount:function(t){t.count=0},resetCorrectCount:function(t){t.correctCount=0}},actions:{getQuestionAction:function(t){return Object(w["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/views/start").then((function(t){return t.data}));case 2:n=e.sent,r={getquestion:n},t.commit("setData",r);case 5:case"end":return e.stop()}}),e)})))()},getCountPlus:function(t){t.commit("countPlus")},getCrrectCountPlus:function(t){t.commit("correctCountPlus")},executeReset:function(t){t.commit("resetData"),t.commit("resetCount"),t.commit("resetCorrectCount")}}}),z={name:"start",components:{QuizButton:y,Question:$,AnswerButton:S},data:function(){return{loading:!1,qData:this.$store.state.data,buttonData:Array,answerData:String,showModal:!1,showCrrect:!1,showWrong:!1}},beforeRouteEnter:function(t,e,n){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("api start"),t.next=3,E.dispatch("getQuestionAction");case 3:n(),console.log("api end",E.state.data);case 5:case"end":return t.stop()}}),t)})))()},computed:{getStoreData:function(){return this.$store.state.data}},created:function(){this.buttonData=this.qData.createQ.buttons,this.answerData=this.qData.createQ.question,console.log("qData",this.qData),console.log("buttonData",this.buttonData)},methods:{anscheack:function(t){this.showModal=!0,t===this.answerData?(this.showCrrect=!0,E.dispatch("getCrrectCountPlus"),console.log("correct count",this.$store.state.correctCount)):this.showWrong=!0},closeAction:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.showModal=!1,t.showCrrect=!1,t.showWrong=!1,!(t.$store.state.count<3)){e.next=11;break}return E.dispatch("getCountPlus"),e.next=7,E.dispatch("getQuestionAction");case 7:t.qData=t.$store.state.data,console.log("count",t.$store.state.count),e.next=12;break;case 11:t.$router.push("/views/result");case 12:case"end":return e.stop()}}),e)})))()}},watch:{qData:function(){this.buttonData=this.qData.createQ.buttons,this.answerData=this.qData.createQ.question}}},W=z,N=(n("b70c"),Object(l["a"])(W,p,v,!1,null,null,null)),J=N.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"result-View"}},[n("p",[t._v("10問中、"+t._s(t.resultData)+"正解です！！")]),n("div",{staticClass:"reset-button"},[n("button",{on:{click:t.resetTriger}},[t._v("最初から")])])])},L=[],F={name:"result",data:function(){return{resultData:this.$store.state.correctCount}},computed:{getStoreData:function(){return this.$store.state.correctCount}},methods:{resetTriger:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.dispatch("executeReset");case 2:t.$router.push("/views/start"),console.log("reset",t.$store.state.data);case 4:case"end":return e.stop()}}),e)})))()}}},G=F,H=(n("6dec"),Object(l["a"])(G,V,L,!1,null,"36a8e2d5",null)),I=H.exports;r["a"].use(h["a"]);var K=new h["a"]({base:"/",mode:"history",routes:[{path:"/views/start",name:"start",component:J},{path:"/views/result",name:"result",component:I}]});r["a"].config.devtools=!0,new r["a"]({store:E,router:K,render:function(t){return t(d)}}).$mount("#app")},"5abb":function(t,e,n){},"6dec":function(t,e,n){"use strict";var r=n("d614"),a=n.n(r);a.a},"790f":function(t,e,n){},"85ec":function(t,e,n){},a4d2:function(t,e,n){"use strict";var r=n("cc53"),a=n.n(r);a.a},a9f8:function(t,e,n){"use strict";var r=n("5abb"),a=n.n(r);a.a},b70c:function(t,e,n){"use strict";var r=n("cd78"),a=n.n(r);a.a},cc53:function(t,e,n){},cd78:function(t,e,n){},d614:function(t,e,n){}});
//# sourceMappingURL=app.7fd4b346.js.map