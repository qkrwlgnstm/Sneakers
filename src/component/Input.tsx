import React from 'react';

import './Input.scss';

function Input() {
  return (
    <div className="input-box">
      <input type="text" placeholder="Search for brand, color, etc." className="input-text " />
    </div>
  );
}

export default Input;
