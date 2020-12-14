import React, { Component } from 'react';

import Button from './components/button';
import Item from './components/item';
import inventory, { categories } from './inventory';

const inventory = [{
  id: 12,
  name: 'Y-Solowarm',
  description: 'Mandatory stable internet solution',
  price: '50',
  VAT: '20',
  category: 'Luxury',
  select: false,
},
{
  id: 27,
  name: 'Bitchip',
  description: 'Team-oriented optimal hub',
  price: '30',
  VAT: '10',
  category: 'Essential',
},
{
  id: 91,
  name: 'Flexidy',
  description: 'Profound uniform database',
  price: '20',
  VAT: '5',
  category: 'Gift',
},
{
  id: 54,
  name: 'Tres-Zap',
  description: 'Programmable eco-centric budgetary management',
  price: '50',
  VAT: '20',
  category: 'Luxury',
},
];

class ShoppingBasket extends Component {
  state = {
    currentCat: [],
    item: inventory,
  };

  getCategories() {
    return categories.map(cat => (
      <span key={cat}>
        <Button
          value={cat}
          classes={this.buttonClasses(cat)}
          onClick={c => this.changeCategory(c)}
        />
      </span>
    ));
  }

  getInventory() {
    const { currentCat } = this.state;

    return inventory
      .filter((item) => {
        let selected = false;
        if (currentCat.length === 0) {
          selected = true;
        } else {
          currentCat.forEach((cat) => {
            if (cat === item.category) {
              selected = true;
            }
          });
        }
        return selected;
      })
      .map(({
        id, name, price, description, VAT,
      }) => (
        <Item key={id} name={name} price={price} desc={description} VAT={VAT} />
      ));
  }

  buttonClasses(cat) {
    let active = false;
    const { currentCat } = this.state;

    currentCat.forEach((c) => {
      if (c === cat) {
        active = true;
      }
    });

    return active ? 'button active' : 'button';
  }

  allButtonClasses() {
    const { currentCat } = this.state;
    return currentCat.length === 0 ? 'button active' : 'button';
  }

  changeCategory(cat) {
    let { currentCat } = this.state;
    let found = false;

    if (cat !== 'All') {
      for (let i = 0; i < currentCat.length; i += 1) {
        if (currentCat[i] === cat) {
          found = true;
          currentCat.splice(i, 1);
        }
      }

      if (!found) {
        currentCat.push(cat);
      }
    } else {
      currentCat = [];
    }

    this.setState({
      currentCat,
    });
  }

  render() {
    return (
      <div className="ShoppingBasket">
        <h1>Shopping Basket</h1>

        <div>
          <span key="All">
            <Button
              value="All"
              classes={this.allButtonClasses()}
              onClick={c => this.changeCategory(c)}
            />
          </span>
          {this.getCategories()}
        </div>

        <div>{this.getInventory()}</div>
      </div>
    );
  }
}


export default ShoppingBasket;