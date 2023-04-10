import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Forajida Café Ecommerce</h3>
            <div>
                <button>Café</button>
                <button>Accesorios</button>
                <button>Métodos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar