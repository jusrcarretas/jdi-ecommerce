import React, { Fragment } from 'react';
import { Rate } from 'antd';

const ReviewsRating = props => {
  const { averageRating } = props;

  return (
    <Fragment>
      <div className="inline-block margin-right-10">
        <div className="rating-details">
          <div className="text-highlight text-bold text-emphasize4">
            {averageRating.toFixed(2)}
          </div>
          <Rate disabled defaultValue={averageRating} />
        </div>
      </div>
    </Fragment>
  );
}

export default ReviewsRating;