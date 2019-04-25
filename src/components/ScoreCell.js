import React, { useState } from 'react';
import './ScoreCell.css';


function ScoreCell() {
  const [text, setField] = useState('');

  return (
    <input
      className="score-cell"
      type="tel"
      value={text}
      onChange={(e) => setField(e.target.value)}
    />
  );
}

export default ScoreCell;
