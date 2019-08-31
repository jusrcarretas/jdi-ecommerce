import React, { Component } from 'react';
import axios from 'axios';

class ProductDetails extends Component {
  state = {
    products: null
  }

  // Fetch product by id
  getProduct = productId => {
    const url = 'http://localhost:8000/api/products/' + productId;

    axios.get(url)
      .then(response => {
        this.setState({
          product: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    const { productId } = this.props.match.params; // Fetch productId from URL parameters
    this.getProduct(productId);
  }
 
  render() { 
    return (
      <div>
        ProductDetails
      </div>
    );
  }
}
 
export default ProductDetails;