import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className="item-container">
            <img src={img} alt={nombre} className="item-image" />
            <h2 className="item-title">{nombre}</h2>
            <h3 className="item-price">US${precio}</h3>
            <Link to={`/item/${id}`} className="item-button">Ver Detalles</Link>
        </div>
    );
};

export default Item;