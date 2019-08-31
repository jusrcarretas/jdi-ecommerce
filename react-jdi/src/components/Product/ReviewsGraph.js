import React from 'react';
import { Progress } from 'antd';

const ReviewsGraph = props => {
  const { ratingBreakdown, ratingCount } = props;

  const getRatingPercentage = (breakdown, rating) => {
    let ratingPercentage;

    const currentRating = breakdown.find(breakdownRating => {
      return breakdownRating.rating === rating;
    })

    if (currentRating) {
      ratingPercentage = currentRating.total / ratingCount * 100;
      ratingPercentage = Math.round(ratingPercentage * 100) / 100;
    }
    else {
      ratingPercentage = 0;
    }

    return ratingPercentage;
  }

  return (
    <div className="inline-block">
      <div className="inline-block">
        <div>5 Star&nbsp;</div>
        <div>4 Star&nbsp;</div>
        <div>3 Star&nbsp;</div>
        <div>2 Star&nbsp;</div>
        <div>1 Star&nbsp;</div>
      </div>
      <div className="progress-container inline-block">
        <Progress 
          percent={getRatingPercentage(ratingBreakdown, 5)}
          defaultValue={0}
          format={(percent) =>  {
            if (percent === 100) {
              return percent + '%'
            }
          }} />
        <Progress 
          percent={getRatingPercentage(ratingBreakdown, 4)}
          defaultValue={0}
          format={(percent) =>  {
            if (percent === 100) {
              return percent + '%'
            }
          }} />
        <Progress 
          percent={getRatingPercentage(ratingBreakdown, 3)}
          defaultValue={0}
          format={(percent) =>  {
            if (percent === 100) {
              return percent + '%'
            }
          }} />
        <Progress 
          percent={getRatingPercentage(ratingBreakdown, 2)}
          defaultValue={0} 
          format={(percent) =>  {
            if (percent === 100) {
              return percent + '%'
            }
          }} />
        <Progress 
          percent={getRatingPercentage(ratingBreakdown, 1)}
          defaultValue={0}
          format={(percent) =>  {
            if (percent === 100) {
              return percent + '%'
            }
          }} />
      </div>
    </div>
  );
}

export default ReviewsGraph;