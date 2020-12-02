import React, { useEffect } from 'react';

import logo from '../../assets/images/logo.svg';
import './StockControl.css';

import {useStore} from '../../components/StoreProvider/StoreProvider.jsx';

const defaultItem = [
  {
    name: 'Watch',
    price: '500',
    label: 'Luxury',
    dimensions: {
      height: 5,
      width: 5,
      depth: 1,
    }
  }
];

function StockControl() {
  const [state, dispatch] = useStore();

  console.log(state);
  return (
    <div className="StockControl">
      <header className="StockControl-header">
        <img src={logo} className="StockControl-logo" alt="logo" />
        <p>
          Stock Control
          <button onClick={() => dispatch({type: 'NEW_ITEM', newItem: defaultItem[0]})}></button>
        </p>
      </header>
    </div>
  );
}

export default StockControl;
