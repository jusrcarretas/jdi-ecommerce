import React, { Component } from 'react';
import ReviewsHeader from './ReviewsHeader';
import ReviewsRating from './ReviewsRating';
import ReviewsGraph from './ReviewsGraph';
import axios from 'axios';
import './Reviews.css';

class Reviews extends Component {
  state = {
    reviews: null
  }

  getReviews = productId => {
    const url = 'http://localhost:8000/api/reviews/?product=' + productId;

    axios.get(url)
      .then(response => {
        this.setState({
          reviews: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    const productId = this.props.product.id;
    this.getReviews(productId);
  }

  render() { 
    return (
      <div>
        <ReviewsHeader />
        <div className="center-children">
          <ReviewsRating averageRating={this.props.product.average_rating} />
          <ReviewsGraph 
            ratingCount={this.props.product.rating_count} 
            ratingBreakdown={this.props.product.rating_breakdown}/>
        </div>
      </div>
    );
  }
}
 
export default Reviews;