import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <h2>Question</h2>
          <p>What is React?</p>
        </div>
        <div className="back">
          <h2>Answer</h2>
          <p>React is a JavaScript library for building user interfaces.</p>
        </div>
      </div>
      <button className="flip-button" onClick={handleFlip}>Flip</button>
      <div className="button-group">
        <button className="prev-button">Previous</button>
        <button className="next-button">Next</button>
        <button className="delete-button">Delete</button>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default App;
