import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/path/to/image1.jpg', description: 'Description 1' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/path/to/image2.jpg', description: 'Description 2' },
  // Add more products as needed
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
