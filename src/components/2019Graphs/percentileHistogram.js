import React from 'react';
import Chart from "../../utils/chart";
import * as d3 from "d3";
import chartTrendline from "chartjs-plugin-trendline";
Chart.plugins.register(chartTrendline);

var binCount = [];
var binCount2 = [];
d3.csv("https://graphtest123.s3.eu-west-2.amazonaws.com/FMX2_Gradebook_2019_20_Mobius_Plus_Exam_and_PT_anonymousedAWS.csv") // request csv file
            .then(makeChart); // converts into an array then call makeChart() function

        // calls function to make a chart after it has been converted into an array
        function makeChart(students) { // takes in an array of students

                //make dictionary for tutorial sheets - put in same order as csv
                var progressScores = [];
                var ExamResults = [];
                var dictSheet = {Sheet18:[] , Sheet17:[] , Sheet16:[] ,Sheet15:[], Sheet14:[], Sheet13:[], Sheet12:[], Sheet11:[], Sheet10:[], Sheet9:[], Sheet8:[], Sheet7:[], Sheet6:[], Sheet5:[], Sheet4:[], Sheet3:[], Sheet2:[], Sheet1:[]};
                var LectureDate = [140, 133, 126, 112, 105, 98, 91, 84, 77, 56, 49, 42, 35, 28, 21, 14, 7, 0]; //make an array of lecture start dates
                var dictPercentile = {P18:[] , P17:[] , P16:[] ,P15:[], P14:[], P13:[], P12:[], P11:[], P10:[], P9:[], P8:[], P7:[], P6:[], P5:[], P4:[], P3:[], P2:[], P1:[]};
                var PercentAvgSheet1to9 = [];
                var DaysAfterLectMeanSheet1to9 = [];
                var Sheet1to9SD = [];
                var Percentile1to9SD = [];
                //All year
                var PercentAvgAll = [];
                var DaysAfterLectMeanAll = [];
                var AllSD = [];
                var PercentileAllSD = [];
                // for loop to check and calculate the days after lecture when students started tutorial sheet
                for (var i =0; i < students.length; i++){
                    var count = -1;
                    var LectureCount = 0;
                    var progressKey = Object.keys(students[i])[104];
                    var progressScoremaybe = students[i][progressKey];
                    progressScores.push(parseFloat(progressScoremaybe));
                    var ExamKey = Object.keys(students[i])[105];
                    var ExamScoremaybe = students[i][ExamKey];
                    ExamResults.push(parseFloat(ExamScoremaybe));
                    for (var j =9; j <= 95; j += 5){
                        var key = Object.keys(students[i])[j]; // access title of start times
                        var value = students[i][key] // gives date in raw form
                                 // console.log("Raw form date" + " " + value)
                        //convert date string into a time object
                        var date = new Date(value);
                                // console.log("date" + " " + date)
                        var DayNumber = dayOfYear(date);
                                // console.log("day number is" + " " + DayNumber)
                        //need to account for imperial calendar with 3rd october as week 1
                        if (value !== 0){
                            count ++;
                        } else{
                            continue
                        }
                        if (value === ""){
                            DayNumber = 158
                        }
                        else if (dayOfYear(date) >= 280){
                            DayNumber -= 280;
                        } else if (dayOfYear(date) < 48 && dayOfYear(date) >= 1)  {
                            DayNumber += 71;
                        } else {
                            DayNumber += 78
                        }
                        key = Object.keys(dictSheet)[count]; //accesses tutorial sheet dictionary
                        dictSheet[key][i] = Math.abs(DayNumber - LectureDate[LectureCount]);
                        LectureCount ++
                    }
                };

                //create percentiles
                for (var i =0; i < Object.keys(dictPercentile).length; i++){
                    key = Object.keys(dictPercentile)[i]; //accesses tutorial sheet dictionary
                    var key2 = Object.keys(dictSheet)[i]; //accesses tutorial sheet dictionary
                    for (var j =0; j <= students.length; j ++){
                        count = 0;
                        for(var z=0; z <= students.length; z++){
                            if (dictSheet[key2][z] >= dictSheet[key2][j]){
                                count ++
                            } 
                        }
                        dictPercentile[key][j] = (count/students.length)*100;
                    }
                };

                // working out Mean of sheet time after exam, standard deviation of sheet time after exam, Mean of percentiles, 
                for (var i =0; i < Object.keys(dictPercentile).length; i++){
                    key = Object.keys(dictPercentile)[i]; //accesses tutorial sheet dictionary
                    key2 = Object.keys(dictSheet)[i]; //accesses tutorial sheet dictionary
                    for (var j =0; j <= students.length; j ++){
                        count = 0;
                        for(var z=0; z <= students.length; z++){
                            if (dictSheet[key2][z] >= dictSheet[key2][j]){
                                count ++
                            } 
                        }
                        dictPercentile[key][j] = (count/students.length)*100;
                    }
                };

                var dictSheetArray = [];
                var dictPercentileArray = [];
                // console.log(Object.values(dictPercentile.P1))

                // for all sheets use: Object.keys(dictSheet).length instead of 8
                for(var i=0; i < 9; i++){
                    dictSheetArray.push(dictSheet[Object.keys(dictSheet)[i]])
                    dictPercentileArray.push(dictPercentile[Object.keys(dictPercentile)[i]])
                }

                //Calculating mean of sheets, mean of percentiles, SD of sheets
                var dictSheetTranspose =  dictSheetArray[0].map((_, colIndex) => dictSheetArray.map(row => row[colIndex]));
                var dictPercentileTranspose = dictPercentileArray[0].map((_, colIndex) => dictPercentileArray.map(row => row[colIndex]));
                for(var i=0; i<dictSheetTranspose.length; i++){
                    DaysAfterLectMeanSheet1to9.push(calcAverage(dictSheetTranspose[i]))
                    PercentAvgSheet1to9.push(calcAverage(dictPercentileTranspose[i]))
                    Sheet1to9SD.push(getSD(dictSheetTranspose[i]))
                    Percentile1to9SD.push(getSD(dictPercentileTranspose[i]))
                }


                //creating histogram bins with frequency array
                var bins = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                var binCount = [];
                for (var i=1; i<bins.length; i++){
                    j=0;
                    var count = 0;
                    while(j < progressScores.length){
                        if(progressScores[j] < bins[i] && progressScores[j] >= bins[i-1]){
                            count ++
                        }
                        j++;
                    }
                    binCount.push(count)
                }    
                for (var i =0; i< binCount.length; i++){
                    binCount2.push(binCount[i])
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
                var result = array[i] + (array[i+1] - array[i]) * fraction;
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

class PercentHis2k19 extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: 'bar',
        data: {
            labels: ["[0,10]", "[10,20]", "[20,30]", "[30,40]", "[40,50]", "[50,60]", "[60,70]", "[70,80]", "[80,90]", "[90,100]"],
            datasets: [{
            label: 'Average Progress Mark',
            data: binCount2,
            backgroundColor: [
                '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc'

            ],
            borderColor: [
                '#0000cc',
            ],
            borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
            xAxes: [{
                ticks: {
                maxRotation: 90,
                minRotation: 80
                }
            }],
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
            }
        },
        options: {
            title: {
                display: true,
                text: 'Histogram of Average Percentile Of Students showing when Sheets were opened after Lecture - 2019',
                fontSize: 25
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Progress Test Score Marks(%)'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Frequency'
                    }
                }]
            },
            maintainAspectRatio: false,
            legend: {
                //display: flase, doesn't display legend
                position: 'right',
                display: false,
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
            // tooltips:{ to hide tooltips that show when hovering over graph
            //     enabled: false
            // },
        }
        
    });
    }
  
    render() {
      return <canvas ref={this.canvasRef} />;
    }
  }


export default PercentHis2k19;
