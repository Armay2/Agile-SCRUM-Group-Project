import React from 'react';

import logo from '../../assets/images/logo.svg';
import './StockControl.css';

function StockControl() {
  return (
    <div className="StockControl">
      <header className="StockControl-header">
        <img src={logo} className="StockControl-logo" alt="logo" />
        <p>
          Stock Control
        </p>
      </header>
    </div>
  );
}

export default StockControl;
