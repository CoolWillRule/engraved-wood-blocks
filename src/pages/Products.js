import React from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const products = [
  { id: 1, name: 'Naruto Block', description: 'Wooden block with Naruto engraving', price: 20, image: '/images/naruto.jpg' },
  { id: 2, name: 'Sailor Moon Block', description: 'Wooden block with Sailor Moon engraving', price: 25, image: '/images/sailormoon.jpg' },
  // Add more products as needed
];

const Products = () => (
  <div>
    <h2>Products</h2>
    <div className="product-list">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  </div>
);

export default Products;
