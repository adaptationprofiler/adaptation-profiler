import File from '../misc/test.csv';
import csv2array from './CSVToArray';

async function Main() {

    // Initial Values
    let rawData;
    let time = [];
    let mpp = [];

    // Handles CSV Data
    async function getData() {
        const response = await fetch(File);
        const table = await response.text();
        rawData = csv2array(table);
    }

    const findMaxPowerPoint = (input) => {
        let i = 0;
        let temp_time = [];
        let voltage = [];
        let current = [];
        input.forEach((item, index, array) => {
            temp_time.push(item[0]);
            voltage.push(item[1]);
            current.push(item[2]);
            i = i + 1;
            if (i === 512) {
                time.push(Math.max.apply(Math, temp_time));
                mpp.push(Math.max.apply(Math, dotProduct(zipArray(voltage, current))));
                voltage = [];
                current = [];
                i = 0;
            }
        })
    }

    const zipArray = (array1, array2) => {
        const zipArray = array1.map(function (e, i) {
            return [e, array2[i]];
        });
        return zipArray;
    }

    const dotProduct = (array) => {
        const dotProduct = array.map((item) => {
            return [(item[0] * item[1])];
        })
        return dotProduct;
    }

    const formatData = (input) => {
        const data = []
        input.forEach((item, index, array) => {
            data.push({ Time: item[0], Power: item[1]*1000 })
        })
        return data
    }

    // Script
    await getData();
    findMaxPowerPoint(rawData);
    const data = zipArray(time, mpp);
    const formattedData = formatData(data);
    return formattedData;

}

export default Main
