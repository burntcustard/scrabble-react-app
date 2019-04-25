import React from 'react';


function InputPlayerName({ player, index, onChange }) {

  return (
    <input
      className="player-name"
      aria-label={`Player ${index + 1} name`}
      type="text"
      value={player}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default InputPlayerName;
