/**
 * @ Author: Alpaga
 * @ Create Time: 2020-06-11 19:45:04
 * @ Modified by: Alpaga
 * @ Modified time: 2020-12-02 12:12:43
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
  initialState: PropTypes.objectOf(PropTypes.array).isRequired,
  children: PropTypes.node.isRequired,
};

export const useStore = () => useContext(StateContext);

export default StoreProvider;
