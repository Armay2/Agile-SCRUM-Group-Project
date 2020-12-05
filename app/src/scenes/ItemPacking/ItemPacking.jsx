import React from 'react';

import logo from '../../assets/images/logo.svg';
import './ItemPacking.css';

import {useStore} from '../../components/StoreProvider/StoreProvider.jsx';

function ItemPacking() {
  const [state, dispatch] = useStore();

  console.log(state);
  return (
    <div className="ItemPacking">
      <header className="ItemPacking-header">
        <img src={logo} className="ItemPacking-logo" alt="logo" />
        <p>
          Item Packing
        </p>
      </header>
    </div>
  );
}

export default ItemPacking;
