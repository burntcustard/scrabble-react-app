import React, { useState } from 'react';


function InputScore({ player, index, onChange }) {
  const [text, setField] = useState('');

  function update(event) {
    setField(event.target.value);
    onChange(event.target.value);
  }

  return (
    <input
      className="score"
      aria-label={player + ", running total " + (index + 1)}
      type="tel"  // To use the numpad onscreen keyboard
      value={text}
      onChange={update}
    />
  );
}

export default InputScore;
