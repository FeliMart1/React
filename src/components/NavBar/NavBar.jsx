import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    return (
        <nav>
        <h3>Components_uy</h3>
        <div>
            <button>Equipos Armados</button>
            <button>Componentes</button>
            <button>Perifericos</button>
            <button>Accesorios</button>
        </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar
