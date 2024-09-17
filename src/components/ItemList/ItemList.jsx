import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products, onViewDetails }) => {
    return (
        <div className="item-list">
            {products.map((product) => (
                <Item 
                    key={product.id} 
                    {...product} 
                    onViewDetails={() => onViewDetails(product)} 
                />
            ))}
        </div>
    );
};

export default ItemList;