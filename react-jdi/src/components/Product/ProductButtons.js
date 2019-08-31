import React from 'react';
import { Button } from 'antd';

const ProductButtons = props => {
  const { quantity } = props;

  return (
    <div>
      <Button className="detail-buttons secondary" size="large">Add To Cart</Button>
      <Button className="detail-buttons primary" size="large">Buy Now</Button>
      <span className="text-emphasize1">{quantity}
        {quantity > 1 ? " pieces" : " piece"} available</span>
    </div>
  );
}

export default ProductButtons;