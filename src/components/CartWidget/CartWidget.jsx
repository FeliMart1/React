
import carrito from '../../../public/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='cartWidget'>
            <img src={carrito} alt='carrito' />
            0
        </div>
    )
}

export default CartWidget