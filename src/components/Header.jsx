import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => (
  <header>
    <div className="container">
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          E-Commerce Store
        </Link>
      </h1>
      <div className="cart-icon">
        <Link to="/cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
            alt="Cart"
          />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
