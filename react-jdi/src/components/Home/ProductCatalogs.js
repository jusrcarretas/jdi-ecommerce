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

    if (categoryId) {
      url = 'http://localhost:8000/api/summary/products/?category=' + categoryId;
    }
    else {
      url = 'http://localhost:8000/api/summary/products/';
    }

    axios.get(url)
      .then(response => {
        console.log(response.data)
        this.setState({
          products: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  onCatalogClick = productId => {
    const path = '/products/' + productId;
    this.props.history.push(path);
  }

  buildProducts = products => {
    const productCatalogs = products.map(product => {
      return <ProductCatalog product={product} key={product.id}
        onCatalogClick={this.onCatalogClick} />
    });

    return productCatalogs;
  }

  componentDidMount() {
    const { categoryId } = this.props.match.params
    this.getProductsByCategory(categoryId);
  }

  componentDidUpdate = prevProps => {
    const { categoryId } = this.props.match.params;
    const prevCategoryId = prevProps.match.params.categoryId;

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