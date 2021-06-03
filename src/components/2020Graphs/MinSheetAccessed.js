import React from 'react';
import Chart from "../../utils/chart";
import * as d3 from "d3";

var Sheet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
var dictAvg = [100, 99, 98, 96, 94, 92, 90, 88, 86, 73, 67, 59, 50, 43, 28, 13, 0, 0, 0];
d3.csv("https://graphtest123.s3.eu-west-2.amazonaws.com/gb_FMX2_2020_Sets1_15_20210309_anon.csv") // request csv file
.then(makeChart); // converts into an array then call makeChart() function

// calls function to make a chart after it has been converted into an array
function makeChart(students) { // takes in an array of students

    //make dictionary
    var dict = {Min0:0 , Min1:0 , Min2:0 ,Min3:0, Min4:0, Min5:0, Min6:0, Min7:0, Min8:0, Min9:0, Min10:0, Min11:0, Min12:0, Min13:0, Min14:0, Min15:0, Min16:0, Min17:0, Min18:0 };

    for (var i =0; i < students.length; i++){
        var count = 0;
        for (var j =10; j <= 96; j += 5){
            var key = Object.keys(students[i])[j];
            var value = students[i][key]
            if (value > 0){
                count ++;
            }
        }
        key = Object.keys(dict)[count];
        dict[key]++
    };
    // works out the cumulative sum of students
    const cumulativeSum = (sum => value => sum += value)(0);
    var dict2 = Object.values(dict).reverse().map(cumulativeSum).reverse();

    var dictAvg = dict2.map(function(d) {
        return Math.round((d / students.length) * 100)
    })
    console.log(dictAvg)
    dictAvg.shift(); // removes the first index

}

class MinSheetAccessed extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: 'bar',
        options: {
            title: {
                display: true,
                text: 'ME2 Fluids 2020 Progress Test: Average % Score per Question',
                fontSize: 10,
                maintainAspectRatio: false
            },
            legend: {
                //display: flase, doesn't display legend
                position: 'right',
                labels: {
                    fontColor: '#000'
                }
            },
        },
        data: {
            labels: Sheet, //sets y axis to student names 
            datasets: [{ //input data
                label: 'Tutorial Sheet',
                data: dictAvg, //converts total score to a percentage
                backgroundColor: '#0000cc',
                borderColor: '#0000cc',
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#00'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Proportion of sheets accessed by Students 2020',
                fontSize: 25
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
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
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Proportion of students(%)',
                        fontSize: 20
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Minimum no. of sheets accessed',
                        fontSize: 20
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
            maintainAspectRatio: false
        }
    });
    }
  
    render() {
      return <canvas ref={this.canvasRef} />;
    }
  }


export default MinSheetAccessed;
