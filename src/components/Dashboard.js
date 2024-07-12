import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'; // Import your custom CSS for styling
import sachinBackground from '../Assets/pitch.jpg'; // Import Sachin's background image
import AwardsAndRecognitions from './AwardsAndRecognitions'; // Import AwardsAndRecognitions component
import MilestonesAndRecords from './MilestonesAndRecords'; // Import MilestonesAndRecords component
import QuotesAndTributes from './QuotesAndTributes'; // Import QuotesAndTributes component
import { PolarArea } from 'react-chartjs-2';

const Dashboard = () => {
  // Mocked career statistics data
  const careerStats = {
    runsScored: 18426,
    centuries: 51,
    halfCenturies: 96,
    highestScore: 200,
    battingAverage: 44.83,
    strikeRate: 86.23,
    hundredsInWins: 20,
    matchesPlayed: 463,
    notOuts: 41,
    ducks: 20,
    awards: [
      { year: 1998, title: 'ICC Player of the Year' },
      { year: 2003, title: 'Wisden Leading Cricketer in the World' },
      { year: 2010, title: 'Padma Shri Award' },
      { year: 1994, title: 'Arjuna Award' },
      { year: 1997, title: 'Rajiv Gandhi Khel Ratna' },
      { year: 2008, title: 'Padma Vibhushan' },
      { year: 2014, title: 'Bharat Ratna' },
      { year: 2020, title: 'Laureus World Sports Awards' },
    ],
  };


  // Polar area chart data
  const polarData = {
    labels: ['Centuries', 'Half Centuries', 'Highest Score', 'Hundreds in Wins', 'Ducks', 'Not Outs'],
    datasets: [
      {
        label: 'Batting Performance',
        data: [
          careerStats.centuries,
          careerStats.halfCenturies,
          careerStats.highestScore,
          careerStats.hundredsInWins,
          careerStats.ducks,
          careerStats.notOuts,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const polarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
  };

  // Line chart data for Runs Scored
  const runsScoredData = {
    labels: ['1990', '1995', '2000', '2005', '2010', '2015'],
    datasets: [
      {
        label: 'Runs Scored Over Years',
        data: [4000, 8000, 12000, 16000, 18000, careerStats.runsScored],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const runsScoredOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return 'Runs Scored: ' + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Runs',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${sachinBackground})` }}>
        <div className="header">
          <h1 className="dashboard-title">Straight Drive to Glory: Cricketing Odyssey of a Legend</h1>
        </div>

      <Tabs>
        <TabList className="tab-list">
          <Tab className="tab">Batting Performance</Tab>
          <Tab className="tab">Runs Scored</Tab>
          <Tab className="tab">Awards and Recognitions</Tab>
          <Tab className="tab">Milestones and Records</Tab>
          <Tab className="tab">Quotes and Tributes</Tab>
        </TabList>

        <TabPanel className="tab-panel batting-performance-panel">
          <h2 className="tab-panel-title">Batting Performance</h2>
          <div className="chart-container">
            <PolarArea data={polarData} options={polarOptions} />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="tab-panel">
            <h2 className="tab-panel-title">Runs Scored Over Years</h2>
            <div className="chart-container">
              <Line data={runsScoredData} options={runsScoredOptions} />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="tab-panel">
            <AwardsAndRecognitions awards={careerStats.awards} />
          </div>
        </TabPanel>

        <TabPanel>
        <div className="tab-panel">
          <MilestonesAndRecords />
          </div>
        </TabPanel>

        <TabPanel>

        <div className="tab-panel">
          <QuotesAndTributes />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;
