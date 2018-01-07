import React from 'react';
import PropTypes from 'prop-types';

const ProductSize = ({ size }) => (
  <p>Size: {size}</p>
);

ProductSize.propTypes = {
  size: PropTypes.number.isRequired,
};

export default ProductSize;
