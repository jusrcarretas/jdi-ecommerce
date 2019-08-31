import React, { Fragment } from 'react';

const ReviewVotes = props => {
  const { voteCount } = props;

  return (
    <Fragment>
      <p className="text-highlight">{
        voteCount > 0 ? (
          voteCount > 1 ? (
            voteCount + " Points"
          ) : (
              voteCount + " Point"
            )
        ) : (
            "No one found this helpful"
          )
      }</p>
    </Fragment>
  );
}

export default ReviewVotes;