import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        console.log(response.data)
        this.setState({
          categories: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
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
        </nav>
      </header>
    );
  }
}
 
export default Header;