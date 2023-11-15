import CartWidget from "./CardWidget"
function Navbar() {

    return (
        <div>

            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                       <p className="navbar-title has-text-weight-bold"> Pc Lux, Hardware al alcane de tu mano</p>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Procesadores
                        </a>
                        <a className="navbar-item">
                            Placas de video
                        </a>
                    </div>
                </div>
                <CartWidget/>1
            </nav>

        </div>
    )
}

export default Navbar;