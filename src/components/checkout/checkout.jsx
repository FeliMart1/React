// src/components/checkout/checkout.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../ItemDetail/cartContext';
import './checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '' });
  const [orderNumber, setOrderNumber] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo({ ...buyerInfo, [name]: value });
  };

  const handleConfirmPurchase = () => {
    const orderNum = Math.floor(Math.random() * 1000000);
    setOrderNumber(orderNum);
  };

  const totalAmount = cart.reduce((total, item) => total + item.precio * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.nombre} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.nombre}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: US${item.precio}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: US${totalAmount}</h3>
      </div>
      <form className="checkout-form">
        <label>
          Nombre:
          <input type="text" name="name" value={buyerInfo.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={buyerInfo.email} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleConfirmPurchase}>Confirmar Compra</button>
      </form>
      {orderNumber && (
        <div className="order-confirmation">
          <h3>¡Orden Confirmada!</h3>
          <p>Número de Orden: {orderNumber}</p>
          <p>Total: US${totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;