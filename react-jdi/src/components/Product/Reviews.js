import React, { Component } from 'react';
import { Divider } from 'antd';
import ReviewsHeader from './ReviewsHeader';
import ReviewsRating from './ReviewsRating';
import ReviewsGraph from './ReviewsGraph';
import AddReview from './AddReview';
import Review from './Review';
import axios from 'axios';
import './Reviews.css';

class Reviews extends Component {
  state = {
    reviews: null,
    reviewModalVisible: false
  }

  // Fetch Reviews for the selected product
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

  // Generate list of Review Components per review
  buildReviews = reviews => {
    const reviewList = reviews.map(review => {
      return <Review review={review} key={review.id} />
    })

    return reviewList;
  }

  // Shows the AddReview modal
  showReviewModal = () => {
    this.setState({
      reviewModalVisible: true,
    });
  };

  // Append newReview after completing
  handleReviewSubmit = newReview => {
    this.setState({
      reviews: [newReview, ...this.state.reviews]
    }, () => {
      this.props.handleNewReview();
    })

    this.setState({
      reviewModalVisible: false,
    });    
  };

  // Hides the AddReview modal
  handleReviewCancel = () => {
    this.setState({
      reviewModalVisible: false,
    });
  };

  renderNoReviews() {
    return (
      <div>
        <Divider type="horizontal" />
        <div className="no-reviews center-children">
          <h6>No reviews yet. Be the first one!</h6>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const productId = this.props.product.id;
    this.getReviews(productId);
  }

  render() { 
    return (
      <div className="reviews-container">
        <ReviewsHeader handleClick={this.showReviewModal} />
        <div className="center-children">
          <ReviewsRating averageRating={this.props.product.average_rating} />
          <ReviewsGraph 
            ratingCount={this.props.product.rating_count} 
            ratingBreakdown={this.props.product.rating_breakdown}/>
        </div>
        {this.state.reviews ? (
          this.state.reviews.length > 0 ? 
            this.buildReviews(this.state.reviews) : this.renderNoReviews()
        ) : null}
        <AddReview
          visible={this.state.reviewModalVisible}
          handleOk={this.handleReviewSubmit}
          handleCancel={this.handleReviewCancel}
          productName={this.props.product.name}
          productId={this.props.product.id}/>
      </div>
    );
  }
}
 
export default Reviews;