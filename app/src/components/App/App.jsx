/**
 * @ Author: Alpaga
 * @ Create Time: 2020-05-24 17:53:47
 * @ Modified by: Alpaga
 * @ Modified time: 2020-12-09 15:29:14
 */

import React from 'react';

import Navigation from '../Navigation/Navigation';
import StoreProvider from '../StoreProvider/StoreProvider';

import { basketInitialState, basketReducer } from '../../reducers/basketReducer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StoreProvider reducer={basketReducer} initialState={basketInitialState}>
      <Navigation />
    </StoreProvider>
  );
}

export default App;
