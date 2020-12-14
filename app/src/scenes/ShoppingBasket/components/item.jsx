import React from 'react';
import PropTypes from 'prop-types';

import Price from './price';

import './item.css';

function Item(props) {
  const { name, price, desc, VAT, onClick } = props;

  return (
    <div className="item">
      <span key="All">
        <button
        type="button"
        onClick={() => {
          onClick(price);
        }}>
        Add
      </button>
      </span>
      <h1>{name}</h1>
      <Price value={price} /> (VAT: {VAT}%)
      <p>{desc}</p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;
