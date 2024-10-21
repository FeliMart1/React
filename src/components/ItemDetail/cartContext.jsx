// src/components/ItemDetail/CartContext.jsx
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((i) => i.id === item.id);
            if (existingItem) {
                return prevCart.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            } else {
                return [...prevCart, item];
            }
        });
    };

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };