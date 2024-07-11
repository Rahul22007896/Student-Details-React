import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="Student-Details-React/212221043006-RAHUL K-CSE.jpg" alt="eye" />
        </div>
        <h2 className="name">Name: Rahul K</h2>
        <p className="registration">Registration No: 212221043006</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Status:Student 
            Place:Chennai
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
