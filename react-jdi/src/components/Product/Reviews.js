import React, { Component } from 'react';
import axios from 'axios';

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
    const { productId } = this.props;
    this.getReviews(productId);
  }

  render() { 
    return (
      <div>
        Reviews
      </div>
    );
  }
}
 
export default Reviews;