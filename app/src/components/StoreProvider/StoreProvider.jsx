/**
 * @ Author: Alpaga
 * @ Create Time: 2020-06-11 19:45:04
 * @ Modified by: Alpaga
 * @ Modified time: 2020-07-01 00:45:08
 */

import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

const StoreProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StoreProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.objectOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};

export const useStore = () => useContext(StateContext);

export default StoreProvider;
