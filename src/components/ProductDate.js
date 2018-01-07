import React from 'react';
import PropTypes from 'prop-types';

const ProductDate = ({ date }) => (
  <p>{({ dateStr: date })}</p>
);

ProductDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ProductDate;
