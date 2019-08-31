import React from 'react';
import { Divider, Rate } from 'antd';

const ProductRating = props => {
  const { average_rating, rating_count } = props;

  return (
    <div className="product-rating text-highlight">
      <Rate disabled value={average_rating} />
      <Divider type="vertical" />
      Rated {average_rating.toFixed(2)} based on {rating_count}
      {rating_count > 1 ? " Reviews" : " Review"}
    </div>
  );
}

export default ProductRating;