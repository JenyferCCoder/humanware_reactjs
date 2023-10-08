import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Humanware</h3>
            <div>
                <button>Monitores</button>
                <button>Mouse</button>
                <button>Case</button>
                <button>Teclados</button>
                <button>Parlantes</button>
                <button>Zona Gamer</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar