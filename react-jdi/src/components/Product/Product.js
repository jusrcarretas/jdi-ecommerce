import React from 'react';

const Product = props => {
  const { name, price, currency, quantity, short_description, long_description, image } = props.product;
  return (
    <div>
      {name}
      {price}
    </div>
  );
}
 
export default Product;