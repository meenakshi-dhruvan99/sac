import React from 'react';
import './MilestonesAndRecords.css'; // Import your custom CSS for styling

const MilestonesAndRecords = () => {
  const milestones = [
    { year: 1989, milestone: 'Debut for India at the age of 16' },
    { year: 1998, milestone: 'ICC Player of the Year' },
    { year: 2003, milestone: 'First double century in ODIs' },
    { year: 2010, milestone: 'Padma Shri Award' },
    { year: 2012, milestone: 'Hundredth international century' },
    { year: 2013, milestone: 'Became the first player to score 100 international centuries' },
    { year: 2014, milestone: 'Bharat Ratna, India\'s highest civilian award' },
  ];

  return (
    <div className="milestones-and-records-container">
      <h2 className="section-title">Milestones and Records</h2>
      <div className="milestones-board">
        {milestones.map((item, index) => (
          <div key={index} className="milestone-card">
            <div className="milestone-year">{item.year}</div>
            <div className="milestone-description">{item.milestone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesAndRecords;

