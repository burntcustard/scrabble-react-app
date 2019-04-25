import React, { useState } from 'react';


function InputScore({ player, index }) {
  const [text, setField] = useState('');

  return (
    <input
      className="score"
      aria-label={player + " - running total " + (index + 1)}
      type="tel"  // To use the numpad onscreen keyboard
      value={text}
      onChange={(e) => setField(e.target.value)}
    />
  );
}

export default InputScore;
