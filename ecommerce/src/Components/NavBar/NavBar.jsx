import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
    return (
       <nav className="NavBar">
        <Link to='/'>
            <h3 className="titulo">Ecommerce Forajida Café</h3>
        </Link>
        <div className='Categories'>
         <NavLink to={`/category/Café`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Café</NavLink>
         <NavLink to={`/category/Accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
         <NavLink to={`/category/Métodos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Métodos</NavLink>
        <NavLink to={`/category/Membresías`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Membresías</NavLink>
        </div> 
        <CartWidget/>
       </nav> 
    )
}

export default NavBar