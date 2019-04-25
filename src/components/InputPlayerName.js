import React, { useState } from 'react';


function InputPlayerName({ player, index, onChange }) {
  const [text, setField] = useState(player);

  function update(event) {
    setField(event.target.value);
    onChange(event.target.value);
  }

  return (
    <input
      className="player-name"
      aria-label={`Player ${index + 1} name`}
      type="text"
      value={text}
      onChange={update}
    />
  );
}

export default InputPlayerName;
