import React, { useState } from 'react';


function InputScore() {
  const [text, setField] = useState('');

  return (
    <input
      className="score"
      type="tel"  // To use the numpad onscreen keyboard
      value={text}
      onChange={(e) => setField(e.target.value)}
    />
  );
}

export default InputScore;
