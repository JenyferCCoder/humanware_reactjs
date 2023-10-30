import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={'/category/monitor'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Monitores</NavLink>
                <NavLink to={'/category/mouse'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mouse</NavLink>
                <NavLink to={'/category/teclado'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teclados</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar