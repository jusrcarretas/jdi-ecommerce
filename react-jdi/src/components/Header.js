import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {
  state = {  }
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