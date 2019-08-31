import React, { Fragment } from 'react';
import { Rate } from 'antd';

const AddReviewHeader = props => {
  const { productName, rating, handleRatingChange } = props;

  return (
    <Fragment>
      <div className="review-header">
        <div className="review-product">
          {productName}
        </div>
        <div className="rate-product">
          <Rate
            allowClear={false}
            value={rating}
            required
            onChange={handleRatingChange} />
        </div>
      </div>
    </Fragment>
  );
}

export default AddReviewHeader;