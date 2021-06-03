import React from 'react';
import Chart from "../../utils/chart";
import * as d3 from "d3";
import chartTrendline from "chartjs-plugin-trendline";
import NavbarSearch from '../../components/layout/MainNavbar/NavbarSearch';
Chart.plugins.register(chartTrendline);

var subButton = document.getElementById('subButton');
        subButton.addEventListener('click', getUserName, false); 

        function getUserName() {
            var nameField = document.getElementById('nameField').value;
            var result = document.getElementById('result');

            let myChart = document.getElementById('myChart').getContext('2d');

            d3.csv("https://graphtest123.s3.eu-west-2.amazonaws.com/Y1_all_20210409_anonymous.csv") // request csv file
            .then(makeChart); // converts into an array then call makeChart() function

            // calls function to make a chart after it has been converted into an array
            function makeChart(students) { 
                    // }
                    //make dictionary for tutorial sheets - put in same order as csv
                    var ColumnTitle = [];
                    for (var i=14; i<Object.keys(students[0]).length - 11; i++){
                        ColumnTitle.push(Object.keys(students[0])[i])
                    }
                    var Scores = [];
                    // for loop to check and calculate the days after lecture when students started tutorial sheet
                    for (var i =0; i < students.length; i++){
                        if (students[i]["Student ID"] === nameField){
                            for (var j=14; j<Object.values(students[i]).length - 11; j++){
                                Scores.push(Object.values(students[i])[j])
                            }
                                //need to store all column title: value
                                //then need column title in a single array and values in another array
                        } 
                    };
                }}

class UsersOverview extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: 'scatter',
        data: {
            datasets: [{ //input data
                label: 'Mean Start time of sheets vs Progress Grade',
                data: dataNeed, 
                trendlineLinear: {
                    style: "rgb(0 ,0 ,0)",
                    lineStyle: "solid",
                    width: 3
                },
                backgroundColor: '#0000cc',
                borderColor: '#0000cc',
                borderWidth: 1,
                borderColor: '#0000cc',
                hoverBorderWidth: 3,
                hoverBorderColor: '#00',
                fill : false,
                showLine: false
            },
        ]
        },
        options: {
            title: {
                display: true,
                text: 'Mean Start time of sheets 1-8 vs Progress Grade',
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
                        labelString: 'Mean Start Time of Sheets after Lecture'
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
        }
        
    });
    }
  
    render() {
      return <canvas ref={this.canvasRef} />;
    }
  }


export default UsersOverview;
