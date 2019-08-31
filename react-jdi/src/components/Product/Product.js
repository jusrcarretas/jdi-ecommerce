import React from 'react';
import ProductRating from './ProductRating';
import './Product.css';
import ProductButtons from './ProductButtons';

const Product = props => {
  const { name, price, currency, quantity, short_description, 
    long_description, image, average_rating, rating_count } = props.product;

  return (
    <div className="product-container">
      <img className="product-image" alt="" src={image} />
      <div className="product-details">
        <h5>{name}</h5>
        <ProductRating average_rating={average_rating} rating_count={rating_count}/>
        <h5 className="text-highlight text-bold">{currency + " " +
          price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h5>
        <p>{short_description}</p>
        <p>{long_description}</p>
        <ProductButtons quantity={quantity} />
      </div>
    </div>
  );
}
 
export default Product;