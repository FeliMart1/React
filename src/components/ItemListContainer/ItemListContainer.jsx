import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (id) {
            getProductosByCategory(id)
                .then((res) => setProducts(res))
                .catch((err) => console.log(err));
        } else {
            getProductos()
                .then((res) => setProducts(res))
                .catch((err) => console.log(err));
        }
    }, [id]);

    const getTitle = () => {
        if (id === 'perifericos') return 'Nuestros Perifericos';
        if (id === 'componentes') return 'Nuestros Componentes';
        return greeting;
    };

    return (
        <div className="item-list-container">
            <h1>{getTitle()}</h1>
            {!id && <h2>Mis productos</h2>}
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;