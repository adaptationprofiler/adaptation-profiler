(this["webpackJsonpadaptation-profiler"]=this["webpackJsonpadaptation-profiler"]||[]).push([[0],{119:function(e,t,a){"use strict";t.a=a.p+"static/media/test.b7d6ebc6.csv"},120:function(e,t,a){"use strict";t.a=function(e,t){void 0==t&&(t=","),t&&t.length>1&&(t=",");for(var a=0,r=e.charAt(a),n=0,i=new Array;""!=r;){for(;" "==r||"\t"==r||"\r"==r;)r=e.charAt(++a);var o="";if('"'==r){r=e.charAt(++a);do{if('"'!=r&&(o+=r,r=e.charAt(++a)),'"'==r)'"'==e.charAt(a+1)&&(o+='"',a+=2,r=e.charAt(a))}while(""!=r&&'"'!=r);if(""==r)throw"Unexpected end of data, double-quote expected";r=e.charAt(++a)}else for(;""!=r&&r!=t&&"\n"!=r&&" "!=r&&"\t"!=r&&"\r"!=r;)o+=r,r=e.charAt(++a);for(i.length<=n&&i.push(new Array),i[n].push(o);" "==r||"\t"==r||"\r"==r;)r=e.charAt(++a);if(r==t)0;else if("\n"==r)0,n++;else if(""!=r)throw"Delimiter expected after character "+a;r=e.charAt(++a)}return i}},226:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_misc_test_csv__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(119),_config_mnist_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(94),_config_mnist_json__WEBPACK_IMPORTED_MODULE_3___namespace=__webpack_require__.t(94,1),_CSVToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(120),mathjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(137);function Main(e,t,a,r){return _Main.apply(this,arguments)}function _Main(){return _Main=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee5(histArraySize,stepSize,equation,adapt){var configuration,capacitance,newVoltage,oldVoltage,current,simulationTime,hasBeenMax,rawData,timeArray,accuracyArray,onTimeAccuracy,offTimeAccuracy,bootTime,executedTasks,currentTask,currentTaskNumber,currentTaskIterationNumber,adaptiveVariables,equation1,equation2,equation3,equation4,index1,index2,index3,index4,one,two,three,four,onTime,avgOnTime,s_onTime,offTime,avgOffTime,s_offTime,appCompletionTime,avgAppCompletionTime,s_appCompTime,taskCount,avgTaskCount,s_taskCount,powerFailureCount,avgpowerFailureCount,s_pFC,lowerAdaptationThreshold,upperAdaptationThreshold,adaptationStepSize,upperThresholdVoltage,lowerThresholdVoltage,stepTime,appCompletions,appCompleted,getData,_getData,initializeAdaptiveVariables,average,executeTasks,calculateNewVoltage,calculateRemainingVoltage,calculateEnergy,findClosestValue,extractTimeArray,extractVoltageArray,findCurrentNow,findAccuracyNow,handleMLAccuracy,adaptUp,adaptDown,adaptiveVariablesValues,closestTimestamp,voltageArray,closestVoltage,energy,usefulEnergy,remainingUsefulEnergy,totalRemainingEnergy,_energy,_usefulEnergy,_remainingUsefulEnergy,_totalRemainingEnergy,shouldAdaptUp1,shouldAdaptUp2,shouldAdaptDown1,shouldAdaptDown2,mlAccuracy,roundedAccuracy;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _getData=function(){return(_getData=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(){var t,a;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_misc_test_csv__WEBPACK_IMPORTED_MODULE_2__.a);case 2:return t=e.sent,e.next=5,t.text();case 5:a=e.sent,rawData=Object(_CSVToArray__WEBPACK_IMPORTED_MODULE_4__.a)(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getData=function(){return _getData.apply(this,arguments)},configuration=_config_mnist_json__WEBPACK_IMPORTED_MODULE_3__.adaptationStrategy[0],capacitance=2e-4,newVoltage=0,oldVoltage=0,current=0,simulationTime=0,hasBeenMax=!1,timeArray=[],accuracyArray=[],onTimeAccuracy=[],offTimeAccuracy=[],bootTime=0,executedTasks=!1,currentTask=configuration.tasks[0],currentTaskNumber=0,currentTaskIterationNumber=0,adaptiveVariables=configuration.adaptiveVariables,equation1=equation.adaptUp.split(">")[0],equation2=equation.adaptUp.split(">").pop(),equation3=equation.adaptDown.split("<")[0],equation4=equation.adaptDown.split("<").pop(),index1=0,index2=0,index3=0,index4=0,console.log("includes",equation1.includes("[")),equation1.includes("[")&&(one=equation1.split("[").pop().split("]")[0],equation1=equation1.substr(0,equation1.lastIndexOf("[")),index1=one.match(/[a-zA-Z]/)?0:parseInt(one)),equation2.includes("[")&&(two=equation2.split("[").pop().split("]")[0],equation2=equation2.substr(0,equation2.lastIndexOf("[")),index2=two.match(/[a-zA-Z]/)?0:parseInt(two)),equation3.includes("[")&&(three=equation3.split("[").pop().split("]")[0],equation3=equation3.substr(0,equation3.lastIndexOf("[")),index3=three.match(/[a-zA-Z]/)?0:parseInt(three)),equation4.includes("[")&&(four=equation4.split("[").pop().split("]")[0],equation4=equation4.substr(0,equation4.lastIndexOf("[")),index4=four.match(/[a-zA-Z]/)?0:parseInt(four)),onTime=0,avgOnTime=0,s_onTime=new Array(histArraySize+1).fill(0),offTime=0,avgOffTime=0,s_offTime=new Array(histArraySize+1).fill(0),appCompletionTime=0,avgAppCompletionTime=0,s_appCompTime=new Array(histArraySize+1).fill(0),taskCount=0,avgTaskCount=0,s_taskCount=new Array(histArraySize+1).fill(0),powerFailureCount=0,avgpowerFailureCount=0,s_pFC=new Array(histArraySize+1).fill(0),lowerAdaptationThreshold=0,upperAdaptationThreshold=7,adaptationStepSize=stepSize,upperThresholdVoltage=2.9,lowerThresholdVoltage=1.9,stepTime=.01,appCompletions=0,appCompleted=!1,initializeAdaptiveVariables=function(e){for(var t={},a=0;a<e.length;a++)t[e[a]]=0;return t},average=function(e){return e.reduce((function(e,t){return e+t}))/e.length},executeTasks=function executeTasks(energy){var availableEnergy=energy;if("number"!==typeof currentTask.taskIterations){for(var taskIterations,i=0;i<currentTask.adaptiveVars.length;i++)window[currentTask.adaptiveVars[i]]=adaptiveVariablesValues[currentTask.adaptiveVars[i]];return taskIterations=eval(currentTask.taskIterations),energy>currentTask.energyPerItr?(stepTime=currentTask.time,availableEnergy=energy-currentTask.energyPerItr,taskCount+=currentTask.taskWeight,currentTaskIterationNumber+=1,taskIterations==currentTaskIterationNumber&&(console.log(currentTask.taskName),console.log("task completion time",simulationTime),"task_init"!==currentTask.nextTask?(currentTaskIterationNumber=0,currentTaskNumber+=1,currentTask=configuration.tasks[currentTaskNumber]):"task_init"===currentTask.nextTask&&(appCompleted=!0)),availableEnergy):(stepTime=currentTask.time*(availableEnergy/currentTask.energyPerItr),hasBeenMax=!1,powerFailureCount+=1,availableEnergy=calculateEnergy(lowerThresholdVoltage),availableEnergy)}var _taskIterations=currentTask.taskIterations;return energy>currentTask.energyPerItr?(stepTime=currentTask.time,availableEnergy=energy-currentTask.energyPerItr,taskCount+=currentTask.taskWeight,currentTaskIterationNumber+=1,_taskIterations===currentTaskIterationNumber&&(console.log(currentTask.taskName),console.log("task completion time",simulationTime),"task_init"!==currentTask.nextTask?(currentTaskIterationNumber=0,currentTaskNumber+=1,currentTask=configuration.tasks[currentTaskNumber]):"task_init"===currentTask.nextTask&&(appCompleted=!0)),availableEnergy):(stepTime=currentTask.time*(availableEnergy/currentTask.energyPerItr),hasBeenMax=!1,powerFailureCount+=1,availableEnergy=calculateEnergy(lowerThresholdVoltage),availableEnergy)},calculateNewVoltage=function(e,t,a){return 1/capacitance*(t*a)+e},calculateRemainingVoltage=function(e){return Math.sqrt(1/capacitance*2*e)},calculateEnergy=function(e){return.5*capacitance*e*e},findClosestValue=function(){var e=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t,a){var r;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e})),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),extractTimeArray=function(){var e=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t){var a,r,n;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],r=t.filter((function(e,t){return t%512==0})),n=0;n<r.length;n++)a.push(r[n][0]);return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),extractVoltageArray=function(){var e=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t,a){var r,n,i;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n=0;case 2:if(!(n<t.length)){e.next=9;break}if(t[n][0]!=a){e.next=6;break}for(i=n;i<512+n;i++)r.push(t[i][1]);return e.abrupt("break",9);case 6:n++,e.next=2;break;case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),findCurrentNow=function(e,t){for(var a=0;a<rawData.length;a++)if(rawData[a][0]==e)for(var r=a;r<512+a;r++)if(rawData[r][1]==t)return rawData[r][2]},findAccuracyNow=function(){var e=adaptiveVariablesValues.skipRows,t=adaptiveVariablesValues.skipColumns,a="".concat(e,"_").concat(t),r=configuration.accuracyMap[a];accuracyArray.push(r)},handleMLAccuracy=function(){return accuracyArray.length>0?accuracyArray.reduce((function(e,t){return e+t}))/accuracyArray.length:0},adaptUp=function(){adapt&&(adaptiveVariablesValues.skipRows!==lowerAdaptationThreshold&&(adaptiveVariablesValues.skipRows=adaptiveVariablesValues.skipRows-adaptationStepSize),adaptiveVariablesValues.skipColumns!==lowerAdaptationThreshold&&(adaptiveVariablesValues.skipColumns=adaptiveVariablesValues.skipColumns-adaptationStepSize))},adaptDown=function(){adapt&&(adaptiveVariablesValues.skipRows<upperAdaptationThreshold&&(adaptiveVariablesValues.skipRows=adaptiveVariablesValues.skipRows+adaptationStepSize),adaptiveVariablesValues.skipColumns<upperAdaptationThreshold&&(adaptiveVariablesValues.skipColumns=adaptiveVariablesValues.skipColumns+adaptationStepSize))},_context5.next=71,getData();case 71:return _context5.next=73,extractTimeArray(rawData);case 73:timeArray=_context5.sent,adaptiveVariablesValues=initializeAdaptiveVariables(adaptiveVariables);case 75:if(!(simulationTime<timeArray[timeArray.length-1])){_context5.next=98;break}return bootTime=0,executedTasks=!1,_context5.next=80,findClosestValue(timeArray,simulationTime);case 80:return closestTimestamp=_context5.sent,_context5.next=83,extractVoltageArray(rawData,closestTimestamp);case 83:return voltageArray=_context5.sent,_context5.next=86,findClosestValue(voltageArray,oldVoltage);case 86:closestVoltage=_context5.sent,current=15*findCurrentNow(closestTimestamp,closestVoltage),newVoltage=calculateNewVoltage(oldVoltage,current,stepTime),!1===hasBeenMax&&newVoltage>=upperThresholdVoltage&&(hasBeenMax=!0,energy=calculateEnergy(newVoltage),usefulEnergy=energy-calculateEnergy(lowerThresholdVoltage),remainingUsefulEnergy=usefulEnergy-_config_mnist_json__WEBPACK_IMPORTED_MODULE_3__.initOverheadEnergy,totalRemainingEnergy=remainingUsefulEnergy+calculateEnergy(lowerThresholdVoltage),newVoltage=calculateRemainingVoltage(totalRemainingEnergy),bootTime=_config_mnist_json__WEBPACK_IMPORTED_MODULE_3__.time,executedTasks=!0),!0===hasBeenMax&&newVoltage<=lowerThresholdVoltage&&(hasBeenMax=!1),newVoltage>=lowerThresholdVoltage&&!0===hasBeenMax?(_energy=calculateEnergy(newVoltage),_usefulEnergy=_energy-calculateEnergy(lowerThresholdVoltage),_remainingUsefulEnergy=executeTasks(_usefulEnergy),_totalRemainingEnergy=_remainingUsefulEnergy+calculateEnergy(lowerThresholdVoltage),oldVoltage=calculateRemainingVoltage(_totalRemainingEnergy),executedTasks=!0):(stepTime=.01,oldVoltage=newVoltage,executedTasks=!1,taskCount=0),simulationTime=simulationTime+stepTime+bootTime,executedTasks?onTime+=1e3*(stepTime+bootTime):offTime+=1e3*stepTime,appCompletionTime=onTime+offTime,appCompleted&&(appCompletions+=1,appCompleted=!1,s_onTime.unshift(onTime),s_onTime.pop(),s_offTime.unshift(offTime),s_offTime.pop(),s_appCompTime.unshift(appCompletionTime),s_appCompTime.pop(),s_taskCount.unshift(taskCount),s_taskCount.pop(),s_pFC.unshift(powerFailureCount),s_pFC.pop(),console.log("onTime",s_onTime),console.log("offTime",s_offTime),console.log("app completion time",s_appCompTime),console.log("taskCount",s_taskCount),console.log("failure count",s_pFC),console.log("skip Rows",adaptiveVariablesValues.skipRows),console.log("skip Columns",adaptiveVariablesValues.skipColumns),avgOnTime=average(s_onTime.slice(1,histArraySize)),avgOffTime=average(s_offTime.slice(1,histArraySize)),avgAppCompletionTime=average(s_appCompTime.slice(1,histArraySize)),avgTaskCount=average(s_taskCount.slice(1,histArraySize)),avgpowerFailureCount=average(s_pFC.slice(1,histArraySize)),findAccuracyNow(),0!==adaptiveVariablesValues.skipColumns||0!==adaptiveVariablesValues.skipRows?onTimeAccuracy.push({Accuracy:accuracyArray[accuracyArray.length-1],Time:simulationTime}):0!=adaptiveVariablesValues.skipColumns&&0!=adaptiveVariablesValues.skipRows||offTimeAccuracy.push({Accuracy:accuracyArray[accuracyArray.length-1],Time:simulationTime}),shouldAdaptUp1=Object(mathjs__WEBPACK_IMPORTED_MODULE_5__.a)(equation1,{s_onTime:s_onTime[index1],avgOnTime:avgOnTime,s_offTime:s_offTime[index1],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index1],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index1],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index1],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptUp2=Object(mathjs__WEBPACK_IMPORTED_MODULE_5__.a)(equation2,{s_onTime:s_onTime[index2],avgOnTime:avgOnTime,s_offTime:s_offTime[index2],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index2],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index2],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index2],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptDown1=Object(mathjs__WEBPACK_IMPORTED_MODULE_5__.a)(equation3,{s_onTime:s_onTime[index3],avgOnTime:avgOnTime,s_offTime:s_offTime[index3],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index3],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index3],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index3],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptDown2=Object(mathjs__WEBPACK_IMPORTED_MODULE_5__.a)(equation4,{s_onTime:s_onTime[index4],avgOnTime:avgOnTime,s_offTime:s_offTime[index4],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index4],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index4],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index4],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptUp1>shouldAdaptUp2?adaptDown():shouldAdaptDown1<shouldAdaptDown2&&adaptUp(),onTime=0,offTime=0,appCompletionTime=0,taskCount=0,powerFailureCount=0,currentTaskNumber=0,currentTaskIterationNumber=0,currentTask=configuration.tasks[currentTaskNumber],console.log("app completions",appCompletions)),_context5.next=75;break;case 98:return mlAccuracy=handleMLAccuracy(),roundedAccuracy=mlAccuracy.toFixed(2),console.log("average accuracy of all classifications",roundedAccuracy),_context5.abrupt("return",{appCompletions:appCompletions,mlAccuracy:roundedAccuracy,onTimeAccuracy:onTimeAccuracy,offTimeAccuracy:offTimeAccuracy});case 102:case"end":return _context5.stop()}}),_callee5)}))),_Main.apply(this,arguments)}__webpack_exports__.a=Main},407:function(e,t){},413:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(23),o=a.n(i),s=a(28),l=a.n(s),_=a(49),c=a(107),u=a(20),p=a(202),d=a(203),m=a(204),f=a(236),g=a(119),b=a(120);function h(){return(h=Object(_.a)(l.a.mark((function e(){var t,a,r,n,i,o,s,c,u,p,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return(i=Object(_.a)(l.a.mark((function e(){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g.a);case 2:return a=e.sent,e.next=5,a.text();case 5:r=e.sent,t=Object(b.a)(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},n=function(){return i.apply(this,arguments)},a=[],r=[],o=function(e){var t=0,n=[],i=[],o=[];e.forEach((function(e,l,_){n.push(e[0]),i.push(e[1]),o.push(e[2]),512===(t+=1)&&(a.push(Math.max.apply(Math,n)),r.push(Math.max.apply(Math,c(s(i,o)))),i=[],o=[],t=0)}))},s=function(e,t){var a=e.map((function(e,a){return[e,t[a]]}));return a},c=function(e){var t=e.map((function(e){return[e[0]*e[1]]}));return t},u=function(e){var t=[];return e.forEach((function(e,a,r){t.push({Time:e[0],Power:1e3*e[1]})})),t},e.next=10,n();case 10:return o(t),p=s(a,r),d=u(p),e.abrupt("return",d);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k,T,y,x,v=function(){return h.apply(this,arguments)},O=a(445),C=a(463),j=a(449),A=a(224),w=a(47),E=a(225),D=a(109),V=a(106),I=a(223),P=a(221),M=a(8),S=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={data:[]},r.onTimeAccuracy=e.data1,r.offTimeAccuracy=e.data2,r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({data:t}),console.log(t)})),console.log(this.onTimeAccuracy),console.log(this.offTimeAccuracy)}},{key:"render",value:function(){return Object(M.jsx)(O.a,{width:"100%",height:"100%",children:Object(M.jsxs)(C.a,{width:500,height:300,margin:{top:5,right:0,left:0,bottom:10},children:[Object(M.jsx)("defs",{children:Object(M.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(M.jsx)("stop",{offset:"5%",stopColor:"#2AB06E",stopOpacity:.8}),Object(M.jsx)("stop",{offset:"95%",stopColor:"#2AB06E",stopOpacity:.4})]})}),Object(M.jsx)(j.a,{strokeDasharray:"3 3"}),Object(M.jsx)(A.a,{dataKey:"Time",type:"number",domain:["dataMin","dataMax"],ticks:[15,30,45,60],children:Object(M.jsx)(w.a,{value:"Time",offset:-5,position:"insideBottom"})}),Object(M.jsx)(E.a,{children:Object(M.jsx)(w.a,{value:"Power (mW)",offset:0,position:"middle",angle:-90})}),Object(M.jsx)(E.a,{yAxisId:"right",orientation:"right",domain:[0,100],children:Object(M.jsx)(w.a,{value:"Accuracy (%)",offset:0,position:"middle",angle:-90})}),Object(M.jsx)(D.a,{}),Object(M.jsx)(V.a,{verticalAlign:"top",height:36}),Object(M.jsx)(I.a,{data:this.state.data,type:"monotone",dataKey:"Power",stroke:"#2AB06E",fillOpacity:1,fill:"url(#colorPv)",activeDot:{r:2}}),Object(M.jsx)(P.a,{yAxisId:"right",data:this.onTimeAccuracy,type:"monotone",dataKey:"onTimeAccuracy",stroke:"#E33737",strokeWidth:0,activeDot:{r:2}}),Object(M.jsx)(P.a,{yAxisId:"right",data:this.offTimeAccuracy,type:"monotone",dataKey:"offTimeAccuracy",stroke:"#5559D9",strokeWidth:0,activeDot:{r:2}})]})})}}]),a}(r.PureComponent),U=(a.p,a(94)),L=a(134),R=a(226),W=a(467),B=a(455),F=a(461),q=a(457),N=a(468),z=a(458),K=a(466),G=a(459),H=a(460),Z=a(11),J=a(235),$=(a(465),a(408),a(162)),Q=a(137);var X=function(){var e=[],t=U,a=Object(r.useState)(t.adaptationStrategy[0]),n=Object(u.a)(a,2),i=n[0],o=(n[1],Object(r.useState)(i.tasks)),s=Object(u.a)(o,2),p=s[0],d=(s[1],Object(r.useState)(i.adaptiveVariables)),m=Object(u.a)(d,2),f=(m[0],m[1],Object(r.useState)([])),g=Object(u.a)(f,2),b=g[0],h=g[1],v=Object(r.useState)(0),O=Object(u.a)(v,2),C=O[0],j=O[1],A=Object(r.useState)(0),w=Object(u.a)(A,2),E=w[0],D=w[1],V=Object(r.useState)([]),I=Object(u.a)(V,2),P=I[0],X=I[1],Y=Object(r.useState)([]),ee=Object(u.a)(Y,2),te=ee[0],ae=ee[1],re=Object(r.useState)(""),ne=Object(u.a)(re,2),ie=ne[0],oe=ne[1],se=Object(r.useState)(""),le=Object(u.a)(se,2),_e=le[0],ce=le[1],ue=Object(r.useState)(String.raw(k||(k=Object(c.a)(["mathit{if} (mathit{s_off}_{n} - epsilon) < \frac{1}{n}sum_{i=1}^{n-1} mathit{s_off}_{i}"],["\\mathit{if}\\ (\\mathit{s\\_off}_{n} - \\epsilon) < \\frac{1}{n}\\sum_{i=1}^{n-1} \\mathit{s\\_off}_{i}"])))),pe=Object(u.a)(ue,2),de=pe[0],me=pe[1],fe=Object(r.useState)(String.raw(T||(T=Object(c.a)(["mathit{if} (mathit{s_off}_{n} + epsilon) > \frac{1}{n}sum_{i=1}^{n-1} mathit{s_off}_{i}"],["\\mathit{if}\\ (\\mathit{s\\_off}_{n} + \\epsilon) > \\frac{1}{n}\\sum_{i=1}^{n-1} \\mathit{s\\_off}_{i}"])))),ge=Object(u.a)(fe,2),be=ge[0],he=ge[1],ke=Object(r.useState)(!1),Te=Object(u.a)(ke,2),ye=Te[0],xe=Te[1],ve=Object(r.useState)(!1),Oe=Object(u.a)(ve,2),Ce=Oe[0],je=Oe[1],Ae=Object(r.useState)(0),we=Object(u.a)(Ae,2),Ee=we[0],De=we[1],Ve=Object(r.useState)(0),Ie=Object(u.a)(Ve,2),Pe=Ie[0],Me=Ie[1],Se=!1;Object(r.useEffect)((function(){Ue(),h(e)}),[]);var Ue=function(){var t=Object(_.a)(l.a.mark((function t(){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=150,r=50,p.map((function(t,n,i){0===n?e.push({id:n+1,data:{label:t.taskName},position:{x:a+500,y:r},sourcePosition:"right",targetPosition:"bottom",style:{backgroundColor:"#E8E8FC",borderRadius:10,padding:40,fontSize:9,fontWeight:"bold"}},{id:"arrow"+n+1,type:"default",source:n+1,target:n+2,arrowHeadType:"arrowclosed",animated:!0,style:{stroke:"#ffffff",strokeWidth:3}}):n+1===p.length?(150===a?a=400:400===a&&(a=150),r+=100,e.push({id:n+1,data:{label:t.taskName},position:{x:a,y:r},sourcePosition:"right",targetPosition:"top",style:{backgroundColor:"#E8E8FC",borderRadius:10,padding:40,fontSize:9,fontWeight:"bold"}},{id:"arrow"+n+1,type:"default",source:n+1,target:1,arrowHeadType:"arrowclosed",animated:!0,style:{stroke:"#ffffff",strokeWidth:3}})):(150===a?a=400:400===a&&(a=150),r+=100,e.push({id:n+1,data:{label:t.taskName},position:{x:a,y:r},sourcePosition:"right",targetPosition:"top",style:{backgroundColor:"#E8E8FC",borderRadius:10,padding:40,fontSize:9,fontWeight:"bold"}},{id:"arrow"+n+1,type:"default",source:n+1,target:n+2,arrowHeadType:"arrowclosed",animated:!0,style:{stroke:"#ffffff",strokeWidth:3}}))}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Le=Object(Z.a)({root:{color:"#0058FF",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-10,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:8},rail:{height:8,borderRadius:8,backgroundColor:"#000000",boxShadow:" 0px 2px 4px 0px #000000"}})(W.a);return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{style:Ce?{pointerEvents:"none",opacity:"0.5"}:{},children:[Object(M.jsx)("div",{style:{flex:1,position:"absolute",width:"68%",height:"70%",left:0,top:0,backgroundColor:"#69AA83",boxShadow:"inset 0px 0px 20px 0px #ffffff"},children:Object(M.jsxs)(L.c,{elements:b,arrowHeadColor:"#ffffff",children:[Object(M.jsx)(L.b,{}),Object(M.jsx)(L.a,{variant:"dots",gap:16,size:1})]})}),Object(M.jsx)("div",{style:{flex:1,position:"absolute",width:"32%",height:"70%",right:0,top:0},children:Object(M.jsxs)("div",{style:{flex:1,padding:30,height:"93%"},children:[Object(M.jsxs)("div",{style:{flex:1,flexDirection:"row",marginTop:10},children:[Object(M.jsx)("div",{style:{fontFamily:"GemunuLibre-ExtraBold",fontSize:45,fontWeight:"600",textAlign:"center"},children:"Configuration"}),Object(M.jsx)(B.a,{style:{marginLeft:"90%",top:-45},onClick:function(){return xe(!ye)},children:Object(M.jsx)(J.a,{size:24,color:"#7F8489"})})]}),Object(M.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,fontFamily:"GemunuLibre-SemiBold",textDecoration:"underline",marginBottom:"2%"},children:"Step 1: Adjust Knobs"}),Object(M.jsx)(Le,{valueLabelDisplay:"auto","aria-label":"pretto slider",value:Ee,max:8,onChange:function(e,t){De(t)},onChangeCommitted:function(e,t){De(t)}}),Object(M.jsx)("div",{style:{flex:1,fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",marginBottom:25},children:"History Array Size"}),Object(M.jsx)(Le,{valueLabelDisplay:"auto","aria-label":"pretto slider",value:Pe,max:8,onChange:function(e,t){Me(t)},onChangeCommitted:function(e,t){Me(t)}}),Object(M.jsx)("div",{style:{flex:1,fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",marginBottom:25},children:"Adaptation Step Size"}),Object(M.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,fontFamily:"GemunuLibre-SemiBold",textDecoration:"underline",marginBottom:"2%",marginTop:"5%"},children:"Step 2: Enter Heuristic Equation"}),Object(M.jsxs)("div",{style:{marginTop:"2%",borderWidth:2,borderColor:"#000",borderStyle:"solid",borderRadius:5},children:[Object(M.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",fontWeight:"bold",marginTop:"2%"},children:"Adapt Up"}),Object(M.jsx)($.BlockMath,{children:de}),Object(M.jsx)("div",{style:{display:"inline"},children:Object(M.jsx)(F.a,{label:"Adapt Up",variant:"filled",style:{width:"100%"},onChange:function(e){return function(e){console.log(e.target.value),oe(e.target.value)}(e)},onKeyPress:function(e){"Enter"===e.key&&function(){var e=Object(Q.b)(ie).toTex();me(String.raw(y||(y=Object(c.a)(["mathit{if} ",""],["\\mathit{if}\\ ",""])),e))}()}})})]}),Object(M.jsxs)("div",{style:{marginTop:"1%",borderWidth:2,borderColor:"#000",borderStyle:"solid",borderRadius:5},children:[Object(M.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",fontWeight:"bold",marginTop:"2%"},children:"Adapt Down"}),Object(M.jsx)($.BlockMath,{children:be}),Object(M.jsx)("div",{style:{display:"inline"},children:Object(M.jsx)(F.a,{label:"Adapt Down",variant:"filled",style:{width:"100%"},onChange:function(e){return function(e){console.log(e.target.value),ce(e.target.value)}(e)},onKeyPress:function(e){"Enter"===e.key&&function(){var e=Object(Q.b)(_e).toTex();he(String.raw(x||(x=Object(c.a)(["mathit{if} ",""],["\\mathit{if}\\ ",""])),e))}()}})})]}),Object(M.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,fontFamily:"GemunuLibre-SemiBold",textDecoration:"underline",marginBottom:"2%",marginTop:"5%"},children:"Step 3: Check Adaptation and Run"}),Object(M.jsxs)("div",{style:{flexDirection:"row",marginLeft:"32%"},children:[Object(M.jsx)(q.a,{control:Object(M.jsx)(N.a,{size:"medium",color:"primary",onChange:function(){return Se=!Se}}),label:"Adapt"}),Object(M.jsx)(z.a,{size:"large",variant:"contained",color:"primary",onClick:function(){return function(){var e={adaptUp:ie,adaptDown:_e};xe(!1),je(!0),console.log(Ee),console.log(Pe),console.log(Se),Object(R.a)(Ee,Pe,e,Se).then((function(e){console.log(e),j(e.appCompletions),D(e.mlAccuracy),X(e.onTimeAccuracy),ae(e.offTimeAccuracy),je(!1)}))}()},children:"Execute"})]})]})}),Object(M.jsx)("div",{style:{flex:1,position:"absolute",width:"30%",height:"30%",right:0,bottom:0},children:Object(M.jsxs)("div",{style:{flex:1,padding:30},children:[Object(M.jsx)("div",{style:{flex:1,fontFamily:"GemunuLibre-ExtraBold",fontSize:45,textAlign:"center"},children:"Statistics"}),Object(M.jsxs)("div",{style:{flexDirection:"row",marginTop:70},children:[Object(M.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline"},children:"App Completions:"}),Object(M.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline",marginLeft:"40%"},children:C})]}),Object(M.jsxs)("div",{style:{flexDirection:"row",marginTop:70},children:[Object(M.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline"},children:"Accuracy:"}),Object(M.jsxs)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline",marginLeft:"50%"},children:[E,"%"]})]})]})}),Object(M.jsx)("div",{style:{flex:1,position:"absolute",width:"70%",height:"30%",left:0,bottom:0},children:Object(M.jsx)(S,{data1:P,data2:te})}),Object(M.jsxs)(K.a,{open:ye,onClose:function(){return xe(!1)},"aria-labelledby":"form-dialog-title",children:[Object(M.jsx)(G.a,{id:"form-dialog-title",children:"Settings"}),Object(M.jsx)(H.a,{children:Object(M.jsx)(z.a,{onClick:function(){return xe(!1)},color:"primary",children:"Cancel"})})]})]})})};a(413);o.a.render(Object(M.jsx)(n.a.StrictMode,{children:Object(M.jsx)(X,{})}),document.getElementById("root"))},94:function(e){e.exports=JSON.parse('{"applicationName":"MNIST Classifier","time":0.000128,"initOverheadEnergy":0.00002,"adaptationStrategy":[{"type":"Crop Image","adaptiveVariables":["skipRows","skipColumns"],"accuracyMap":{"0_0":92.8,"1_1":92.8,"2_2":92.6,"3_3":92.2,"4_4":90.9,"5_5":88.1,"6_6":79.1,"7_7":65.8,"8_8":42.3,"9_9":29.6,"10_10":24.5,"11_11":17.2,"12_12":13.3,"13_13":16.7,"14_14":8.9},"tasks":[{"taskName":"task_init","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.00000408,"nextTask":"task_neural_network_hypothesis"},{"taskName":"task_neural_network_hypothesis","adaptiveVars":["skipRows","skipColumns"],"taskIterations":"(28 - skipRows - skipColumns) * 10","taskWeight":21,"time":0.003175,"energyPerItr":0.00004674,"nextTask":"task_neural_network_softmax_max"},{"taskName":"task_neural_network_softmax_max","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000127,"energyPerItr":0.00000244,"nextTask":"task_neural_network_softmax_sum"},{"taskName":"task_neural_network_softmax_sum","adaptiveVars":null,"taskIterations":10,"taskWeight":28,"time":0.004178,"energyPerItr":0.00033218,"nextTask":"task_neural_network_softmax"},{"taskName":"task_neural_network_softmax","adaptiveVars":null,"taskIterations":1,"taskWeight":5,"time":0.000707,"energyPerItr":0.00000996,"nextTask":"task_classify"},{"taskName":"task_classify","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000151,"energyPerItr":0.00000264,"nextTask":"task_done"},{"taskName":"task_done","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000173,"energyPerItr":0.00000245,"nextTask":"task_sleep"},{"taskName":"task_sleep","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.000157,"nextTask":"task_init"}]},{"type":"Skip Classes","adaptiveVariables":"skipClass","accuracyMap":{"0":92.8,"1":84.2,"2":76.1,"3":66.7,"4":57.8,"5":50.1,"6":40.6,"7":31,"8":21.1,"9":9.8,"10":9.8},"tasks":[{"taskName":"task_init","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.00000408,"nextTask":"task_neural_network_hypothesis"},{"taskName":"task_neural_network_hypothesis","adaptiveVars":["skipClass"],"taskIterations":"28 * (10 - skipClass)","taskWeight":21,"time":0.003175,"energyPerItr":0.00004674,"nextTask":"task_neural_network_softmax_max"},{"taskName":"task_neural_network_softmax_max","adaptiveVars":["skipClass"],"taskIterations":1,"taskWeight":1,"time":0.000127,"energyPerItr":0.00000244,"nextTask":"task_neural_network_softmax_sum"},{"taskName":"task_neural_network_softmax_sum","adaptiveVars":["skipClass"],"taskIterations":"10 - skipClass","taskWeight":28,"time":0.004178,"energyPerItr":0.00033218,"nextTask":"task_neural_network_softmax"},{"taskName":"task_neural_network_softmax","adaptiveVars":["skipClass"],"taskIterations":1,"taskWeight":5,"time":0.000707,"energyPerItr":0.00000996,"nextTask":"task_classify"},{"taskName":"task_classify","adaptiveVars":["skipClass"],"taskIterations":1,"taskWeight":1,"time":0.000151,"energyPerItr":0.00000264,"nextTask":"task_done"},{"taskName":"task_done","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000173,"energyPerItr":0.00000245,"nextTask":"task_sleep"},{"taskName":"task_sleep","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.000157,"nextTask":"task_init"}]}]}')}},[[414,1,2]]]);
//# sourceMappingURL=main.d2300f0c.chunk.js.map