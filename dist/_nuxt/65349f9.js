(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,4],{382:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("fca9a8f8",content,!0,{sourceMap:!1})},383:function(t,e,n){"use strict";n.r(e);n(28),n(25),n(29);var o={name:"Gift",props:{trigger:{type:Date,default:!1},config:{type:Object,required:!0},isMobileMedia:{default:!1,type:Boolean}},data:function(){return{isRunning:!1,currentDeg:0,targetDeg:0,giftsDeg:[],randomDeg:0}},computed:{displayType:function(){return this.config.run3D?"three-dimension":"flat"},rotate:function(){return 360/this.config.gifts.length},translateZ:function(){var t=this.config.height;return this.isMobileMedia&&(t=.25*window.innerWidth),t/2/Math.tan(this.rotate/2/180*Math.PI)},playResultRotate:function(){return this.$store.state.playResultRotate}},watch:{config:{handler:function(){this.setConfig()},deep:!0},trigger:function(){this.autoTurn()},isRunning:function(){var t=this;this.isRunning&&setTimeout((function(){t.autoTurnStop()}),this.config.duration+200)}},mounted:function(){this.setConfig(),this.logGiftsDeg()},destroyed:function(){},methods:{logGiftsDeg:function(){var t=this;this.config.gifts.forEach((function(e,n){t.giftsDeg[n]={from:0===n?0:t.giftsDeg[n-1].to,to:0===n?t.rotate:t.giftsDeg[n-1].to+t.rotate,name:e.name}}))},setConfig:function(){this.$el.style.setProperty("--rotateY","".concat(this.config.rotateY,"deg")),this.$el.style.setProperty("--duration","".concat(this.config.duration,"ms")),this.$el.style.setProperty("--fontSize","".concat(this.config.fontSize,"px")),this.$el.style.setProperty("--currentDeg","-".concat(this.currentDeg,"deg"))},autoTurn:function(){0==this.playResultRotate?this.randomDeg=360*Math.random()+1800:this.randomDeg=this.playResultRotate+1800,this.randomDeg-=this.randomDeg%this.rotate,this.targetDeg=this.randomDeg;var t=this.config.rollback?Math.random()*this.config.rollback+1:1;this.$el.style.setProperty("--targetDeg","-".concat(this.targetDeg,"deg")),this.$el.style.setProperty("--rollBackDeg","".concat(t)),this.isRunning=!0},autoTurnStop:function(){this.currentDeg=this.targetDeg%360,this.$el.style.setProperty("--currentDeg","-".concat(this.currentDeg,"deg"));var t=this.currentDeg+this.rotate/2;this.giftsDeg.forEach((function(e){t>=e.from&&t<=e.to&&e.name})),this.isRunning=!1,this.$emit("finished")}}},c=(n(384),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["gift-container",t.displayType,{autoTurn:t.isRunning}]},t._l(t.isMobileMedia?t.config.gifts_mb:t.config.gifts,(function(e,o){return n("div",{key:o,class:["gift",t.config.style],style:"transform: rotateX("+t.rotate*o+"deg) translateZ("+t.translateZ+"px)"},["text"===e.type?[t._v(t._s(e.name))]:t._e(),t._v(" "),"image"===e.type?[n("div",{staticClass:"giftImg",style:{backgroundImage:"url("+e.path+")"}})]:t._e()],2)})),0)}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,n){"use strict";n(382)},385:function(t,e,n){var o=n(26)(!1);o.push([t.i,".gift-container{-webkit-perspective:999999px;perspective:999999px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;padding:3.5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:7.8vw;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.gift-container *{-webkit-box-sizing:border-box;box-sizing:border-box}@media (max-width:768px){.gift-container{width:16vw;height:23vw;margin:0 3.2%;padding:0}}.gift-container .gift{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:8vw;height:11vw;background-color:#fff2ea;font-size:var(--fontSize)}@media (max-width:768px){.gift-container .gift{width:14.0625vw;height:26.5625vw}}.gift-container .gift .giftImg{width:100%;height:100%;background-size:110%;background-position:50%;background-repeat:no-repeat}@media (max-width:768px){.gift-container .gift .giftImg{width:14.0625vw;height:26.5625vw}}.gift-container.flat{-webkit-transform:rotateX(var(--currentDeg));transform:rotateX(var(--currentDeg))}.gift-container.flat.autoTurn{-webkit-transition:var(--duration) ease-in-out;transition:var(--duration) ease-in-out;-webkit-transform:rotateX(var(--targetDeg));transform:rotateX(var(--targetDeg))}.gift-container.three-dimension{-webkit-transform:rotateY(var(--rotateY)) rotateX(var(--currentDeg));transform:rotateY(var(--rotateY)) rotateX(var(--currentDeg))}.gift-container.three-dimension.autoTurn{-webkit-transition:var(--duration) cubic-bezier(.1,0,0,var(--rollBackDeg));transition:var(--duration) cubic-bezier(.1,0,0,var(--rollBackDeg));-webkit-transform:rotateY(var(--rotateY)) rotateX(var(--targetDeg));transform:rotateY(var(--rotateY)) rotateX(var(--targetDeg))}",""]),t.exports=o},386:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("47858250",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(386)},388:function(t,e,n){var o=n(26)(!1);o.push([t.i,'#DemoSlotMachine .settings[data-v-08cb186c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:2vw}#DemoSlotMachine .settings .btn[data-v-08cb186c]{margin-right:20px;padding:15px 30px;outline:none;border:none;border-radius:10px;background-color:#42b983;color:#fff;font-size:16px;cursor:pointer;-webkit-transition:.15s;transition:.15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#DemoSlotMachine .settings .btn[data-v-08cb186c]:disabled{background-color:#ddd;cursor:not-allowed}#DemoSlotMachine .settings .displayType[data-v-08cb186c]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}#DemoSlotMachine .settings .displayType[data-v-08cb186c]:after{position:absolute;display:block;left:100%;margin-left:10px;font-size:16px;content:"3D模式";white-space:nowrap}#DemoSlotMachine .settings .displayType[data-v-08cb186c]:disabled{background-color:#ddd;cursor:not-allowed}#DemoSlotMachine .resultHistory[data-v-08cb186c]{position:absolute;-webkit-transform:translateZ(99999px);transform:translateZ(99999px);z-index:999;min-width:300px;height:400px;padding:20px;border:5px solid #333;border-radius:30px;background-color:#fff;-webkit-box-shadow:5px 5px 15px rgba(0,0,0,.4);box-shadow:5px 5px 15px rgba(0,0,0,.4);opacity:0;-webkit-transition:.5s;transition:.5s;overflow-y:auto;visibility:hidden}#DemoSlotMachine .resultHistory .result[data-v-08cb186c]{padding:15px;list-style:none;font-size:30px}#DemoSlotMachine .resultHistory.openResultHistory[data-v-08cb186c]{opacity:1;visibility:visible}',""]),t.exports=o},390:function(t,e,n){"use strict";n.r(e);n(28),n(25);var o=n(35),c={name:"DemoSlotMachine",components:{Gift:n(383).default},props:{data:{default:function(){return{}},type:Object},isMobileMedia:{default:!1,type:Boolean}},data:function(){return{run3D:!0,trigger:null,disabled:!1,configs:[{run3D:!1,rotateY:-25,duration:4e3,rollback:.3,fontSize:100,height:190,width:120,gifts:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/01.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/05.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/09.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/13.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/09.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/13.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/01.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/05.png")}],gifts_mb:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/01.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/05.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/09.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/13.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/09.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/13.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/01.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/05.png")}]},{run3D:!1,rotateY:-25,duration:5e3,rollback:.3,fontSize:100,height:190,width:120,gifts:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/02.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/06.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/10.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/14.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/10.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/14.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/02.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/06.png")}],gifts_mb:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/02.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/06.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/10.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/14.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/10.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/14.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/02.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/06.png")}]},{run3D:!1,rotateY:-25,duration:6e3,rollback:.3,fontSize:100,height:190,width:120,gifts:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/03.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/07.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/11.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/15.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/11.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/15.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/03.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/07.png")}],gifts_mb:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/03.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/07.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/11.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/15.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/11.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/15.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/03.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/07.png")}]},{run3D:!1,rotateY:-25,duration:7e3,rollback:.3,fontSize:100,height:190,width:120,gifts:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/04.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/08.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/12.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/16.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/12.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/16.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/04.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/08.png")}],gifts_mb:[{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/04.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/08.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/12.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/16.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/12.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/16.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/04.png")},{type:"image",path:"".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/08.png")}]}],openResultHistory:!1,result:[],resultHistory:[]}},watch:{"$store.state.turnDisabled":function(){var t=this;this.$store.state.turnDisabled&&(window.OB_barAnime(this.isMobileMedia),setTimeout((function(){t.trigger=new Date}),"800"))}},methods:{isFinished:function(t){var e=this.$el.querySelectorAll(".autoTurn");this.result.push(t),1===e.length&&(this.$store.commit("turnDisabled",!1),this.$emit("turnFinish"),o.a.to(".machineBallClick-anime",{ease:"power2.out",duration:.2,opacity:1}),this.resultHistory.push(this.result),this.result=[])},changeDisplayMode:function(t){this.configs.forEach((function(e){return e.run3D=t.target.checked}))}}},r=(n(387),n(18)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"DemoSlotMachine"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.openResultHistory=!1}}},[n("div",{staticClass:"giftBox"},[n("div",{staticClass:"giftBox-anime"},[n("div",{staticClass:"giftBox-anime-obj"},[n("div",{staticClass:"container"},[n("div",{staticClass:"giftBorderBox"},[t._l(4,(function(t,e){return n("div",{key:e,staticClass:"giftBorder"})})),t._v(" "),n("div",{staticClass:"giftContainerBox"},t._l(t.configs,(function(e,o){return n("Gift",{key:o,attrs:{"is-mobile-media":t.isMobileMedia,trigger:t.trigger,config:e},on:{finished:t.isFinished}})})),1),t._v(" "),n("div",{staticClass:"blurContainer"},t._l(4,(function(t,e){return n("div",{key:e,staticClass:"giftBlur"})})),0)],2)])])])]),t._v(" "),n("div",{staticClass:"settings"})])}),[],!1,null,"08cb186c",null);e.default=component.exports;installComponents(component,{Gift:n(383).default})},393:function(t,e,n){"use strict";n.r(e);var o=n(6),c=(n(41),n(167),n(25),n(52),n(227)),r=n.n(c),l="/api/game";function m(t,e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$serverApi.$post("".concat(l,"/LotteryPlayCount"),r.a.stringify(e));case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$serverApi.$post("".concat(l,"/LotteryResult"),r.a.stringify(e));case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=n(62),_={data:function(){return{loading:!1,MGMActivityId:"fc9ca1b7-8eef-4a44-bace-ea2e4eec5b61",isLogined:!1,isBannerAnimeFinished:!1,customAnime:{sunCubicAnimate:null,sunAnimeJs:null,sunSpeedDefault:0,sunSpeedMax:5,sunTimeManager:null,sunstartStemp:null,suntimestamp:null,sunNewPos:null,sunLastPos:null,sunDelta:0,duration:null},Roulette:{PlayCount:0,RouletteID:"d5c63361-d390-4a59-a3d4-4eb4e0c52120",RouletteRewardList:[]},gameSetting:{lock:!1},playNum:1,activityTitle:"LUCKY 兔 YOU  最高抽20萬熊幣",activityDate:"2023/1/19 11:00 - 2023/1/30 11:00",activityGift:"200熊幣、2,000熊幣、20,000熊幣、200,000熊幣",isMobileMedia:!1,popImgUrl:"",playResultRotate:0}},computed:{playBol:function(){return 0!==this.playNum}},watch:{"$store.state.LocomotiveScrollDone":function(t){this.$nextTick((function(){window.LocomotiveScroll.update()}))},isloadingAnimationDone:function(t){this.$nextTick((function(){window.OB_bannerAnime()}))},afterScreenResizeState:function(t){this.decideMobile()},screenScrollState:function(t,e){},screenScrollDown:function(t,e){},screenScrollUp:function(t,e){},isLogin:function(t,e){}},created:function(){},mounted:function(){this.decideMobile()},destroyed:function(){},methods:{decideMobile:function(){window.innerWidth<=765?this.isMobileMedia=!0:this.isMobileMedia=!1},playLottery:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(o=e).eventNotStart){n.next=5;break}return o.$Swal2.fire({text:"活動尚未開始"}),o.$store.commit("SET_PAGELOADING",!1),n.abrupt("return");case 5:if(!o.eventIsExpired){n.next=9;break}return o.$Swal2.fire({text:v.a}),o.$store.commit("SET_PAGELOADING",!1),n.abrupt("return");case 9:if(!o.gameSetting.lock){n.next=11;break}return n.abrupt("return");case 11:return o.$store.commit("SET_PAGELOADING",!0),n.next=14,o.$store.dispatch("CHECKLOGIN");case 14:if(n.sent){n.next=19;break}return o.$Swal2.fire({text:v.b}),o.$store.commit("SET_PAGELOADING",!1),n.abrupt("return");case 19:return n.next=21,o.getRoulettePlayCount(o.Roulette.RouletteID,t);case 21:if(o.playBol){n.next=25;break}return o.$Swal2.fire({text:"您已經抽過了"}),o.$store.commit("SET_PAGELOADING",!1),n.abrupt("return");case 25:o.getRouletteGift();case 26:case"end":return n.stop()}}),n)})))()},getRouletteGift:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t).gameSetting.lock=!0,e.next=4,h({lotteryId:t.Roulette.RouletteID},n);case 4:1===(data=e.sent).ResultCode?(t.playNum=data.Result&&null!=data.Result?data.Result.PlayCount:0,n.customPopup(data.Message,data.Result.LotteryDetailId)):n.$Swal2.fire({text:data.Message}),n.$store.commit("SET_PAGELOADING",!1);case 7:case"end":return e.stop()}}),e)})))()},getRoulettePlayCount:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n,t.next=3,m({lotteryId:n.Roulette.RouletteID},e);case 3:1===(data=t.sent).ResultCode?n.playNum=data.Result:e.$Swal2.fire({text:data.Message});case 5:case"end":return t.stop()}}),t)})))()},customPopup:function(t,e){var n=this;if(n.isMobileMedia)switch(e){case"4083fa0b-7846-4987-8b04-cc35d163de73":n.playResultRotate=180,n.popImgUrl="".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/230109_popup_mb_200.jpg");break;case"2dccc2b9-b541-4e1e-ba4a-bfc6768c6642":n.playResultRotate=45,n.popImgUrl="".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/230109_popup_mb_2000.jpg");break;case"187678df-bdd4-41ac-b326-7a7e0cc49aee":n.playResultRotate=90,n.popImgUrl="".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","mb/230109_popup_mb_20000.jpg");break;case"0a81ce57-4cbe-4759-9b96-31f03b3565c6":n.playResultRotate=0,n.popImgUrl=""}else switch(e){case"4083fa0b-7846-4987-8b04-cc35d163de73":n.playResultRotate=180,n.popImgUrl="".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/230109_popup_pc_200.jpg");break;case"2dccc2b9-b541-4e1e-ba4a-bfc6768c6642":n.playResultRotate=45,n.popImgUrl="".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/230109_popup_pc_2000.jpg");break;case"187678df-bdd4-41ac-b326-7a7e0cc49aee":n.playResultRotate=90,n.popImgUrl="".concat("https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe23011001/","pc/230109_popup_pc_20000.jpg");break;case"0a81ce57-4cbe-4759-9b96-31f03b3565c6":n.playResultRotate=0,n.popImgUrl=""}this.$store.commit("playResultRotate",n.playResultRotate),this.$store.commit("turnDisabled",!0)},popSwal:function(){var t=this;t.gameSetting.lock=!1,t.$Swal2.fire({html:'<div class="lotteryPopUp"><a href="https://www.obdesign.com.tw/inpage.aspx?no=6964" target="_blank"><div class="lotteryConfirm"></div></a></div>',showCloseButton:!0,showConfirmButton:!1,background:"url("+t.popImgUrl+")"}).then((function(t){t.isConfirmed&&(window.location.href="https://www.obdesign.com.tw/inpage.aspx?no=6964")}))}}},y=n(18),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main","data-scroll-container":""}},[n("div",{staticClass:"container"},[n("section",{staticClass:"topArea"},[n("div",{staticClass:"icon"},[t._l(7,(function(t,e){return n("div",{key:"icon"+e,class:"icon__"+(e+1)},[n("div",{class:"icon__"+(e+1)+"-anime iconAnime1"},[n("div",{class:"icon__"+(e+1)+"-anime-obj"})])])})),t._v(" "),t._l(8,(function(t,e){return n("div",{key:"icon"+e,class:"icon__"+(e+8)},[n("div",{class:"icon__"+(e+8)+"-anime iconAnime2"},[n("div",{class:"icon__"+(e+8)+"-anime-obj"})])])}))],2),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"machineTop"},[n("div",{staticClass:"machineTop-anime"},[n("div",{staticClass:"machineTop-anime-obj"},[n("div",{staticClass:"machineTopTitle"},t._l(3,(function(t,e){return n("div",{key:"machineTopTitle"+e,class:"machineTopTitle__"+(e+1)},[n("div",{class:"machineTopTitle__"+(e+1)+"-anime machineTopTitleAnime"},[n("div",{class:"machineTopTitle__"+(e+1)+"-anime-obj"})])])})),0)])])]),t._v(" "),n("div",{staticClass:"barShadow"},t._l(2,(function(t,e){return n("div",{key:"barShadow"+e,class:"barShadow__"+(e+1)},[n("div",{class:"barShadow__"+(e+1)+"-anime barShadowAnime1"},[n("div",{class:"barShadow__"+(e+1)+"-anime-obj"})])])})),0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"machineBall"},[n("div",{staticClass:"machineBall-anime",on:{click:t.playLottery}},[t._m(2)])]),t._v(" "),n("div",{staticClass:"rabbit"},[t._m(3),t._v(" "),n("div",{staticClass:"rabbit__2"},[n("div",{staticClass:"rabbit__2-anime rabbitAnime",on:{click:t.playLottery}},[n("div",{staticClass:"rabbit__2-anime-obj"})])])]),t._v(" "),n("SlotMachine",{attrs:{"is-mobile-media":t.isMobileMedia},on:{turnFinish:t.popSwal}}),t._v(" "),n("div",{staticClass:"height"})],1),t._v(" "),n("section",{staticClass:"instruction",attrs:{id:"instruction"}},[n("div",{staticClass:"contentWrap2"},[n("div",{staticClass:"descriptionBox"},[n("ul",{staticClass:"default"},[n("li",{staticClass:"desTitle1"},[n("span",[t._v("主題 : ")]),n("br"),t._v("\n                             "+t._s(t.activityTitle)+"\n                        ")]),t._v(" "),n("li",{staticClass:"desTitle1"},[n("span",[t._v("獎項 : ")]),n("br"),t._v("\n                            "+t._s(t.activityGift)+"\n                        ")]),t._v(" "),n("li",{staticClass:"desTitle1"},[n("span",[t._v("活動時間 : ")]),n("br"),t._v("\n                            "+t._s(t.activityDate)+"\n                        ")]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"machineTopBg"},[e("div",{staticClass:"machineTopBg-anime"},[e("div",{staticClass:"machineTopBg-anime-obj"},[e("div",{staticClass:"machineTopBg2"},[e("div",{staticClass:"machineTopBg2-anime"},[e("div",{staticClass:"machineTopBg2-anime-obj"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"machineBar"},[e("div",{staticClass:"machineBar-anime"},[e("div",{staticClass:"machineBar-anime-obj"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"machineBall-anime-obj"},[e("div",{staticClass:"machineBallClick"},[e("div",{staticClass:"machineBallClick-anime"},[e("div",{staticClass:"machineBallClick-anime-obj"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rabbit__1"},[e("div",{staticClass:"rabbit__1-anime rabbitAnime"},[e("div",{staticClass:"rabbit__1-anime-obj"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"desTitle1"},[n("span",[t._v("注意事項 : ")]),n("br"),t._v(" "),n("ul",{staticClass:"decimal"},[n("li",[t._v("活動期間內每日可參加1次。")]),t._v(" "),n("li",[t._v("本抽獎活動時間至2023/1/30 11:00止。回饋之熊幣將於領取後三分鐘內匯入符合資格之會員帳戶中。")]),t._v(" "),n("li",[t._v("本活動回饋之熊幣使用期限於匯入當天23:59有效，逾期失效恕無法補發，請盡速於使用期限內使用完畢，避免因時間差導致系統接收訂單時，熊幣已逾期無法使用。")]),t._v(" "),n("li",[t._v("於單一購物車結帳時，熊幣可同時與購物金及紅包一起抵用。")]),t._v(" "),n("li",[t._v("熊幣使用期限與使用條件請至會員中心>我的熊幣查詢、熊幣使用方式請見購物資訊(熊幣使用說明)。")]),t._v(" "),n("li",[t._v("此會員權益不適用於批客訂單、海外地區來源之訂單及海外會員。")]),t._v(" "),n("li",[t._v("除上述注意事項，OB嚴選保留活動修改與終止之權利，不再另行通知。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-shop"},[e("div",{staticClass:"btn-shop-anime"},[e("a",{attrs:{href:"/?cbv=logo",target:"_blank"}},[e("div",{staticClass:"btn-shop-anime-obj"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SlotMachine:n(390).default})}}]);