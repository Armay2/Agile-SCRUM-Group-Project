import React from 'react';

import logo from '../../assets/images/logo.svg';
import './CorrectChange.css';

import {useStore} from '../../components/StoreProvider/StoreProvider.jsx';

function CorrectChange() {
  const [state, dispatch] = useStore();

  console.log(state);
  return (
    <div className="CorrectChange">
      <header className="CorrectChange-header">
        <img src={logo} className="CorrectChange-logo" alt="logo" />
        <p>
          Correct Change Calculator
        </p>
      </header>
    </div>
  );
}

export default CorrectChange;
