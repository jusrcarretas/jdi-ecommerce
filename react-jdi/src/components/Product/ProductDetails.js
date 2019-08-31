import React, { Component } from 'react';
import Reviews from './Reviews';
import Product from './Product';
import axios from 'axios';
import './ProductDetails.css';

class ProductDetails extends Component {
  state = {
    product: null
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
        {this.state.product ? <Product product={this.state.product}/> : null}
        {this.state.product ? <Reviews productId={this.state.product.id}/> : null}
      </div>
    );
  }
}
 
export default ProductDetails;