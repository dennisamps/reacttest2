import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import * as d3 from "d3";
import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";
import NavbarSearch from '../layout/MainNavbar/NavbarSearch';

// function getUserName() {
//   var nameField = document.getElementById('nameField').value;
//   var result = document.getElementById('result');

//   let myChart = document.getElementById('myChart').getContext('2d');
var Scores = [];
var ColumnTitle = [];
console.log(window.location.hash && window.location.hash.length > 5 ? window.location.hash.replace('#','') : '59194883')
  d3.csv("https://graphtest123.s3.eu-west-2.amazonaws.com/Y1_all_20210409_anonymous.csv") // request csv file
  .then(makeChart); // converts into an array then call makeChart() function

  // calls function to make a chart after it has been converted into an array
  function makeChart(students) { 
          for (var i=14; i<Object.keys(students[0]).length - 11; i++){
              ColumnTitle.push(Object.keys(students[0])[i])
          }
          
          // for loop to check and calculate the days after lecture when students started tutorial sheet
          for (var i =0; i < students.length; i++){
              if (students[i]["Student ID"] === (window.location.hash && window.location.hash.length > 5 ? window.location.hash.replace('#','') : '59194883')){
                  for (var j=14; j<Object.values(students[i]).length - 11; j++){
                      Scores.push(Object.values(students[i])[j])
                  }
              } 
          };
      }

class UsersOverview extends React.Component {
  //static contextType = StudentIdContext;
constructor(props) {
super(props);
this.canvasRef = React.createRef();
}

componentDidMount() {
this.myChart = new Chart(this.canvasRef.current, {
type: 'bar',
data: {
  labels: ColumnTitle,
  datasets: [{
  label: 'Average Progress Mark',
  data: Scores,
  backgroundColor: [
      '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc', '#0000cc'

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
      text: 'Search Student ID to get overall data',
      fontSize: 25
  },
  scales: {
      xAxes: [{
          display: true,
          scaleLabel: {
              display: true,
              labelString: 'Mech Eng Exams'
          }
      }],
      yAxes: [{
          display: true,
          scaleLabel: {
              display: true,
              labelString: 'Marks(%)'
          }
      }]
  },
  maintainAspectRatio: false,
  legend: {
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
}

});
}

render() {
return <canvas ref={this.canvasRef} />;
}
}


export default UsersOverview;