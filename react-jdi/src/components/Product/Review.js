import React, { Component } from 'react';

class Review extends Component {
  state = {

  }
  
  render() { 
    return (
      <div>
        {this.props.review.title}
      </div>
    );
  }
}
 
export default Review;