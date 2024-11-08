import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <h1>E-commerce Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
