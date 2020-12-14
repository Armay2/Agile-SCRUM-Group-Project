import React, { Component } from 'react';

import Button from './components/button';
import Item from './components/item';
import { categories } from './inventory';

const inventory = [{
  id: 12,
  name: 'Y-Solowarm',
  descripton: 'Mandatory stable internet solution',
  price: 50,
  VAT: 20,
  category: 'Luxury',
  select: false,
},
{
  id: 27,
  name: 'Bitchip',
  description: 'Team-oriented optimal hub',
  price: 30,
  VAT: 10,
  category: 'Essential',
  select: false,
},
{
  id: 91,
  name: 'Flexidy',
  description: 'Profound uniform database',
  price: 20,
  VAT: 5,
  category: 'Gift',
  select: false,
},
{
  id: 54,
  name: 'Tres-Zap',
  description: 'Programmable eco-centric budgetary management',
  price: 50,
  VAT: 20,
  category: 'Luxury',
  select: false,
},
];

class ShoppingBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: [],
      item: inventory,
      totalPrice: 0
    }
  }

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
      return this.state.item.map((item, index) => {
        return this.state.currentCat.some((cat) => (cat === item.category)) || this.state.currentCat.length === 0 ? 
          <Item key={index} item={item} onClick={(price) => {
            var stateCopy = Object.assign({}, this.state);
            stateCopy.item[index].select = !stateCopy.item[index].select;
            this.setState(stateCopy);

            if (stateCopy.item[index].select) {
              this.setState({
                ...this.state,
                totalPrice: this.state.totalPrice + (price + (price * (stateCopy.item[index].VAT / 100)))
              })
              // Add to price
            } else {
              this.setState({
                ...this.state,
                totalPrice: this.state.totalPrice - (price + (price * (stateCopy.item[index].VAT / 100)))
              })
              // To remove
            }
          }}/> : null;
      });
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
      ...this.state,
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
        <div>{this.state.totalPrice}</div>
      </div>
    );
  }
}


export default ShoppingBasket;