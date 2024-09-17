import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <img src="/logo.jpg" alt="Logo" />
            <div className="navbar">
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to="/category/perifericos" className="navbar-link">Perifericos</Link>
                <Link to="/category/componentes" className="navbar-link">Componentes</Link>
                {/* Agrega más enlaces de categorías aquí si es necesario */}
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;