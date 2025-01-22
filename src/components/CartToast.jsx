import React from 'react';


const CartToast = ({ show }) => {
  return (
    <div
      className={`cart-toast ${show ? 'visible' : ''}`}
      role="alert"
      aria-live="polite"
    >
      Added to Cart
    </div>
  );
};

export default CartToast;
