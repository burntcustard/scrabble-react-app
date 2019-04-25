import React from 'react';


function InputScore({ player, value, index, onChange }) {

  return (
    <input
      className="score"
      aria-label={player + ", running total " + (index + 1)}
      tabIndex={index + 2}
      type="tel"  // To use the numpad onscreen keyboard
      value={value}
      onChange={(e) => onChange(e.target.value)}
      //onBlur={(e) => onBlur(e.target.value)}
    />
  );
}

export default InputScore;
