import React from 'react';
import './AwardsAndRecognitions.css'; 

const AwardsAndRecognitions = ({ awards }) => {
  console.log(awards);
  return (
    <div className = "awards-container">
      <div className= "awards-board">
      <h2 className="awards-title">Awards and Recognitions</h2>
      <div className="awards-list">
      {awards?.map((award, index)=>(
        <div key={index} className="award-item">
       <div className="award-year"> {award.year} </div>
        <div className="award-title">{award.title}</div>
        </div>
      ))}
      </div>
      </div>
    </div>
  )

}
export default AwardsAndRecognitions;
