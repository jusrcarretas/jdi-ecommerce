import React, { Component } from 'react';
import ReviewsHeader from './ReviewsHeader';
import ReviewsRating from './ReviewsRating';
import ReviewsGraph from './ReviewsGraph';
import Review from './Review';
import axios from 'axios';
import './Reviews.css';

class Reviews extends Component {
  state = {
    reviews: null,
    reviewModalVisible: false
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

  buildReviews = reviews => {
    const reviewList = reviews.map(review => {
      return <Review review={review} key={review.id} />
    })

    return reviewList;
  }

  showReviewModal = () => {
    this.setState({
      reviewModalVisible: true,
    });
  };

  handleReviewSubmit = () => {
    this.setState({
      reviewModalVisible: false,
    });    
  };

  handleReviewCancel = () => {
    this.setState({
      reviewModalVisible: false,
    });
  };

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
        {this.state.reviews ? this.buildReviews(this.state.reviews) : null}
      </div>
    );
  }
}
 
export default Reviews;