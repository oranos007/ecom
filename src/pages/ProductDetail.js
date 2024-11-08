import React from 'react';
import { useParams } from 'react-router-dom';

// Sample products data; replace with real data or API call if needed
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/path/to/image1.jpg', description: 'This is a great product.' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/path/to/image2.jpg', description: 'This product is even better!' },
  // Add more products as needed
];

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
