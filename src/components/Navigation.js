import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        
        
        <li>
          <Link to="/show">Show All products</Link>
        </li>
        <li>
          <Link to="/owner">Your Products</Link>
        </li>
        <li>
          <Link to="/applications">Your Applications</Link>
        </li>
        <li>
          <Link to="/addproduct">Add Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navigation;