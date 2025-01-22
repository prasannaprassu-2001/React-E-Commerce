import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.title} loading="lazy" />
    <h3>{product.title.substring(0, 12)}.....</h3>
    <p>${product.price.toFixed(2)}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
