// src/components/CartWidget/CartWidget.jsx
import React from 'react';
import carrito from '../../../public/carrito.png';
import './CartWidget.css';

const CartWidget = ({ quantity }) => {
    return (
        <div className='cartWidget'>
            <img src={carrito} alt='carrito' />
            <span>{quantity}</span>
        </div>
    );
};

export default CartWidget;