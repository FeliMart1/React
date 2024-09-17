import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, nombre, precio, img }) => {
    const handleAddToCart = (quantity) => {
        console.log(`Added ${quantity} of item ${id} to cart`);
    };

    return (
        <div className="item-detail">
            <img src={img} alt={nombre} className="item-detail-image" />
            <h2 className="item-detail-title">{nombre}</h2>
            <h3 className="item-detail-price">US${precio}</h3>
            <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iure error, adipisci corporis, voluptatibus minus quas autem voluptatem repellendus repellat, dolorem vitae illum mollitia magnam? Similique natus recusandae aliquam vel!</p>
        </div>
    );
};

export default ItemDetail;