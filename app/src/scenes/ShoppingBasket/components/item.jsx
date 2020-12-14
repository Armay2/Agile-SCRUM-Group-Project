import React from 'react';
import PropTypes from 'prop-types';

import Price from './price';

import './item.css';

function Item(props) {
  const item = props.item;

  return (
    <div className="item" style={{backgroundColor: item.select ? "black" : "white"}}>
      <span key="All">
        <button
        type="button"
        onClick={() => {
          props.onClick(item.price);
        }}>
        {item.select ? "Remove" : "Add"}
      </button>
      </span>
      <h1>{item.name}</h1>
      <Price value={item.price} /> (VAT: {item.VAT}%)
      <p>{item.desc}</p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;



