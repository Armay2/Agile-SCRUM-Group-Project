/**
 * @ Author: Alpaga
 * @ Create Time: 2020-05-24 17:53:33
 * @ Modified by: Alpaga
 * @ Modified time: 2020-12-02 11:25:03
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import StockControl from '../../scenes/StockControle/StockControl.jsx';
import CorrectChange from '../../scenes/CorrectChange/CorrectChange.jsx';
import ItemPacking from '../../scenes/ItemPacking/ItemPacking.jsx';
import ShoppingBasket from '../../scenes/ShoppingBasket/ShoppingBasket.jsx';

function Navigation() {
  return (
    <Router>
      <Switch>
        {/* Auto redirect to page home */}
        <Route path={`/`} exact component={() => <Redirect to={`/StockControl`} />} />
        <Route path={`/StockControl`} component={StockControl} />
        <Route path={`/CorrectChange`} component={CorrectChange} />
        <Route path={`/ItemPacking`} component={ItemPacking} />
        <Route path={`/ShoppingBasket`} component={ShoppingBasket} />
      </Switch>
    </Router>
  );
}

export default Navigation;
