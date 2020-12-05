import React from 'react';

import logo from '../../assets/images/logo.svg';
import './ShoppingBasket.css';

import {useStore} from '../../components/StoreProvider/StoreProvider.jsx';

function ShoppingBasket() {
  const [state, dispatch] = useStore();

  console.log(state);
  return (
    <div className="ShoppingBasket">
      <header className="ShoppingBasket-header">
        <img src={logo} className="ShoppingBasket-logo" alt="logo" />
        <p>
          Shopping basket and calculations
        </p>
      </header>
    </div>
  );
}

export default ShoppingBasket;
