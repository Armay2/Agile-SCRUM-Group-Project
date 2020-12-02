/**
 * @ Author: Alpaga
 * @ Create Time: 2020-05-24 17:53:47
 * @ Modified by: Alpaga
 * @ Modified time: 2020-07-01 00:34:19
 */

import React from 'react';

import Navigation from '../Navigation/Navigation';
import StoreProvider from '../StoreProvider/StoreProvider';

import { userInitialState, userReducer } from '../../reducers/userReducer';

function App() {
  return (
    <StoreProvider reducer={userReducer} initialState={userInitialState}>
      <Navigation />
    </StoreProvider>
  );
}

export default App;
