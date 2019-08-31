import React, { Component } from 'react';
import ProductCatalog from './ProductCatalog'
import axios from 'axios';
import './ProductCatalogs.css'

class ProductCatalogs extends Component {
  state = {
    products: null
  }

  // Fetch product catalogs
  getProductsByCategory = categoryId => {
    let url;

    // Change URL based on the availability of categoryId
    if (categoryId) {
      url = 'http://localhost:8000/api/summary/products/?category=' + categoryId;
    }
    else {
      url = 'http://localhost:8000/api/summary/products/';
    }

    axios.get(url)
      .then(response => {
        this.setState({
          products: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  // When a ProductCatalog is clicked, update URL
  onCatalogClick = productId => {
    const path = '/products/' + productId;
    this.props.history.push(path);
  }

  // Generate a ProductCatalog for every product in the products state
  buildProducts = products => {
    const productCatalogs = products.map(product => {
      return <ProductCatalog product={product} key={product.id}
        onCatalogClick={this.onCatalogClick} />
    });

    return productCatalogs;
  }

  componentDidMount() {
    const { categoryId } = this.props.match.params // Fetch categoryId from the URL Parameters
    this.getProductsByCategory(categoryId); // Set initial state for products
  }

  componentDidUpdate = prevProps => {
    const { categoryId } = this.props.match.params; // currentCategoryId
    const prevCategoryId = prevProps.match.params.categoryId; // Fetch previous Category from prevProps

    // Match the previousCategoryId with the currentCategoryId
    // Update products state if they are not the same 
    if (categoryId !== prevCategoryId) {
      this.getProductsByCategory(categoryId);
    }
  }

  render() { 
    return (
      <div className="catalogs-container">
        {this.state.products ? this.buildProducts(this.state.products) : null}
      </div>
    );
  }
}
 
export default ProductCatalogs;