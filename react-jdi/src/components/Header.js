import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import axios from 'axios';
import './Header.css'

class Header extends Component {
  state = {
    categories: null
  }

  // Fetch categories from the backend
  // Categories will be used to render Navbar Items
  getCategories = () => {
    const url = 'http://localhost:8000/api/categories/';

    axios.get(url)
      .then(response => {
        this.setState({
          categories: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Convert categories from the backend into navbar items
  buildCategories = categories => {
    let categoryItems = categories.map((category) => {
      return (
        <Fragment key={category.id}>
          <Divider type="vertical" />
          <li><Link to={"/categories/" + category.id}>{category.name}</Link></li>
        </Fragment>
      )
    })

    // Add "All" navbar item in the beginning of 
    // the array using the unshift method
    categoryItems.unshift(
      <Fragment key="all">
        <li><Link to="/">All</Link></li>
      </Fragment>
    )

    return categoryItems;
  }

  componentDidMount() {
    this.getCategories();
  }

  render() { 
    return (
      <header>
        <div className="header-quote">You know you want to shop.</div>
        <nav className="navbar nav-center">
          <Link className="navbar-title" to="/">JUST DO IT</Link>
          <div className="nav-wrapper container">
            <ul>
              {this.state.categories ? this.buildCategories(this.state.categories) : null}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
 
export default Header;