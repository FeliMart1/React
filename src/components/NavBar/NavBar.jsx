// src/components/NavBar/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext } from '../ItemDetail/cartContext';
import './NavBar.css';

const NavBar = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <nav>
            <img src="/logo.jpg" alt="Logo" />
            <div className="navbar">
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/category/perifericos" className="navbar-link">Perifericos</Link>
                <Link to="/category/componentes" className="navbar-link">Componentes</Link>
                <Link to="/checkout" className="navbar-link">Checkout</Link>
            </div>
            <CartWidget quantity={cartQuantity} />
        </nav>
    );
};

export default NavBar;