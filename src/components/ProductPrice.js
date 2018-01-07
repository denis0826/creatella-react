import React from 'react';
import PropTypes from 'prop-types';

const ProductPrice = ({ price }) => (
  <p>${price.toFixed(2)}</p>
);

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ProductPrice;
