import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductoById } from '../../asyncmock';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductoById(id)
            .then((res) => setProduct(res))
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? (
                <ItemDetail 
                    id={product.id}
                    nombre={product.nombre}
                    precio={product.precio}
                    img={product.img}
                />
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;