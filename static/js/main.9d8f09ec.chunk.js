(this["webpackJsonpadaptation-profiler"]=this["webpackJsonpadaptation-profiler"]||[]).push([[0],{124:function(e,t,a){"use strict";t.a=a.p+"static/media/high-energy.24e147d3.csv"},125:function(e,t,a){"use strict";t.a=a.p+"static/media/low-energy.115cf14b.csv"},126:function(e,t,a){"use strict";t.a=a.p+"static/media/random.f5cfaf05.csv"},127:function(e,t,a){"use strict";t.a=a.p+"static/media/moving-fast-energy.b7d6ebc6.csv"},128:function(e,t,a){"use strict";t.a=a.p+"static/media/moving-slow-energy.c31f9bb5.csv"},236:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51),_misc_high_energy_csv__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(124),_misc_low_energy_csv__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(125),_misc_random_csv__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(126),_misc_moving_fast_energy_csv__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(127),_misc_moving_slow_energy_csv__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(128),_config_mnist_json__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(98),_config_mnist_json__WEBPACK_IMPORTED_MODULE_7___namespace=__webpack_require__.t(98,1),_CSVToArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(47),mathjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(146);function Main(e,t,a,n,r){return _Main.apply(this,arguments)}function _Main(){return _Main=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee5(histArraySize,stepSize,equation,adapt,csv){var configuration,capacitance,newVoltage,oldVoltage,current,simulationTime,hasBeenMax,rawData,timeArray,accuracyArray,onTimeAccuracy,offTimeAccuracy,bootTime,executedTasks,currentTask,currentTaskNumber,currentTaskIterationNumber,adaptiveVariables,equation1,equation2,equation3,equation4,index1,index2,index3,index4,one,two,three,four,onTime,avgOnTime,s_onTime,offTime,avgOffTime,s_offTime,appCompletionTime,avgAppCompletionTime,s_appCompTime,taskCount,avgTaskCount,s_taskCount,powerFailureCount,avgpowerFailureCount,s_pFC,lowerAdaptationThreshold,upperAdaptationThreshold,adaptationStepSize,upperThresholdVoltage,lowerThresholdVoltage,stepTime,appCompletions,appCompleted,getData,_getData,initializeAdaptiveVariables,average,executeTasks,calculateNewVoltage,calculateRemainingVoltage,calculateEnergy,findClosestValue,extractTimeArray,extractVoltageArray,findCurrentNow,findAccuracyNow,handleMLAccuracy,adaptUp,adaptDown,adaptiveVariablesValues,closestTimestamp,voltageArray,closestVoltage,energy,usefulEnergy,remainingUsefulEnergy,totalRemainingEnergy,_energy,_usefulEnergy,_remainingUsefulEnergy,_totalRemainingEnergy,shouldAdaptUp1,shouldAdaptUp2,shouldAdaptDown1,shouldAdaptDown2,mlAccuracy,roundedAccuracy;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return _getData=function(){return(_getData=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(){var t,a,n,r,i,o,s,c,_,l;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("High-Energy"!==csv){e.next=10;break}return e.next=3,fetch(_misc_high_energy_csv__WEBPACK_IMPORTED_MODULE_2__.a);case 3:return t=e.sent,e.next=6,t.text();case 6:a=e.sent,rawData=Object(_CSVToArray__WEBPACK_IMPORTED_MODULE_8__.a)(a),e.next=48;break;case 10:if("Low-Energy"!==csv){e.next=20;break}return e.next=13,fetch(_misc_low_energy_csv__WEBPACK_IMPORTED_MODULE_3__.a);case 13:return n=e.sent,e.next=16,n.text();case 16:r=e.sent,rawData=Object(_CSVToArray__WEBPACK_IMPORTED_MODULE_8__.a)(r),e.next=48;break;case 20:if("Random"!==csv){e.next=30;break}return e.next=23,fetch(_misc_random_csv__WEBPACK_IMPORTED_MODULE_4__.a);case 23:return i=e.sent,e.next=26,i.text();case 26:o=e.sent,rawData=Object(_CSVToArray__WEBPACK_IMPORTED_MODULE_8__.a)(o),e.next=48;break;case 30:if("Moving-Fast"!==csv){e.next=40;break}return e.next=33,fetch(_misc_moving_fast_energy_csv__WEBPACK_IMPORTED_MODULE_5__.a);case 33:return s=e.sent,e.next=36,s.text();case 36:c=e.sent,rawData=Object(_CSVToArray__WEBPACK_IMPORTED_MODULE_8__.a)(c),e.next=48;break;case 40:if("Moving-Slow"!==csv){e.next=48;break}return e.next=43,fetch(_misc_moving_slow_energy_csv__WEBPACK_IMPORTED_MODULE_6__.a);case 43:return _=e.sent,e.next=46,_.text();case 46:l=e.sent,rawData=Object(_CSVToArray__WEBPACK_IMPORTED_MODULE_8__.a)(l);case 48:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getData=function(){return _getData.apply(this,arguments)},configuration=_config_mnist_json__WEBPACK_IMPORTED_MODULE_7__.adaptationStrategy[0],capacitance=2e-4,newVoltage=0,oldVoltage=0,current=0,simulationTime=0,hasBeenMax=!1,rawData=[],timeArray=[],accuracyArray=[],onTimeAccuracy=[],offTimeAccuracy=[],bootTime=0,executedTasks=!1,currentTask=configuration.tasks[0],currentTaskNumber=0,currentTaskIterationNumber=0,adaptiveVariables=configuration.adaptiveVariables,equation1="",equation2="",equation3="",equation4="",equation.adaptUp.includes(">")&&equation.adaptDown.includes("<")?(equation1=equation.adaptUp.split(">")[0],equation2=equation.adaptUp.split(">").pop(),equation3=equation.adaptDown.split("<")[0],equation4=equation.adaptDown.split("<").pop()):equation.adaptUp.includes("<")&&equation.adaptDown.includes(">")?(equation1=equation.adaptUp.split("<")[0],equation2=equation.adaptUp.split("<").pop(),equation3=equation.adaptDown.split(">")[0],equation4=equation.adaptDown.split(">").pop()):equation.adaptUp.includes(">")&&equation.adaptDown.includes(">")?(equation1=equation.adaptUp.split(">")[0],equation2=equation.adaptUp.split(">").pop(),equation3=equation.adaptDown.split(">")[0],equation4=equation.adaptDown.split(">").pop()):equation.adaptUp.includes("<")&&equation.adaptDown.includes("<")&&(equation1=equation.adaptUp.split("<")[0],equation2=equation.adaptUp.split("<").pop(),equation3=equation.adaptDown.split("<")[0],equation4=equation.adaptDown.split("<").pop()),index1=0,index2=0,index3=0,index4=0,adapt&&(equation1.includes("[")&&(one=equation1.split("[").pop().split("]")[0],equation1=equation1.substr(0,equation1.lastIndexOf("[")),index1=one.match(/[a-zA-Z]/)?0:parseInt(one)),equation2.includes("[")&&(two=equation2.split("[").pop().split("]")[0],equation2=equation2.substr(0,equation2.lastIndexOf("[")),index2=two.match(/[a-zA-Z]/)?0:parseInt(two)),equation3.includes("[")&&(three=equation3.split("[").pop().split("]")[0],equation3=equation3.substr(0,equation3.lastIndexOf("[")),index3=three.match(/[a-zA-Z]/)?0:parseInt(three)),equation4.includes("[")&&(four=equation4.split("[").pop().split("]")[0],equation4=equation4.substr(0,equation4.lastIndexOf("[")),index4=four.match(/[a-zA-Z]/)?0:parseInt(four))),onTime=0,avgOnTime=0,s_onTime=new Array(histArraySize+1).fill(0),offTime=0,avgOffTime=0,s_offTime=new Array(histArraySize+1).fill(0),appCompletionTime=0,avgAppCompletionTime=0,s_appCompTime=new Array(histArraySize+1).fill(0),taskCount=0,avgTaskCount=0,s_taskCount=new Array(histArraySize+1).fill(0),powerFailureCount=0,avgpowerFailureCount=0,s_pFC=new Array(histArraySize+1).fill(0),lowerAdaptationThreshold=0,upperAdaptationThreshold=7,adaptationStepSize=stepSize,upperThresholdVoltage=2.9,lowerThresholdVoltage=1.9,stepTime=.01,appCompletions=0,appCompleted=!1,initializeAdaptiveVariables=function(e){for(var t={},a=0;a<e.length;a++)t[e[a]]=0;return t},average=function(e){return e.reduce((function(e,t){return e+t}))/e.length},executeTasks=function executeTasks(energy){var availableEnergy=energy;if("number"!==typeof currentTask.taskIterations){for(var taskIterations,i=0;i<currentTask.adaptiveVars.length;i++)window[currentTask.adaptiveVars[i]]=adaptiveVariablesValues[currentTask.adaptiveVars[i]];return taskIterations=eval(currentTask.taskIterations),energy>currentTask.energyPerItr?(stepTime=currentTask.time,availableEnergy=energy-currentTask.energyPerItr,taskCount+=currentTask.taskWeight,currentTaskIterationNumber+=1,taskIterations==currentTaskIterationNumber&&(console.log(currentTask.taskName),console.log("task completion time",simulationTime),"task_init"!==currentTask.nextTask?(currentTaskIterationNumber=0,currentTaskNumber+=1,currentTask=configuration.tasks[currentTaskNumber]):"task_init"===currentTask.nextTask&&(appCompleted=!0)),availableEnergy):(stepTime=currentTask.time*(availableEnergy/currentTask.energyPerItr),hasBeenMax=!1,powerFailureCount+=1,availableEnergy=calculateEnergy(lowerThresholdVoltage),availableEnergy)}var _taskIterations=currentTask.taskIterations;return energy>currentTask.energyPerItr?(stepTime=currentTask.time,availableEnergy=energy-currentTask.energyPerItr,taskCount+=currentTask.taskWeight,currentTaskIterationNumber+=1,_taskIterations===currentTaskIterationNumber&&(console.log(currentTask.taskName),console.log("task completion time",simulationTime),"task_init"!==currentTask.nextTask?(currentTaskIterationNumber=0,currentTaskNumber+=1,currentTask=configuration.tasks[currentTaskNumber]):"task_init"===currentTask.nextTask&&(appCompleted=!0)),availableEnergy):(stepTime=currentTask.time*(availableEnergy/currentTask.energyPerItr),hasBeenMax=!1,powerFailureCount+=1,availableEnergy=calculateEnergy(lowerThresholdVoltage),availableEnergy)},calculateNewVoltage=function(e,t,a){return 1/capacitance*(t*a)+e},calculateRemainingVoltage=function(e){return Math.sqrt(1/capacitance*2*e)},calculateEnergy=function(e){return.5*capacitance*e*e},findClosestValue=function(){var e=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t,a){var n;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),extractTimeArray=function(){var e=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t){var a,n,r;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],n=t.filter((function(e,t){return t%512==0})),r=0;r<n.length;r++)a.push(n[r][0]);return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),extractVoltageArray=function(){var e=Object(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(_Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t,a){var n,r,i;return _Users_aross_Desktop_adaptation_profiler_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0;case 2:if(!(r<t.length)){e.next=9;break}if(t[r][0]!=a){e.next=6;break}for(i=r;i<512+r;i++)n.push(t[i][1]);return e.abrupt("break",9);case 6:r++,e.next=2;break;case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),findCurrentNow=function(e,t){for(var a=0;a<rawData.length;a++)if(rawData[a][0]==e)for(var n=a;n<512+a;n++)if(rawData[n][1]==t)return rawData[n][2]},findAccuracyNow=function(){var e=adaptiveVariablesValues.skipRows,t=adaptiveVariablesValues.skipColumns,a="".concat(e,"_").concat(t),n=configuration.accuracyMap[a];accuracyArray.push(n)},handleMLAccuracy=function(){return accuracyArray.length>0?accuracyArray.reduce((function(e,t){return e+t}))/accuracyArray.length:0},adaptUp=function(){console.log("made it 1"),adaptiveVariablesValues.skipRows!==lowerAdaptationThreshold&&(adaptiveVariablesValues.skipRows=adaptiveVariablesValues.skipRows-adaptationStepSize),adaptiveVariablesValues.skipColumns!==lowerAdaptationThreshold&&(adaptiveVariablesValues.skipColumns=adaptiveVariablesValues.skipColumns-adaptationStepSize)},adaptDown=function(){console.log("made it 2"),adaptiveVariablesValues.skipRows<upperAdaptationThreshold&&(adaptiveVariablesValues.skipRows=adaptiveVariablesValues.skipRows+adaptationStepSize),adaptiveVariablesValues.skipColumns<upperAdaptationThreshold&&(adaptiveVariablesValues.skipColumns=adaptiveVariablesValues.skipColumns+adaptationStepSize)},_context5.next=69,getData();case 69:return _context5.next=71,extractTimeArray(rawData);case 71:timeArray=_context5.sent,adaptiveVariablesValues=initializeAdaptiveVariables(adaptiveVariables);case 73:if(!(simulationTime<timeArray[timeArray.length-1])){_context5.next=96;break}return bootTime=0,executedTasks=!1,_context5.next=78,findClosestValue(timeArray,simulationTime);case 78:return closestTimestamp=_context5.sent,_context5.next=81,extractVoltageArray(rawData,closestTimestamp);case 81:return voltageArray=_context5.sent,_context5.next=84,findClosestValue(voltageArray,oldVoltage);case 84:closestVoltage=_context5.sent,current=15*findCurrentNow(closestTimestamp,closestVoltage),newVoltage=calculateNewVoltage(oldVoltage,current,stepTime),!1===hasBeenMax&&newVoltage>=upperThresholdVoltage&&(hasBeenMax=!0,energy=calculateEnergy(newVoltage),usefulEnergy=energy-calculateEnergy(lowerThresholdVoltage),remainingUsefulEnergy=usefulEnergy-_config_mnist_json__WEBPACK_IMPORTED_MODULE_7__.initOverheadEnergy,totalRemainingEnergy=remainingUsefulEnergy+calculateEnergy(lowerThresholdVoltage),newVoltage=calculateRemainingVoltage(totalRemainingEnergy),bootTime=_config_mnist_json__WEBPACK_IMPORTED_MODULE_7__.time,executedTasks=!0),!0===hasBeenMax&&newVoltage<=lowerThresholdVoltage&&(hasBeenMax=!1),newVoltage>=lowerThresholdVoltage&&!0===hasBeenMax?(_energy=calculateEnergy(newVoltage),_usefulEnergy=_energy-calculateEnergy(lowerThresholdVoltage),_remainingUsefulEnergy=executeTasks(_usefulEnergy),_totalRemainingEnergy=_remainingUsefulEnergy+calculateEnergy(lowerThresholdVoltage),oldVoltage=calculateRemainingVoltage(_totalRemainingEnergy),executedTasks=!0):(stepTime=.01,oldVoltage=newVoltage,executedTasks=!1,taskCount=0),simulationTime=simulationTime+stepTime+bootTime,executedTasks?onTime+=1e3*(stepTime+bootTime):offTime+=1e3*stepTime,appCompletionTime=onTime+offTime,appCompleted&&(appCompletions+=1,appCompleted=!1,s_onTime.unshift(onTime),s_onTime.pop(),s_offTime.unshift(offTime),s_offTime.pop(),s_appCompTime.unshift(appCompletionTime),s_appCompTime.pop(),s_taskCount.unshift(taskCount),s_taskCount.pop(),s_pFC.unshift(powerFailureCount),s_pFC.pop(),console.log("onTime",s_onTime),console.log("offTime",s_offTime),console.log("app completion time",s_appCompTime),console.log("taskCount",s_taskCount),console.log("failure count",s_pFC),console.log("skip Rows",adaptiveVariablesValues.skipRows),console.log("skip Columns",adaptiveVariablesValues.skipColumns),adapt&&(avgOnTime=average(s_onTime.slice(1,histArraySize)),avgOffTime=average(s_offTime.slice(1,histArraySize)),avgAppCompletionTime=average(s_appCompTime.slice(1,histArraySize)),avgTaskCount=average(s_taskCount.slice(1,histArraySize)),avgpowerFailureCount=average(s_pFC.slice(1,histArraySize))),findAccuracyNow(),0!==adaptiveVariablesValues.skipColumns||0!==adaptiveVariablesValues.skipRows?onTimeAccuracy.push({originalAccuracy:accuracyArray[accuracyArray.length-1],Time:simulationTime}):0!=adaptiveVariablesValues.skipColumns&&0!=adaptiveVariablesValues.skipRows||offTimeAccuracy.push({adaptedAccuracy:accuracyArray[accuracyArray.length-1],Time:simulationTime}),adapt&&(shouldAdaptUp1=Object(mathjs__WEBPACK_IMPORTED_MODULE_9__.a)(equation1,{s_onTime:s_onTime[index1],avgOnTime:avgOnTime,s_offTime:s_offTime[index1],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index1],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index1],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index1],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptUp2=Object(mathjs__WEBPACK_IMPORTED_MODULE_9__.a)(equation2,{s_onTime:s_onTime[index2],avgOnTime:avgOnTime,s_offTime:s_offTime[index2],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index2],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index2],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index2],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptDown1=Object(mathjs__WEBPACK_IMPORTED_MODULE_9__.a)(equation3,{s_onTime:s_onTime[index3],avgOnTime:avgOnTime,s_offTime:s_offTime[index3],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index3],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index3],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index3],avgpowerFailureCount:avgpowerFailureCount}),shouldAdaptDown2=Object(mathjs__WEBPACK_IMPORTED_MODULE_9__.a)(equation4,{s_onTime:s_onTime[index4],avgOnTime:avgOnTime,s_offTime:s_offTime[index4],avgOffTime:avgOffTime,s_appCompTime:s_appCompTime[index4],avgAppCompletionTime:avgAppCompletionTime,s_taskCount:s_taskCount[index4],avgTaskCount:avgTaskCount,s_pFC:s_pFC[index4],avgpowerFailureCount:avgpowerFailureCount}),console.log(s_pFC[0]<avgpowerFailureCount),console.log(s_pFC[0]>avgpowerFailureCount),equation.adaptUp.includes(">")&&equation.adaptDown.includes("<")?shouldAdaptUp1>shouldAdaptUp2?adaptUp():shouldAdaptDown1<shouldAdaptDown2&&adaptDown():equation.adaptUp.includes("<")&&equation.adaptDown.includes(">")?shouldAdaptUp1<shouldAdaptUp2?adaptUp():shouldAdaptDown1>shouldAdaptDown2&&adaptDown():equation.adaptUp.includes(">")&&equation.adaptDown.includes(">")?shouldAdaptUp1>shouldAdaptUp2?adaptUp():shouldAdaptDown1>shouldAdaptDown2&&adaptDown():equation.adaptUp.includes("<")&&equation.adaptDown.includes("<")&&(shouldAdaptUp1<shouldAdaptUp2?adaptUp():shouldAdaptDown1<shouldAdaptDown2&&adaptDown())),onTime=0,offTime=0,appCompletionTime=0,taskCount=0,powerFailureCount=0,currentTaskNumber=0,currentTaskIterationNumber=0,currentTask=configuration.tasks[currentTaskNumber],console.log("app completions",appCompletions)),_context5.next=73;break;case 96:return mlAccuracy=handleMLAccuracy(),roundedAccuracy=mlAccuracy.toFixed(2),console.log("average accuracy of all classifications",roundedAccuracy),_context5.abrupt("return",{appCompletions:appCompletions,mlAccuracy:roundedAccuracy,onTimeAccuracy:onTimeAccuracy,offTimeAccuracy:offTimeAccuracy});case 100:case"end":return _context5.stop()}}),_callee5)}))),_Main.apply(this,arguments)}__webpack_exports__.a=Main},417:function(e,t){},423:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),o=a.n(i),s=a(28),c=a.n(s),_=a(51),l=a(83),u=a(20),p=a(212),d=a(213),m=a(214),f=a(246),g=a(124),b=a(125),h=a(126),k=a(127),y=a(128),T=a(47);function x(){return(x=Object(_.a)(c.a.mark((function e(t){var a,n,r,i,o,s,l,u,p,d,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(){return(o=Object(_.a)(c.a.mark((function e(){var n,r,i,o,s,_,l,u,p,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("High-Energy"!==t){e.next=10;break}return e.next=3,fetch(g.a);case 3:return n=e.sent,e.next=6,n.text();case 6:r=e.sent,a=Object(T.a)(r),e.next=48;break;case 10:if("Low-Energy"!==t){e.next=20;break}return e.next=13,fetch(b.a);case 13:return i=e.sent,e.next=16,i.text();case 16:o=e.sent,a=Object(T.a)(o),e.next=48;break;case 20:if("Random"!==t){e.next=30;break}return e.next=23,fetch(h.a);case 23:return s=e.sent,e.next=26,s.text();case 26:_=e.sent,a=Object(T.a)(_),e.next=48;break;case 30:if("Moving-Fast"!==t){e.next=40;break}return e.next=33,fetch(k.a);case 33:return l=e.sent,e.next=36,l.text();case 36:u=e.sent,a=Object(T.a)(u),e.next=48;break;case 40:if("Moving-Slow"!==t){e.next=48;break}return e.next=43,fetch(y.a);case 43:return p=e.sent,e.next=46,p.text();case 46:d=e.sent,a=Object(T.a)(d);case 48:case"end":return e.stop()}}),e)})))).apply(this,arguments)},i=function(){return o.apply(this,arguments)},n=[],r=[],s=function(e){var t=0,a=[],i=[],o=[];e.forEach((function(e,s,c){a.push(e[0]),i.push(e[1]),o.push(e[2]),512===(t+=1)&&(n.push(Math.max.apply(Math,a)),r.push(Math.max.apply(Math,u(l(i,o)))),i=[],o=[],t=0)}))},l=function(e,t){var a=e.map((function(e,a){return[e,t[a]]}));return a},u=function(e){var t=e.map((function(e){return[e[0]*e[1]]}));return t},p=function(e){var t=[];return e.forEach((function(e,a,n){t.push({Time:e[0],Power:1e3*e[1]})})),t},e.next=10,i();case 10:return s(a),d=l(n,r),m=p(d),e.abrupt("return",m);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v,O,j,A,C,w,E=function(e){return x.apply(this,arguments)},D=a(455),M=a(475),V=a(459),P=a(234),I=a(49),U=a(235),S=a(114),q=a(112),L=a(233),R=a(231),W=a(6),B=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={data:[],onTimeAccuracy:[],offTimeAccuracy:[]},n.onTimeAccuracy=e.onTimeAccuracy,n.offTimeAccuracy=e.offTimeAccuracy,n.csv=e.csv,n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;E(this.csv).then((function(t){e.setState({data:t}),console.log(t)})),this.setState({onTimeAccuracy:this.props.offTimeAccuracy}),this.setState({onTimeAccuracy:this.props.offTimeAccuracy})}},{key:"componentDidUpdate",value:function(e){var t=this;e.csv!==this.props.csv&&E(this.props.csv).then((function(e){t.setState({data:e}),console.log(e)})),e.onTimeAccuracy!==this.props.onTimeAccuracy&&this.setState({onTimeAccuracy:this.props.onTimeAccuracy}),e.offTimeAccuracy!==this.props.offTimeAccuracy&&this.setState({offTimeAccuracy:this.props.offTimeAccuracy}),console.log(this.state)}},{key:"render",value:function(){return Object(W.jsx)(D.a,{width:"100%",height:"100%",children:Object(W.jsxs)(M.a,{width:500,height:300,margin:{top:5,right:0,left:0,bottom:10},children:[Object(W.jsx)("defs",{children:Object(W.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(W.jsx)("stop",{offset:"5%",stopColor:"#2AB06E",stopOpacity:.8}),Object(W.jsx)("stop",{offset:"95%",stopColor:"#2AB06E",stopOpacity:.4})]})}),Object(W.jsx)(V.a,{strokeDasharray:"3 3"}),Object(W.jsx)(P.a,{dataKey:"Time",type:"number",domain:["dataMin","dataMax"],ticks:[15,30,45,60],children:Object(W.jsx)(I.a,{value:"Time",offset:-5,position:"insideBottom"})}),Object(W.jsx)(U.a,{children:Object(W.jsx)(I.a,{value:"Power (mW)",offset:0,position:"middle",angle:-90})}),Object(W.jsx)(U.a,{yAxisId:"right",orientation:"right",domain:[0,100],children:Object(W.jsx)(I.a,{value:"Accuracy (%)",offset:0,position:"middle",angle:-90})}),Object(W.jsx)(S.a,{}),Object(W.jsx)(q.a,{verticalAlign:"top",height:36}),Object(W.jsx)(L.a,{data:this.state.data,type:"monotone",dataKey:"Power",stroke:"#2AB06E",fillOpacity:1,fill:"url(#colorPv)",activeDot:{r:2}}),Object(W.jsx)(R.a,{yAxisId:"right",data:this.state.onTimeAccuracy,type:"monotone",dataKey:"originalAccuracy",stroke:"#E33737",strokeWidth:.5,activeDot:{r:2}}),Object(W.jsx)(R.a,{yAxisId:"right",data:this.state.offTimeAccuracy,type:"monotone",dataKey:"adaptedAccuracy",stroke:"#5559D9",strokeWidth:.5,activeDot:{r:2}})]})})}}]),a}(n.PureComponent),F=a(98),K=a(143),N=a(236),z=a(480),G=a(465),H=a(478),Z=a(469),J=a(483),$=a(470),Q=a(479),X=a(471),Y=a(482),ee=a(473),te=a(484),ae=a(472),ne=a(10),re=a(245),ie=(a(477),a(418),a(171)),oe=a(146);var se=function(){var e=[],t=F,a=Object(n.useState)("Moving-Fast"),r=Object(u.a)(a,2),i=r[0],o=r[1],s=Object(n.useState)(t.adaptationStrategy[0]),p=Object(u.a)(s,2),d=p[0],m=(p[1],Object(n.useState)(d.tasks)),f=Object(u.a)(m,2),g=f[0],b=(f[1],Object(n.useState)(d.adaptiveVariables)),h=Object(u.a)(b,2),k=(h[0],h[1],Object(n.useState)([])),y=Object(u.a)(k,2),T=y[0],x=y[1],E=Object(n.useState)(0),D=Object(u.a)(E,2),M=D[0],V=D[1],P=Object(n.useState)(0),I=Object(u.a)(P,2),U=I[0],S=I[1],q=Object(n.useState)([]),L=Object(u.a)(q,2),R=L[0],se=L[1],ce=Object(n.useState)([]),_e=Object(u.a)(ce,2),le=_e[0],ue=_e[1],pe=Object(n.useState)(""),de=Object(u.a)(pe,2),me=de[0],fe=de[1],ge=Object(n.useState)(""),be=Object(u.a)(ge,2),he=be[0],ke=be[1],ye=Object(n.useState)(String.raw(v||(v=Object(l.a)(["mathit{if} (mathit{s_off}_{n} - epsilon) < \frac{1}{n}sum_{i=1}^{n-1} mathit{s_off}_{i}"],["\\mathit{if}\\ (\\mathit{s\\_off}_{n} - \\epsilon) < \\frac{1}{n}\\sum_{i=1}^{n-1} \\mathit{s\\_off}_{i}"])))),Te=Object(u.a)(ye,2),xe=Te[0],ve=Te[1],Oe=Object(n.useState)(String.raw(O||(O=Object(l.a)(["mathit{if} (mathit{s_off}_{n} + epsilon) > \frac{1}{n}sum_{i=1}^{n-1} mathit{s_off}_{i}"],["\\mathit{if}\\ (\\mathit{s\\_off}_{n} + \\epsilon) > \\frac{1}{n}\\sum_{i=1}^{n-1} \\mathit{s\\_off}_{i}"])))),je=Object(u.a)(Oe,2),Ae=je[0],Ce=je[1],we=Object(n.useState)(!1),Ee=Object(u.a)(we,2),De=Ee[0],Me=Ee[1],Ve=Object(n.useState)(!1),Pe=Object(u.a)(Ve,2),Ie=Pe[0],Ue=Pe[1],Se=Object(n.useState)(0),qe=Object(u.a)(Se,2),Le=qe[0],Re=qe[1],We=Object(n.useState)(0),Be=Object(u.a)(We,2),Fe=Be[0],Ke=Be[1],Ne=!1;Object(n.useEffect)((function(){ze(),x(e)}),[]);var ze=function(){var t=Object(_.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=150,n=50,g.map((function(t,r,i){0===r?e.push({id:r+1,data:{label:t.taskName},position:{x:a+500,y:n},sourcePosition:"right",targetPosition:"bottom",style:{backgroundColor:"#E8E8FC",borderRadius:10,padding:40,fontSize:9,fontWeight:"bold"}},{id:"arrow"+r+1,type:"default",source:r+1,target:r+2,arrowHeadType:"arrowclosed",animated:!0,style:{stroke:"#ffffff",strokeWidth:3}}):r+1===g.length?(150===a?a=400:400===a&&(a=150),n+=100,e.push({id:r+1,data:{label:t.taskName},position:{x:a,y:n},sourcePosition:"right",targetPosition:"top",style:{backgroundColor:"#E8E8FC",borderRadius:10,padding:40,fontSize:9,fontWeight:"bold"}},{id:"arrow"+r+1,type:"default",source:r+1,target:1,arrowHeadType:"arrowclosed",animated:!0,style:{stroke:"#ffffff",strokeWidth:3}})):(150===a?a=400:400===a&&(a=150),n+=100,e.push({id:r+1,data:{label:t.taskName},position:{x:a,y:n},sourcePosition:"right",targetPosition:"top",style:{backgroundColor:"#E8E8FC",borderRadius:10,padding:40,fontSize:9,fontWeight:"bold"}},{id:"arrow"+r+1,type:"default",source:r+1,target:r+2,arrowHeadType:"arrowclosed",animated:!0,style:{stroke:"#ffffff",strokeWidth:3}}))}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ge=Object(ne.a)({root:{color:"#0058FF",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-10,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:8},rail:{height:8,borderRadius:8,backgroundColor:"#000000",boxShadow:" 0px 2px 4px 0px #000000"}})(z.a);return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("div",{style:Ie?{pointerEvents:"none",opacity:"0.5"}:{},children:[Object(W.jsx)("div",{style:{flex:1,position:"absolute",width:"68%",height:"70%",left:0,top:0,backgroundColor:"#69AA83",boxShadow:"inset 0px 0px 20px 0px #ffffff"},children:Object(W.jsxs)(K.c,{elements:T,arrowHeadColor:"#ffffff",children:[Object(W.jsx)(K.b,{}),Object(W.jsx)(K.a,{variant:"dots",gap:16,size:1})]})}),Object(W.jsx)("div",{style:{flex:1,position:"absolute",width:"32%",height:"70%",right:0,top:0},children:Object(W.jsxs)("div",{style:{flex:1,padding:30,height:"93%"},children:[Object(W.jsxs)("div",{style:{flex:1,flexDirection:"row",marginTop:10},children:[Object(W.jsx)("div",{style:{fontFamily:"GemunuLibre-ExtraBold",fontSize:45,fontWeight:"600",textAlign:"center"},children:"Configuration"}),Object(W.jsx)(G.a,{style:{marginLeft:"90%",top:-45},onClick:function(){return Me(!De)},children:Object(W.jsx)(re.a,{size:24,color:"#7F8489"})})]}),Object(W.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,fontFamily:"GemunuLibre-SemiBold",textDecoration:"underline",marginBottom:"2%"},children:"Step 1: Adjust Knobs"}),Object(W.jsx)(Ge,{valueLabelDisplay:"auto","aria-label":"pretto slider",value:Le,max:8,onChange:function(e,t){Re(t)},onChangeCommitted:function(e,t){Re(t)}}),Object(W.jsx)("div",{style:{flex:1,fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",marginBottom:25},children:"History Array Size"}),Object(W.jsx)(Ge,{valueLabelDisplay:"auto","aria-label":"pretto slider",value:Fe,max:8,onChange:function(e,t){Ke(t)},onChangeCommitted:function(e,t){Ke(t)}}),Object(W.jsx)("div",{style:{flex:1,fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",marginBottom:25},children:"Adaptation Step Size"}),Object(W.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,fontFamily:"GemunuLibre-SemiBold",textDecoration:"underline",marginBottom:"2%",marginTop:"5%"},children:"Step 2: Enter Heuristic Equation"}),Object(W.jsxs)("div",{style:{marginTop:"2%",borderWidth:2,borderColor:"#000",borderStyle:"solid",borderRadius:5},children:[Object(W.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",fontWeight:"bold",marginTop:"2%"},children:"Adapt Up"}),Object(W.jsx)(ie.BlockMath,{children:xe}),Object(W.jsx)("div",{style:{display:"inline"},children:Object(W.jsx)(H.a,{label:"Adapt Up",variant:"filled",style:{width:"100%"},onChange:function(e){return function(e){console.log(e.target.value),fe(e.target.value)}(e)},onKeyPress:function(e){"Enter"===e.key&&function(){var e=Object(oe.b)(me).toTex();ve(String.raw(j||(j=Object(l.a)(["mathit{if} ",""],["\\mathit{if}\\ ",""])),e))}()}})})]}),Object(W.jsxs)("div",{style:{marginTop:"1%",borderWidth:2,borderColor:"#000",borderStyle:"solid",borderRadius:5},children:[Object(W.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:20,textAlign:"center",fontWeight:"bold",marginTop:"2%"},children:"Adapt Down"}),Object(W.jsx)(ie.BlockMath,{children:Ae}),Object(W.jsx)("div",{style:{display:"inline"},children:Object(W.jsx)(H.a,{label:"Adapt Down",variant:"filled",style:{width:"100%"},onChange:function(e){return function(e){console.log(e.target.value),ke(e.target.value)}(e)},onKeyPress:function(e){"Enter"===e.key&&function(){var e=Object(oe.b)(he).toTex();Ce(String.raw(A||(A=Object(l.a)(["mathit{if} ",""],["\\mathit{if}\\ ",""])),e))}()}})})]}),Object(W.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center",fontSize:25,fontFamily:"GemunuLibre-SemiBold",textDecoration:"underline",marginBottom:"2%",marginTop:"5%"},children:"Step 3: Check Adaptation and Run"}),Object(W.jsxs)("div",{style:{flexDirection:"row",marginLeft:"32%"},children:[Object(W.jsx)(Z.a,{control:Object(W.jsx)(J.a,{size:"medium",color:"primary",onChange:function(){return Ne=!Ne}}),label:"Adapt"}),Object(W.jsx)($.a,{size:"large",variant:"contained",color:"primary",onClick:function(){return function(){var e={adaptUp:me,adaptDown:he};Ue(!0);var t=Object(oe.b)(me).toTex();ve(String.raw(C||(C=Object(l.a)(["mathit{if} ",""],["\\mathit{if}\\ ",""])),t));var a=Object(oe.b)(he).toTex();Ce(String.raw(w||(w=Object(l.a)(["mathit{if} ",""],["\\mathit{if}\\ ",""])),a)),console.log(Le),console.log(Fe),console.log(Ne),Object(N.a)(Le,Fe,e,Ne,i).then((function(e){console.log(e),V(e.appCompletions),S(e.mlAccuracy),se(e.onTimeAccuracy),ue(e.offTimeAccuracy),Ue(!1)}))}()},children:"Execute"})]})]})}),Object(W.jsx)("div",{style:{flex:1,position:"absolute",width:"30%",height:"30%",right:0,bottom:0},children:Object(W.jsxs)("div",{style:{flex:1,padding:30},children:[Object(W.jsx)("div",{style:{flex:1,fontFamily:"GemunuLibre-ExtraBold",fontSize:45,textAlign:"center"},children:"Statistics"}),Object(W.jsxs)("div",{style:{flexDirection:"row",marginTop:70},children:[Object(W.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline"},children:"App Completions:"}),Object(W.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline",marginLeft:"40%"},children:M})]}),Object(W.jsxs)("div",{style:{flexDirection:"row",marginTop:70},children:[Object(W.jsx)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline"},children:"Accuracy:"}),Object(W.jsxs)("div",{style:{fontFamily:"GemunuLibre-Light",fontSize:40,display:"inline",marginLeft:"50%"},children:[U,"%"]})]})]})}),Object(W.jsx)("div",{style:{flex:1,position:"absolute",width:"70%",height:"30%",left:0,bottom:0},children:Object(W.jsx)(B,{onTimeAccuracy:R,offTimeAccuracy:le,csv:i})}),Object(W.jsxs)(Q.a,{open:De,onClose:function(){return Me(!1)},"aria-labelledby":"max-width-dialog-title",fullWidth:!0,maxWidth:"md",children:[Object(W.jsx)(X.a,{id:"form-dialog-title",children:"Settings"}),Object(W.jsx)(Y.a,{id:"demo-simple-select-label",children:"CSV Energy Profile"}),Object(W.jsxs)(ee.a,{labelId:"demo-simple-select-label",placeholder:"CSV Energy Profile",id:"demo-simple-select",value:i,onChange:function(e){return o(e.target.value)},children:[Object(W.jsx)(te.a,{value:"High-Energy",children:"High Energy"}),Object(W.jsx)(te.a,{value:"Low-Energy",children:"Low Energy"}),Object(W.jsx)(te.a,{value:"Random",children:"Random"}),Object(W.jsx)(te.a,{value:"Moving-Fast",children:"Moving Fast"}),Object(W.jsx)(te.a,{value:"Moving-Slow",children:"Moving Slow"})]}),Object(W.jsxs)(ae.a,{children:[Object(W.jsx)($.a,{onClick:function(){return Me(!1)},color:"primary",children:"Save"}),Object(W.jsx)($.a,{onClick:function(){return Me(!1)},color:"primary",children:"Cancel"})]})]})]})})};a(423);o.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(se,{})}),document.getElementById("root"))},47:function(e,t,a){"use strict";t.a=function(e,t){void 0==t&&(t=","),t&&t.length>1&&(t=",");for(var a=0,n=e.charAt(a),r=0,i=new Array;""!=n;){for(;" "==n||"\t"==n||"\r"==n;)n=e.charAt(++a);var o="";if('"'==n){n=e.charAt(++a);do{if('"'!=n&&(o+=n,n=e.charAt(++a)),'"'==n)'"'==e.charAt(a+1)&&(o+='"',a+=2,n=e.charAt(a))}while(""!=n&&'"'!=n);if(""==n)throw"Unexpected end of data, double-quote expected";n=e.charAt(++a)}else for(;""!=n&&n!=t&&"\n"!=n&&" "!=n&&"\t"!=n&&"\r"!=n;)o+=n,n=e.charAt(++a);for(i.length<=r&&i.push(new Array),i[r].push(o);" "==n||"\t"==n||"\r"==n;)n=e.charAt(++a);if(n==t)0;else if("\n"==n)0,r++;else if(""!=n)throw"Delimiter expected after character "+a;n=e.charAt(++a)}return i}},98:function(e){e.exports=JSON.parse('{"applicationName":"MNIST Classifier","time":0.000128,"initOverheadEnergy":0.00002,"adaptationStrategy":[{"type":"Crop Image","adaptiveVariables":["skipRows","skipColumns"],"accuracyMap":{"0_0":92.8,"1_1":92.8,"2_2":92.6,"3_3":92.2,"4_4":90.9,"5_5":88.1,"6_6":79.1,"7_7":65.8,"8_8":42.3,"9_9":29.6,"10_10":24.5,"11_11":17.2,"12_12":13.3,"13_13":16.7,"14_14":8.9},"tasks":[{"taskName":"task_init","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.00000408,"nextTask":"task_neural_network_hypothesis"},{"taskName":"task_neural_network_hypothesis","adaptiveVars":["skipRows","skipColumns"],"taskIterations":"(28 - skipRows - skipColumns) * 10","taskWeight":21,"time":0.003175,"energyPerItr":0.00004674,"nextTask":"task_neural_network_softmax_max"},{"taskName":"task_neural_network_softmax_max","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000127,"energyPerItr":0.00000244,"nextTask":"task_neural_network_softmax_sum"},{"taskName":"task_neural_network_softmax_sum","adaptiveVars":null,"taskIterations":10,"taskWeight":28,"time":0.004178,"energyPerItr":0.00033218,"nextTask":"task_neural_network_softmax"},{"taskName":"task_neural_network_softmax","adaptiveVars":null,"taskIterations":1,"taskWeight":5,"time":0.000707,"energyPerItr":0.00000996,"nextTask":"task_classify"},{"taskName":"task_classify","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000151,"energyPerItr":0.00000264,"nextTask":"task_done"},{"taskName":"task_done","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000173,"energyPerItr":0.00000245,"nextTask":"task_sleep"},{"taskName":"task_sleep","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.000157,"nextTask":"task_init"}]},{"type":"Skip Classes","adaptiveVariables":"skipClass","accuracyMap":{"0":92.8,"1":84.2,"2":76.1,"3":66.7,"4":57.8,"5":50.1,"6":40.6,"7":31,"8":21.1,"9":9.8,"10":9.8},"tasks":[{"taskName":"task_init","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.00000408,"nextTask":"task_neural_network_hypothesis"},{"taskName":"task_neural_network_hypothesis","adaptiveVars":["skipClass"],"taskIterations":"28 * (10 - skipClass)","taskWeight":21,"time":0.003175,"energyPerItr":0.00004674,"nextTask":"task_neural_network_softmax_max"},{"taskName":"task_neural_network_softmax_max","adaptiveVars":["skipClass"],"taskIterations":1,"taskWeight":1,"time":0.000127,"energyPerItr":0.00000244,"nextTask":"task_neural_network_softmax_sum"},{"taskName":"task_neural_network_softmax_sum","adaptiveVars":["skipClass"],"taskIterations":"10 - skipClass","taskWeight":28,"time":0.004178,"energyPerItr":0.00033218,"nextTask":"task_neural_network_softmax"},{"taskName":"task_neural_network_softmax","adaptiveVars":["skipClass"],"taskIterations":1,"taskWeight":5,"time":0.000707,"energyPerItr":0.00000996,"nextTask":"task_classify"},{"taskName":"task_classify","adaptiveVars":["skipClass"],"taskIterations":1,"taskWeight":1,"time":0.000151,"energyPerItr":0.00000264,"nextTask":"task_done"},{"taskName":"task_done","adaptiveVars":null,"taskIterations":1,"taskWeight":1,"time":0.000173,"energyPerItr":0.00000245,"nextTask":"task_sleep"},{"taskName":"task_sleep","adaptiveVars":null,"taskIterations":1,"taskWeight":0,"time":0.000018,"energyPerItr":0.000157,"nextTask":"task_init"}]}]}')}},[[424,1,2]]]);
//# sourceMappingURL=main.9d8f09ec.chunk.js.map