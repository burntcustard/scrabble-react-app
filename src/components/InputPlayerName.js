import React, { useState } from 'react';


function InputPlayerName() {
  const [text, setField] = useState('');

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
