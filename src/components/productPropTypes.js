import PropTypes from 'prop-types';

// The name of a product's properties are exactly these (come from server).
export const productPropTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

// For the collection, it's best not to set a specific name or mark as required
// because those decisions are up to the component that uses the collection.
export const productCollectionPropTypes = PropTypes.arrayOf(
  PropTypes.shape(productPropTypes),
);
