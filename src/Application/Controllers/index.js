import React from 'react';

import './styles.css';

function Controllers({generateArray, orderArray}) {
  return (
    <div className="buttons">
      <button className="button" onClick={generateArray}>
        Regenerate
      </button>
      <button className="button" onClick={orderArray}>
        Order
      </button>
    </div>
  );
}

export default Controllers;