import File from '../misc/test.csv';
import MNIST from '../config/mnist.json';
import csv2array from './CSVToArray';

async function Main(histArraySize, stepSize, equation, adapt) {

    console.log("equation", equation)

    // Notes:
    // - button for run simulation
    // - report total executions on UI/UX
    // - loading indicator during executions
    // - at each app completion: find skip rows, and skip columns -> convert to a string in the form of 0_0 -> find value from accuracy dictionary (make a dictionary too) -> average these values -> report this as ML accuracy

    // Configuration
    const configuration = MNIST.adaptationStrategy[0];

    // Initial Values
    const capacitance = 200e-6; //micro-farads
    let newVoltage = 0; //volts
    let oldVoltage = 0 //volts
    let current = 0; //amperes
    let simulationTime = 0; //seconds
    let hasBeenMax = false;
    let rawData;

    // Useful Utility Arrays
    let timeArray = [];
    let accuracyArray = [];
    let accuracyReturn = [];

    // Task Management Logic
    let bootTime = 0;
    let executedTasks = false;
    let currentTask = configuration.tasks[0];
    let currentTaskNumber = 0;
    let currentTaskIterationNumber = 0;
    let adaptiveVariables = configuration.adaptiveVariables;

    // Adaptation Equations
    const equation1 = equation.adaptUp.split('>');
    const equation2 = equation.adaptUp.split('>').pop();
    const equation3 = equation.adaptDown.split('<')[0];
    const equation4 = equation.adaptDown.split('<').pop();

    // Adaptation Signals
    let onTime = 0;
    let avgOnTime = 0;
    let s_onTime = new Array(histArraySize + 1).fill(0);

    let offTime = 0;
    let avgOffTime = 0;
    let s_offTime = new Array(histArraySize + 1).fill(0);

    let appCompletionTime = 0;
    let avgAppCompletionTime = 0;
    let s_appCompTime = new Array(histArraySize + 1).fill(0);

    let taskCount = 0;
    let avgTaskCount = 0;
    let s_taskCount = new Array(histArraySize + 1).fill(0);

    let powerFailureCount = 0;
    let avgpowerFailureCount = 0;
    let s_pFC = new Array(histArraySize + 1).fill(0);

    let lowerAdaptationThreshold = 0;
    let upperAdaptationThreshold = 7;
    let adaptationStepSize = stepSize;

    // Threshold Logic
    let upperThresholdVoltage = 2.9 //volts
    let lowerThresholdVoltage = 1.9 //volts

    // Step Logic
    let stepTime = 0.01; //seconds

    // Global Runs Logic
    let appCompletions = 0;
    let appCompleted = false;

    // Functions Library

    async function getData() {
        const response = await fetch(File);
        const table = await response.text();
        rawData = csv2array(table);
    }

    const initializeAdaptiveVariables = (variables) => {
        let adaptiveVariablesValues = {}
        for (var i = 0; i < variables.length; i++) {
            adaptiveVariablesValues[variables[i]] = 0;
        }
        return adaptiveVariablesValues;
    }

    const average = list => list.reduce((prev, curr) => prev + curr) / list.length;

    const executeTasks = (energy) => {

        let availableEnergy = energy;
        if (typeof currentTask.taskIterations !== 'number') {
            let taskIterations;
            for (var i = 0; i < currentTask.adaptiveVars.length; i++) {
                window[currentTask.adaptiveVars[i]] = adaptiveVariablesValues[currentTask.adaptiveVars[i]];
            }
            taskIterations = eval(currentTask.taskIterations);
            if (energy > currentTask.energyPerItr) {
                stepTime = currentTask.time;
                availableEnergy = energy - currentTask.energyPerItr;
                taskCount = taskCount + currentTask.taskWeight;
                currentTaskIterationNumber = currentTaskIterationNumber + 1;
                if (taskIterations == currentTaskIterationNumber) {
                    console.log(currentTask.taskName);
                    console.log("task completion time", simulationTime);
                    if (currentTask.nextTask !== "task_init") {
                        currentTaskIterationNumber = 0;
                        currentTaskNumber = currentTaskNumber + 1;
                        currentTask = configuration.tasks[currentTaskNumber];
                    } else if (currentTask.nextTask === "task_init") {
                        appCompleted = true;
                    }
                }
                return availableEnergy;
            } else {
                stepTime = currentTask.time * (availableEnergy / currentTask.energyPerItr);
                hasBeenMax = false;
                powerFailureCount = powerFailureCount + 1;
                availableEnergy = calculateEnergy(lowerThresholdVoltage);
                return availableEnergy;
            }
        } else {
            const taskIterations = currentTask.taskIterations;
            if (energy > currentTask.energyPerItr) {
                stepTime = currentTask.time;
                availableEnergy = energy - currentTask.energyPerItr;
                taskCount = taskCount + currentTask.taskWeight;
                currentTaskIterationNumber = currentTaskIterationNumber + 1;
                if (taskIterations === currentTaskIterationNumber) {
                    console.log(currentTask.taskName);
                    console.log("task completion time", simulationTime);
                    if (currentTask.nextTask !== "task_init") {
                        currentTaskIterationNumber = 0;
                        currentTaskNumber = currentTaskNumber + 1;
                        currentTask = configuration.tasks[currentTaskNumber];
                    } else if (currentTask.nextTask === "task_init") {
                        appCompleted = true;
                    }
                }
                return availableEnergy;
            } else {
                stepTime = currentTask.time * (availableEnergy / currentTask.energyPerItr)
                hasBeenMax = false;
                powerFailureCount = powerFailureCount + 1;
                availableEnergy = calculateEnergy(lowerThresholdVoltage);
                return availableEnergy;
            }
        }
    }

    const calculateNewVoltage = (v, c, t) => {
        const newVoltage = ((1 / capacitance) * ((c) * (t))) + v;
        return newVoltage
    }

    const calculateRemainingVoltage = (energy) => {
        const voltage = Math.sqrt(2 * (1 / capacitance) * (energy));
        return voltage
    }

    const calculateEnergy = (voltage) => {
        const maxEnergy = (0.5) * (capacitance) * (voltage) * (voltage);
        return maxEnergy
    }

    const findClosestValue = async (arr, val) => {
        const closestValue = arr.reduce(function (prev, curr) {
            return (Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev);
        });
        return closestValue;
    }

    const extractTimeArray = async (arr) => {
        let newTimeArray = []
        let filteredArray = arr.filter((_, i) => i % 512 == 0);
        for (var a = 0; a < filteredArray.length; a++) {
            newTimeArray.push(filteredArray[a][0]);
        }
        return newTimeArray
    }

    const extractVoltageArray = async (arr, time) => {
        let newVoltageArray = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][0] == time) {
                for (var j = i; j < 512 + i; j++) {
                    newVoltageArray.push(arr[j][1]);
                }
                break;
            }
        }
        return newVoltageArray
    }

    const findCurrentNow = (time, voltage) => {
        for (var i = 0; i < rawData.length; i++) {
            if (rawData[i][0] == time) {
                for (var j = i; j < 512 + i; j++) {
                    if (rawData[j][1] == voltage) {
                        return rawData[j][2]
                    }
                }
            }
        }
    }

    const findAccuracyNow = () => {
        const skipRows = adaptiveVariablesValues.skipRows;
        const skipColumns = adaptiveVariablesValues.skipColumns;
        const accuracyMapString = `${skipRows}_${skipColumns}`;
        const accuracyMapValue = configuration.accuracyMap[accuracyMapString];
        accuracyArray.push(accuracyMapValue);
    }

    const handleMLAccuracy = () => {
        if (accuracyArray.length > 0) {
            const averageAccuracy = accuracyArray.reduce((a, b) => a + b) / accuracyArray.length;
            return averageAccuracy;
        } else {
            return 0;
        }
    }

    // Adaptation
    const adaptUp = () => {
        if (adapt) {
            if (adaptiveVariablesValues["skipRows"] !== lowerAdaptationThreshold) {
                adaptiveVariablesValues["skipRows"] = adaptiveVariablesValues["skipRows"] - adaptationStepSize;
            }
            if (adaptiveVariablesValues["skipColumns"] !== lowerAdaptationThreshold) {
                adaptiveVariablesValues["skipColumns"] = adaptiveVariablesValues["skipColumns"] - adaptationStepSize;
            }
        }
    }

    const adaptDown = () => {
        if (adapt) {
            if (adaptiveVariablesValues["skipRows"] < upperAdaptationThreshold) {
                adaptiveVariablesValues["skipRows"] = adaptiveVariablesValues["skipRows"] + adaptationStepSize;
            }
            if (adaptiveVariablesValues["skipColumns"] < upperAdaptationThreshold) {
                adaptiveVariablesValues["skipColumns"] = adaptiveVariablesValues["skipColumns"] + adaptationStepSize;
            }
        }
    }

    // Setup

    await getData();
    timeArray = await extractTimeArray(rawData);
    const adaptiveVariablesValues = initializeAdaptiveVariables(adaptiveVariables);

    // Main Script

    while (simulationTime < timeArray[timeArray.length - 1]) {

        // INSERT SOME LOGIC TO HANDLE TASKS HERE (POTENTIALLY)

        bootTime = 0;

        executedTasks = false;

        // Call Charge Capacitor

        // 1) Check which timestamp is closest to simulation time
        const closestTimestamp = await findClosestValue(timeArray, simulationTime);
        // console.log("closest Timestamp", closestTimestamp)
        // 1.5) Get array of voltages that corresponds to the given timestamp 
        const voltageArray = await extractVoltageArray(rawData, closestTimestamp);
        // 2) Find which voltage closely coresponds to oldVoltage within this IV curve
        const closestVoltage = await findClosestValue(voltageArray, oldVoltage);
        // 3) Lookuptable based on those 2 values to find current
        current = findCurrentNow(closestTimestamp, closestVoltage) * 15;
        // 4) Calculate new voltage based on the current
        newVoltage = calculateNewVoltage(oldVoltage, current, stepTime);

        // Check If capacitor hits upper threshold
        if (hasBeenMax === false && newVoltage >= upperThresholdVoltage) {
            hasBeenMax = true;
            const energy = calculateEnergy(newVoltage)
            const usefulEnergy = energy - calculateEnergy(lowerThresholdVoltage);
            const remainingUsefulEnergy = usefulEnergy - MNIST.initOverheadEnergy;
            const totalRemainingEnergy = remainingUsefulEnergy + calculateEnergy(lowerThresholdVoltage);
            newVoltage = calculateRemainingVoltage(totalRemainingEnergy)
            bootTime = MNIST.time;
            executedTasks = true;
        }

        if (hasBeenMax === true && newVoltage <= lowerThresholdVoltage) {
            hasBeenMax = false;
        }

        // Execute if capacitor voltage is within upper and lower thresholds
        if (newVoltage >= lowerThresholdVoltage && hasBeenMax === true) {
            const energy = calculateEnergy(newVoltage);
            const usefulEnergy = energy - calculateEnergy(lowerThresholdVoltage);
            const remainingUsefulEnergy = executeTasks(usefulEnergy);
            const totalRemainingEnergy = remainingUsefulEnergy + calculateEnergy(lowerThresholdVoltage);
            oldVoltage = calculateRemainingVoltage(totalRemainingEnergy);
            executedTasks = true;
        } else {
            stepTime = 0.01;
            oldVoltage = newVoltage;
            executedTasks = false;
            taskCount = 0;
        }

        // Increments simulation time
        simulationTime = simulationTime + stepTime + bootTime;

        // Increments on/off time
        if (executedTasks) {
            onTime = onTime + ((stepTime + bootTime) * 1000);
        } else {
            offTime = offTime + (stepTime * 1000);
        }
        appCompletionTime = onTime + offTime;

        // Handles App Completions
        if (appCompleted) {
            appCompletions = appCompletions + 1;
            appCompleted = false;

            // Push elements to the buffer
            s_onTime.unshift(onTime);
            s_onTime.pop();
            s_offTime.unshift(offTime);
            s_offTime.pop();
            s_appCompTime.unshift(appCompletionTime);
            s_appCompTime.pop();
            s_taskCount.unshift(taskCount);
            s_taskCount.pop();
            s_pFC.unshift(powerFailureCount);
            s_pFC.pop();
            console.log("onTime", s_onTime);
            console.log("offTime", s_offTime);
            console.log("app completion time", s_appCompTime);
            console.log("taskCount", s_taskCount);
            console.log("failure count", s_pFC);
            console.log("skip Rows", adaptiveVariablesValues["skipRows"]);
            console.log("skip Columns", adaptiveVariablesValues["skipColumns"]);

            // Averaging
            avgOnTime = average(s_onTime.slice(1, histArraySize));
            avgOffTime = average(s_offTime.slice(1, histArraySize));
            avgAppCompletionTime = average(s_appCompTime.slice(1, histArraySize));
            avgTaskCount = average(s_taskCount.slice(1, histArraySize));
            avgpowerFailureCount = average(s_pFC.slice(1, histArraySize));

            // Handles Graphical Display
            findAccuracyNow();
            if (adaptiveVariablesValues["skipColumns"] !== 0 || adaptiveVariablesValues["skipRows"] !== 0) {
                accuracyReturn.push({ Accuracy: accuracyArray[accuracyArray.length - 1], Time: simulationTime, Adapted: true })
            } else if (adaptiveVariablesValues["skipColumns"] == 0 || adaptiveVariablesValues["skipRows"] == 0) {
                accuracyReturn.push({ Accuracy: accuracyArray[accuracyArray.length - 1], Time: simulationTime, Adapted: false })
            }

            // Adaptation

            // const shouldAdaptUp = evaluatex(equation.adaptUp,
            //     { s_onTime: s_onTime },
            //     { avgOnTime: avgOnTime },
            //     { s_offTime: s_offTime },
            //     { avgOffTime: avgOffTime },
            //     { s_appCompTime: s_appCompTime },
            //     { avgAppCompletionTime: avgAppCompletionTime },
            //     { s_taskCount: s_taskCount },
            //     { s_taskCount: s_taskCount },
            //     { avgTaskCount: avgTaskCount },
            //     { s_pFC: s_pFC },
            //     { avgpowerFailureCount: avgpowerFailureCount },
            //     { latex: true }
            // );

            // const shouldAdaptDown = evaluatex(equation.adaptDown,
            //     { s_onTime: s_onTime },
            //     { avgOnTime: avgOnTime },
            //     { s_offTime: s_offTime },
            //     { avgOffTime: avgOffTime },
            //     { s_appCompTime: s_appCompTime },
            //     { avgAppCompletionTime: avgAppCompletionTime },
            //     { s_taskCount: s_taskCount },
            //     { s_taskCount: s_taskCount },
            //     { avgTaskCount: avgTaskCount },
            //     { s_pFC: s_pFC },
            //     { avgpowerFailureCount: avgpowerFailureCount },
            //     { latex: true }
            // );

            // if (shouldAdaptUp()) {
            //     adaptDown();
            // }
            // else if (shouldAdaptDown()) {
            //     adaptUp();
            // }

            // if (equation.term1 === "onTimeHistory") {
            //     if (s_onTime[0] > avgOnTime) {
            //         adaptDown();
            //     }
            //     else if (s_onTime[0] < avgOnTime) {
            //         adaptUp();
            //     }
            // }

            // if (equation.term1 === "offTimeHistory") {
            //     if (s_offTime[0] > avgOffTime) {
            //         adaptDown();
            //     }
            //     else if (s_offTime[0] < avgOffTime) {
            //         adaptUp();
            //     }
            // }

            // if (equation.term1 === "appCompletionTimeHistory") {
            //     if (s_appCompTime[0] > 1000) { // this is checking milli-seconds
            //         adaptDown();
            //     }
            //     else if (s_appCompTime[0] < avgAppCompletionTime) {
            //         adaptUp();
            //     }
            // }

            // if (equation.term1 === "taskCountHistory") {
            //     if (s_taskCount[0] < avgTaskCount) {
            //         adaptDown();
            //     }
            //     else if (s_taskCount[0] > avgTaskCount) {
            //         adaptUp();
            //     }
            // }

            // if (equation.term1 === "powerFailureCountHistory") {
            //     if (s_pFC[0] > avgpowerFailureCount) {
            //         adaptDown();
            //     }
            //     else if (s_pFC[0] < avgpowerFailureCount) {
            //         adaptUp();
            //     }
            // }

            // Reset adaptation signals
            onTime = 0;
            offTime = 0;
            appCompletionTime = 0;
            taskCount = 0;
            powerFailureCount = 0;
            currentTaskNumber = 0;
            currentTaskIterationNumber = 0;
            currentTask = configuration.tasks[currentTaskNumber];
            console.log("app completions", appCompletions);
        }

    }

    // Cleanup

    const mlAccuracy = handleMLAccuracy();
    const roundedAccuracy = mlAccuracy.toFixed(2);
    console.log("average accuracy of all classifications", roundedAccuracy)
    console.log(accuracyReturn)

    // Return

    return ({
        appCompletions: appCompletions,
        mlAccuracy: roundedAccuracy,
        accuracyGraph: accuracyReturn
    })

}

export default Main