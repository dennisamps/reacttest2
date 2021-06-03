import React from 'react';
import Chart from "../../utils/chart";
import * as d3 from "d3";

var dataNeed =[];
d3.csv("https://graphtest123.s3.eu-west-2.amazonaws.com/Fluids_Mobius_gradebook_sheets_1-18.csv") // request csv file
            .then(makeChart); // converts into an array then call makeChart() function

        // calls function to make a chart after it has been converted into an array
        function makeChart(students) { // takes in an array of students
                // Student is an array of objects where each object is something like:
                // {
                //   "Given": "Steffi Graf",
                //   "Last": "Graf",     
                //   "Class": "MECH50010 - Fluid Mechanics 2 2020-2021",
                //   "Gender": "Female"
                //   "Attempts" : "0"
                // }
                    console.log(students)

                //make dictionary for tutorial sheets - put in same order as csv
                var dictSheet = {Sheet18:[] , Sheet17:[] , Sheet16:[] ,Sheet15:[], Sheet14:[], Sheet13:[], Sheet12:[], Sheet11:[], Sheet10:[], Sheet9:[], Sheet8:[], Sheet7:[], Sheet6:[], Sheet5:[], Sheet4:[], Sheet3:[], Sheet2:[], Sheet1:[]};

                // for loop to check the week day when students started tutorial sheet
                for (var i =0; i < students.length; i++){
                    var count = -1;
                    for (var j =9; j <= 94; j += 5){
                        var key = Object.keys(students[i])[j]; // access title of start times
                        var value = students[i][key] // gives date in raw form
                        //convert date string into a time object
                        var date = new Date(value);
                        var weekNumber = weekOfYear(date);
                        //need to account for imperial calendar with 3rd october as week 1
                        if (weekOfYear(date) >= 40){
                            weekNumber -= 39;
                        } else {
                            weekNumber += 13;
                        }
                        // console.log("This is the time in week" + " " + weekOfYear(date) + "this is imperial week:" + " " + weekNumber)   
                        if (value != 0){
                            count ++;
                        } else{
                            continue
                        }
                    
                    key = Object.keys(dictSheet)[count]; //accesses tutorial sheet dictionary
                    dictSheet[key][i] = weekNumber;
                    }

                };
                // console.log("outside the loop  " + Object.values(dictSheet)[17])
                    // counts and order the total students who started tutorial sheet18 in that week. key(week) : value(occurances)
                    var Tutorial1 = _.countBy(Object.values(dictSheet)[17]); 
                    var Tutorial2 = _.countBy(Object.values(dictSheet)[16]);
                    var Tutorial3 = _.countBy(Object.values(dictSheet)[15]);
                    var Tutorial4 = _.countBy(Object.values(dictSheet)[14]);
                    var Tutorial5 = _.countBy(Object.values(dictSheet)[13]);
                    var Tutorial6 = _.countBy(Object.values(dictSheet)[12]);
                    var Tutorial7 = _.countBy(Object.values(dictSheet)[11]);
                    var Tutorial8 = _.countBy(Object.values(dictSheet)[10]);
                    var Tutorial9 = _.countBy(Object.values(dictSheet)[9]);
                    var Tutorial10 = _.countBy(Object.values(dictSheet)[8]);
                    var Tutorial11 = _.countBy(Object.values(dictSheet)[7]);
                    var Tutorial12 = _.countBy(Object.values(dictSheet)[6]);
                    var Tutorial13 = _.countBy(Object.values(dictSheet)[5]);
                    var Tutorial14 = _.countBy(Object.values(dictSheet)[4]);
                    var Tutorial15 = _.countBy(Object.values(dictSheet)[3]);
                    var Tutorial16 = _.countBy(Object.values(dictSheet)[2]);
                    var Tutorial17 = _.countBy(Object.values(dictSheet)[1]);
                    var Tutorial18 = _.countBy(Object.values(dictSheet)[0]);
                    console.log(dictSheet)
                console.log(Tutorial18) // creates array of weeks
                // var page2 = Object.values(dictSheet)[0]
                // console.log(page2)
                var newData18 = [];
                        for(var j=0; j < Object.keys(Tutorial18).length; j++){
                            newData18.push({
                                x: Object.keys(Tutorial18)[j],
                                y: Object.values(Tutorial18)[j]
                            });
                        }
                var newData17 = [];
                    for(var j=0; j < Object.keys(Tutorial17).length; j++){
                        newData17.push({
                            x: Object.keys(Tutorial17)[j],
                            y: Object.values(Tutorial17)[j]
                        });
                    }
                    var newData16 = [];
                    for(var j=0; j < Object.keys(Tutorial16).length; j++){
                        newData16.push({
                            x: Object.keys(Tutorial16)[j],
                            y: Object.values(Tutorial16)[j]
                        });
                    }
                    var newData15 = [];
                    for(var j=0; j < Object.keys(Tutorial15).length; j++){
                        newData15.push({
                            x: Object.keys(Tutorial15)[j],
                            y: Object.values(Tutorial15)[j]
                        });
                    }
                    var newData14 = [];
                    for(var j=0; j < Object.keys(Tutorial14).length; j++){
                        newData14.push({
                            x: Object.keys(Tutorial14)[j],
                            y: Object.values(Tutorial14)[j]
                        });
                    }
                    var newData13 = [];
                    for(var j=0; j < Object.keys(Tutorial13).length; j++){
                        newData13.push({
                            x: Object.keys(Tutorial13)[j],
                            y: Object.values(Tutorial13)[j]
                        });
                    }
                    var newData12 = [];
                    for(var j=0; j < Object.keys(Tutorial12).length; j++){
                        newData12.push({
                            x: Object.keys(Tutorial12)[j],
                            y: Object.values(Tutorial12)[j]
                        });
                    }
                    var newData11 = [];
                    for(var j=0; j < Object.keys(Tutorial11).length; j++){
                        newData11.push({
                            x: Object.keys(Tutorial11)[j],
                            y: Object.values(Tutorial11)[j]
                        });
                    }
                    var newData10 = [];
                    for(var j=0; j < Object.keys(Tutorial10).length; j++){
                        newData10.push({
                            x: Object.keys(Tutorial10)[j],
                            y: Object.values(Tutorial10)[j]
                        });
                    }
                    var newData9 = [];
                    for(var j=0; j < Object.keys(Tutorial9).length; j++){
                        newData9.push({
                            x: Object.keys(Tutorial9)[j],
                            y: Object.values(Tutorial9)[j]
                        });
                    }
                    var newData8 = [];
                    for(var j=0; j < Object.keys(Tutorial8).length; j++){
                        newData8.push({
                            x: Object.keys(Tutorial8)[j],
                            y: Object.values(Tutorial8)[j]
                        });
                    }
                    var newData7 = [];
                    for(var j=0; j < Object.keys(Tutorial7).length; j++){
                        newData7.push({
                            x: Object.keys(Tutorial7)[j],
                            y: Object.values(Tutorial7)[j]
                        });
                    }
                    var newData6 = [];
                    for(var j=0; j < Object.keys(Tutorial6).length; j++){
                        newData6.push({
                            x: Object.keys(Tutorial6)[j],
                            y: Object.values(Tutorial6)[j]
                        });
                    }
                    var newData5 = [];
                    for(var j=0; j < Object.keys(Tutorial5).length; j++){
                        newData5.push({
                            x: Object.keys(Tutorial5)[j],
                            y: Object.values(Tutorial5)[j]
                        });
                    }
                    var newData4 = [];
                    for(var j=0; j < Object.keys(Tutorial4).length; j++){
                        newData4.push({
                            x: Object.keys(Tutorial4)[j],
                            y: Object.values(Tutorial4)[j]
                        });
                    }
                    var newData3 = [];
                    for(var j=0; j < Object.keys(Tutorial3).length; j++){
                        newData3.push({
                            x: Object.keys(Tutorial3)[j],
                            y: Object.values(Tutorial3)[j]
                        });
                    }
                    var newData2 = [];
                    for(var j=0; j < Object.keys(Tutorial2).length; j++){
                        newData2.push({
                            x: Object.keys(Tutorial2)[j],
                            y: Object.values(Tutorial2)[j]
                        });
                    }
                    var newData1 = [];
                    for(var j=0; j < Object.keys(Tutorial1).length; j++){
                        newData1.push({
                            x: Object.keys(Tutorial1)[j],
                            y: Object.values(Tutorial1)[j]
                        });
                    }

    for(var i=0; i < data.length; i++){
        dataNeed.push(data)
    }
}


//function to work out week of the year
var weekOfYear = function(date){
var d = new Date(+date);
d.setHours(0,0,0);
d.setDate(d.getDate()+4-(d.getDay()||7));
return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};

//function to work out the current day of the year
Date.prototype.isLeapYear = function() {
var year = this.getFullYear();
if((year & 3) != 0) return false;
return ((year % 100) != 0 || (year % 400) == 0);
};

// Get Day of Year
Date.prototype.getDOY = function() {
var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var mn = this.getMonth();
var dn = this.getDate();
var dayOfYear = dayCount[mn] + dn;
if(mn > 1 && this.isLeapYear()) dayOfYear++;
return dayOfYear;
};

const dayOfYear = date =>
Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);


function sortNumber(a,b) {
return a - b;
}

function quantile(array, percentile) {
    array.sort(sortNumber);
    var index = percentile/100. * (array.length-1);
    if (Math.floor(index) == index) {
        var result = array[index];
    } else {
        var i = Math.floor(index)
        var fraction = index - i;
        result = array[i] + (array[i+1] - array[i]) * fraction;
    }
    return result;
}

// calculate sum
function sumArr(arr){
    var a = arr.slice();
    return a.reduce(function(a, b) { return parseFloat(a) + parseFloat(b); });
}

//calculate average
function calcAverage(arr){
    var a = arr.slice();
    if (a.length){
        var sum = sumArr(a);
        var avg = sum / a.length;
        return avg;
    }    
    return false;
}

// Standard deviation
function getSD(data) {
    let m = calcAverage(data);
    return Math.sqrt(data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
        }, 0) / (data.length - 1));
};

class Time extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: 'scatter',
        data: {
                
            datasets: [{ //input data
                label: 'Tutorial Sheet 18',
                data: [
                [newData18[0], newData18[1], newData18[2], newData18[3], newData18[4],newData18[5],newData18[6], newData18[7], newData18[8], newData18[9], newData18[10], newData18[11], newData18[12] ,newData18[13],newData18[14], newData18[15], newData18[16],newData18[18],newData18[18], newData18[19], newData18[20], newData18[21], newData18[22], newData18[23], newData18[24],newData18[25],newData18[26], newData18[27], newData18[28], newData18[29], newData18[30], newData18[31], newData18[32]], //plots week accessed
                    // {x: Object.keys(Tutorial18)[0], y: Object.values(Tutorial18)[0]}, 
                    // {x: Object.keys(Tutorial18)[1], y: Object.values(Tutorial18)[1]}
                ], //plots week accessed
                backgroundColor: '#0000cc',
                borderColor: '#0000cc',
                borderWidth: 3,
                borderColor: '#0000cc',
                hoverBorderWidth: 3,
                hoverBorderColor: '#00',
                fill : false,
                showLine: true
            },
            { //input data
                label: 'Tutorial Sheet 17',
                xAxesID: 'x-axis-2',
                data: [newData17[0], newData17[1], newData17[2], newData17[3], newData17[4],newData17[5],newData17[6], newData17[7], newData17[8], newData17[9], newData17[10], newData17[11], newData17[12] ,newData17[13],newData17[14], newData17[15], newData17[16],newData17[17],newData17[18], newData17[19], newData17[20], newData17[21], newData17[22], newData17[23], newData17[24],newData17[25],newData17[26], newData17[27], newData17[28], newData17[29], newData17[30], newData17[31], newData17[32], newData17[33], newData17[34]], //plots week accessed
                backgroundColor: '#FFC208',
                borderColor: '#FFC208',
                borderWidth: 3,
                borderColor: '#FFC208',
                hoverBorderWidth: 3,
                hoverBorderColor: '#00',
                fill : false,
                showLine: true

            },
            { //input data
                label: 'Tutorial Sheet 16',
                data: [newData16[0], newData16[1], newData16[2], newData16[3], newData16[4],newData16[5],newData16[6], newData16[67], newData16[8], newData16[9], newData16[10], newData16[11], newData16[12] ,newData16[13],newData16[14], newData16[15], newData16[16],newData16[16],newData16[18], newData16[19], newData16[20], newData16[21], newData16[22], newData16[23], newData16[24],newData16[25],newData16[26], newData16[26], newData16[28], newData16[29], newData16[30]], //plots week accessed
                backgroundColor: '#E62D07',
                borderColor: '#E62D07',
                borderWidth: 3,
                borderColor: '#E62D07',
                hoverBorderWidth: 3,
                hoverBorderColor: '#00',
                fill : false,
                showLine: true
            },
            { //input data
                label: 'Tutorial Sheet 15',
                data: [newData15[0], newData15[1], newData15[2], newData15[3], newData15[4],newData15[5],newData15[6], newData15[7], newData15[8], newData15[9], newData15[10], newData15[11], newData15[12] ,newData15[13],newData15[14], newData15[15], newData15[16],newData15[15],newData15[18], newData15[19], newData15[20], newData15[21], newData15[22], newData15[23], newData15[24],newData15[25],newData15[26], newData15[27], newData15[28], newData15[29]], //plots week accessed
                backgroundColor: '#AB14FC',
                borderColor: '#AB14FC',
                borderWidth: 3,
                borderColor: '#AB14FC',
                hoverBorderWidth: 3,
                hoverBorderColor: '#00',
                fill : false,
                showLine: true
            },
            // { //input data
            //     label: 'Tutorial Sheet 14',
            //     data: [newData14[0], newData14[1], newData14[2], newData14[3], newData14[4],newData14[5],newData14[6], newData14[7], newData14[8], newData14[9], newData14[10], newData14[11], newData14[12] ,newData14[13],newData14[14], newData14[15], newData14[16],newData14[14],newData14[18], newData14[19], newData14[20], newData14[21], newData14[22], newData14[23], newData14[24],newData14[25],newData14[26], newData14[27], newData14[28]], //plots week accessed
            //     backgroundColor: '#0781E6',
            //     borderColor: '#0781E6',
            //     borderWidth: 3,
            //     borderColor: '#0781E6',
            //     hoverBorderWidth: 3,
            //     hoverBorderColor: '#00',
            //     fill : false,
            //     showLine: true
            // },
            // { //input data
            //     label: 'Tutorial Sheet 13',
            //     data: [newData13[0], newData13[1], newData13[2], newData13[3], newData13[4],newData13[5],newData13[6], newData13[7], newData13[8], newData13[9], newData13[10], newData13[11], newData13[12] ,newData13[13],newData13[14], newData13[15], newData13[16],newData13[13],newData13[18], newData13[19], newData13[20], newData13[21], newData13[22], newData13[23], newData13[24],newData13[25],newData13[26], newData13[27], newData13[28], newData13[29], newData13[30], newData13[31]], //plots week accessed
            //     backgroundColor: '#08FE3E',
            //     borderColor: '#08FE3E',
            //     borderWidth: 3,
            //     borderColor: '#08FE3E',
            //     hoverBorderWidth: 3,
            //     hoverBorderColor: '#00',
            //     fill : false,
            //     showLine: true
            // },
            // { //input data
            //     label: 'Tutorial Sheet 12',
            //     data: [newData12[0], newData12[1], newData12[2], newData12[3], newData12[4],newData12[5],newData12[6], newData12[7], newData12[8], newData12[9], newData12[10], newData12[11], newData12[12] ,newData12[13],newData12[14], newData12[15], newData12[16],newData12[12],newData12[18], newData12[19], newData12[20], newData12[21], newData12[22], newData12[23], newData12[24],newData12[25],newData12[26], newData12[27], newData12[28], newData12[29], newData12[30]], //plots week accessed
            //     backgroundColor: '#FFDAA6',
            //     borderColor: '#FFDAA6',
            //     borderWidth: 3,
            //     borderColor: '#FFDAA6',
            //     hoverBorderWidth: 3,
            //     hoverBorderColor: '#00',
            //     fill : false,
            //     showLine: true
            // },
            // { //input data
            //     label: 'Tutorial Sheet 11',
            //     data: [newData11[0], newData11[1], newData11[2], newData11[3], newData11[4],newData11[5],newData11[6], newData11[7], newData11[8], newData11[9], newData11[10], newData11[11], newData11[12] ,newData11[13],newData11[14], newData11[15], newData11[16],newData11[11],newData11[18], newData11[19], newData11[20], newData11[21], newData11[22], newData11[23], newData11[24],newData11[25],newData11[26], newData11[27], newData11[28]], //plots week accessed
            //     backgroundColor: '#E897A7',
            //     borderColor: '#E897A7',
            //     borderWidth: 3,
            //     borderColor: '#E897A7',
            //     hoverBorderWidth: 3,
            //     hoverBorderColor: '#00',
            //     fill : false,
            //     showLine: true
            // },
        //     { //input data
        //         label: 'Tutorial Sheet 10',
        //         data: [newData10[0], newData10[1], newData10[2], newData10[3], newData10[4],newData10[5],newData10[6], newData10[7], newData10[8], newData10[9], newData10[10], newData10[11], newData10[12] ,newData10[13],newData10[14], newData10[15], newData10[16],newData10[10],newData10[18], newData10[19], newData10[20], newData10[21], newData10[22], newData10[23], newData10[24],newData10[25],newData10[26], newData10[27], newData10[28], newData10[29], newData10[30]], //plots week accessed
        //         backgroundColor: '#C4B3FF',
        //         borderColor: '#C4B3FF',
        //         borderWidth: 3,
        //         borderColor: '#C4B3FF',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 9',
        //         data: [newData9[0], newData9[1], newData9[2], newData9[3], newData9[4],newData9[5],newData9[6], newData9[7], newData9[8], newData9[9], newData9[10], newData9[11], newData9[12] ,newData9[13],newData9[14], newData9[15], newData9[16],newData9[9],newData9[18], newData9[19], newData9[20], newData9[21], newData9[22], newData9[23], newData9[24],newData9[25],newData9[26]], //plots week accessed
        //         backgroundColor: '#97E5E8',
        //         borderColor: '#97E5E8',
        //         borderWidth: 3,
        //         borderColor: '#97E5E8',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 8',
        //         data: [newData8[0], newData8[1], newData8[2], newData8[3], newData8[4],newData8[5],newData8[6], newData8[7], newData8[8], newData8[9], newData8[10], newData8[11], newData8[12] ,newData8[13],newData8[14], newData8[15], newData8[16],newData8[8],newData8[18], newData8[19], newData8[20], newData8[21], newData8[22], newData8[23], newData8[24],newData8[25],newData8[26], newData8[27], newData8[28], newData8[29], newData8[30]], //plots week accessed
        //         backgroundColor: '#BFFFA6',
        //         borderColor: '#BFFFA6',
        //         borderWidth: 3,
        //         borderColor: '#BFFFA6',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 7',
        //         data: [newData7[0], newData7[1], newData7[2], newData7[3], newData7[4],newData7[5],newData7[6], newData7[7], newData7[8], newData7[9], newData7[10], newData7[11], newData7[12] ,newData7[13],newData7[14], newData7[15], newData7[16],newData7[7],newData7[18], newData7[19], newData7[20], newData7[21], newData7[22], newData7[23], newData7[24],newData7[25],newData7[26], newData7[27], newData7[28], newData7[29], newData7[30], newData7[31]], //plots week accessed
        //         backgroundColor: '#FFF775',
        //         borderColor: '#FFF775',
        //         borderWidth: 3,
        //         borderColor: '#FFF775',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 6',
        //         data: [newData6[0], newData6[1], newData6[2], newData6[3], newData6[4],newData6[5],newData6[6], newData6[7], newData6[8], newData6[9], newData6[10], newData6[11], newData6[12] ,newData6[13],newData6[14], newData6[15], newData6[16],newData6[6],newData6[18], newData6[19], newData6[20], newData6[21], newData6[22], newData6[23]], //plots week accessed
        //         backgroundColor: '#E8A36B',
        //         borderColor: '#E8A36B',
        //         borderWidth: 3,
        //         borderColor: '#E8A36B',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 5',
        //         data: [newData5[0], newData5[1], newData5[2], newData5[3], newData5[4],newData5[5],newData5[6], newData5[7], newData5[8], newData5[9], newData5[10], newData5[11], newData5[12] ,newData5[13],newData5[14], newData5[15], newData5[16],newData5[5],newData5[18], newData5[19], newData5[20], newData5[21], newData5[22], newData5[23], newData5[24],newData5[25],newData5[26], newData5[27], newData5[28], newData5[29]], //plots week accessed
        //         backgroundColor: '#FF83D9',
        //         borderColor: '#FF83D9',
        //         borderWidth: 3,
        //         borderColor: '#FF83D9',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 4',
        //         data: [newData4[0], newData4[1], newData4[2], newData4[3], newData4[4],newData4[5],newData4[6], newData4[7], newData4[8], newData4[9], newData4[10], newData4[11], newData4[12] ,newData4[13],newData4[14], newData4[15], newData4[16],newData4[4],newData4[18], newData4[19], newData4[20], newData4[21], newData4[22]], //plots week accessed
        //         backgroundColor: '#6B71E8',
        //         borderColor: '#6B71E8',
        //         borderWidth: 3,
        //         borderColor: '#6B71E8',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 3',
        //         data: [newData3[0], newData3[1], newData3[2], newData3[3], newData3[4],newData3[5],newData3[6], newData3[7], newData3[8], newData3[9], newData3[10], newData3[11], newData3[12] ,newData3[13],newData3[14], newData3[15], newData3[16],newData3[3],newData3[18], newData3[19], newData3[20], newData3[21], newData3[22], newData3[23], newData3[23]], //plots week accessed
        //         backgroundColor: '#75FFDD',
        //         borderColor: '#75FFDD',
        //         borderWidth: 3,
        //         borderColor: '#75FFDD',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
        //     { //input data
        //         label: 'Tutorial Sheet 2',
        //         data: [newData2[0], newData2[1], newData2[2], newData2[3], newData2[4],newData2[5],newData2[6], newData2[7], newData2[8], newData2[9], newData2[10], newData2[11], newData2[12] ,newData2[13],newData2[14], newData2[15], newData2[16],newData2[2],newData2[18], newData2[19], newData2[20], newData2[21], newData2[22], newData2[23], newData2[24],newData2[25]], //plots week accessed
        //         backgroundColor: '#802D56',
        //         borderColor: '#802D56',
        //         borderWidth: 3,
        //         borderColor: '#802D56',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#00',
        //         fill : false,
        //         showLine: true
        //     },
            // { //input data
            //     label: 'Tutorial Sheet 1',
            //     data: [newData1[0], newData1[1], newData1[2], newData1[3], newData1[4],newData1[5],newData1[6], newData1[7], newData1[8], newData1[9], newData1[10], newData1[11], newData1[12] ,newData1[13],newData1[14], newData1[15], newData1[16],newData1[17],newData1[18]], //plots week accessed
            //     backgroundColor: '#CC478A',
            //     borderColor: '#CC478A',
            //     borderWidth: 3,
            //     borderColor: '#CC478A',
            //     hoverBorderWidth: 3,
            //     hoverBorderColor: '#00',
            //     fill : false,
            //     showLine: true
            // }, 
        ]
        },
        options: {
            title: {
                display: true,
                text: 'Number of students who accessed tutorial sheet and when',
                fontSize: 25
            },

                tooltips: {
                mode: 'index',
                intersect: false,
                },
            legend: {
                //display: flase, doesn't display legend
                position: 'right',
                display: true,
                labels: {
                    fontColor: '#000'
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    bottom: 0,
                    top:0
                }
            },
        },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                    beginAtZero:true,
                    suggestedMin: 0,
                    suggestedMax: 50

                    }
                }]
            },
        
    });

}
  
    render() {
      return <canvas ref={this.canvasRef} />;
    }
  }



export default Time;
