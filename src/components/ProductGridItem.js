import React from 'react';
import ProductFace from './ProductFace';
import ProductSize from './ProductSize';
import ProductPrice from './ProductPrice';
import ProductDate from './ProductDate';
import { productPropTypes } from './productPropTypes';

const ProductGridItem = ({
  id, size, price, face, date,
}) => (
  <div key={id}>
    <ProductFace face={face} size={size} />
    <ProductSize size={size} />
    <ProductPrice price={price} />
    <ProductDate date={date} />
  </div>
);

ProductGridItem.propTypes = productPropTypes;

export default ProductGridItem;
