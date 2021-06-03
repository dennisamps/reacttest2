import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
// import AvgTimeToComplete2020 from '../components/2020Graphs/AvgTimeToCompleteSheet';
import MinSheetAccessed from '../components/2020Graphs/MinSheetAccessed';
import MinSheetAccessed2k19 from '../components/2019Graphs/MinSheetAccessed';
import Bottom from '../components/2020Graphs/BottomHalfPercent';
// import MeanStart from '../components/2020Graphs/MeanStartVSProgressGrade';
import MoreThan from '../components/2020Graphs/MoreThan60';
// import PercentHis from '../components/2020Graphs/percentileHistogram';
// import PercenS1to8 from '../components/2020Graphs/PercentS1toS8vsProgress';
// import ProgressVSStud from '../components/2020Graphs/ProgressVSStudentPercen';
// import SDHist from '../components/2020Graphs/SDHistogram';
// import Sheet4 from '../components/2020Graphs/Sheet4Q2';
// import Sheet5 from '../components/2020Graphs/Sheet5Q1';
// import Sheet6to8 from '../components/2020Graphs/Sheet6to8Q3';
// import StartTime from '../components/2020Graphs/StartTimeCorrelation';
// import Time from '../components/2020Graphs/TimeAnyalsis';
import '../App.css';
import Top2k19 from '../components/2019Graphs/TopHalfPercent';
import Top from '../components/2020Graphs/TopHalfPercent';
import SDHist2k19 from '../components/2019Graphs/SDHistogram';
import ProgressVSStud2k19 from '../components/2019Graphs/ProgressVSStudentPercen';
import PercenS1to82k19 from '../components/2019Graphs/PercentS1toS8vsProgress';
import PercentHis2k19 from '../components/2019Graphs/percentileHistogram';

import { BrowserRouter } from 'react-router-dom';
import AvgTimeToComplete2019 from '../components/2019Graphs/AvgTimeToCompleteSheet'
import AvgTimeToComplete2020 from '../components/2020Graphs/AvgTimeToCompleteSheet';
import MeanStart2k19 from '../components/2019Graphs/MeanStartVSProgressGrade';
import MeanStart from '../components/2020Graphs/MeanStartVSProgressGrade';
import MoreThan2k19 from '../components/2019Graphs/MoreThan60';
import Bottom2k19 from '../components/2019Graphs/BottomHalfPercent';
import Sheet6to82k19 from '../components/2019Graphs/Sheet6to8Q3';
import Sheet2k19 from '../components/2019Graphs/Sheet2Q1';
import Sheet52k19 from '../components/2019Graphs/Sheet5Q2';



Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

// App
class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <div className="main chart-wrapper">
              <Bottom
              />
            </div>
            <div className="main chart-wrapper">
              <Bottom2k19
              />
            </div>
            <div className="main chart-wrapper">
              <MoreThan
              />
            </div>
            <div className="main chart-wrapper">
              <MoreThan2k19
              />
            </div>
            <div className="main chart-wrapper">
              <Top
              />
            </div>
            <div className="main chart-wrapper">
              <Top2k19
              />
            </div>
            <div className="sub chart-wrapper">
              <AvgTimeToComplete2020
              />
            </div>
            <div className="sub chart-wrapper">
              <AvgTimeToComplete2019
              />
            </div>
            <div className="sub chart-wrapper">
              <MeanStart
              />
            </div>
            <div className="sub chart-wrapper">
              <MeanStart2k19
              />
            </div>
        </div>
      
      </BrowserRouter>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));

export default BlogPosts;


