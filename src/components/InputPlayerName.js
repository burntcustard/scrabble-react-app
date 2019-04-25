import React, { useState } from 'react';


function InputPlayerName({ player, index }) {
  const [text, setField] = useState(player);

  return (
    <input
      className="player-name"
      type="text"
      value={text}
      onChange={(e) => setField(e.target.value)}
    />
  );
}

export default InputPlayerName;
