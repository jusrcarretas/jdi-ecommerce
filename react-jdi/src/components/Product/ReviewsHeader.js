import React from 'react';
import { Button } from 'antd';

const ReviewsHeader = props => {
  return (
    <div className="flex">
      <div className="reviews-text flex-1">
        <div>Product Reviews</div>
      </div>
      <div className="write-review flex-1">
        <Button type="primary">Write a Review</Button>
      </div>
    </div>
  );
}

export default ReviewsHeader;