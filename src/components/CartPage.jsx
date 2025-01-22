import React from 'react';

const CartPage = ({ cart }) => (
  <div className="cart-page">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty!</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default CartPage;
