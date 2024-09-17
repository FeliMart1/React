import '../ItemCount/ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const substract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='itemCount'>
            <button onClick={substract}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
            <button onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;

