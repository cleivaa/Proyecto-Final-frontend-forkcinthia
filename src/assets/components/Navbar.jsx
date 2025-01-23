import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4">
            <div className="container px-4 px-lg-5">
            <a className="navbar-brand text-white " href="#!">
             Clandestino.cl
            </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse ms-auto flex-grow-0 "
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ">
                        
                        <li className="nav-item">
                            <a className="btn btn-outline-warning text-white me-3" aria-current="page" href="#!">
                                Inicio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="btn btn-outline-warning text-white me-3" aria-current="page" href="#!">
                                Productos
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="btn btn-outline-warning text-white me-3" aria-current="page" href="#!">
                                Registro
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-warning text-white me-3" href="#!">
                                Iniciar Sesion
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto">
                        <button className="btn btn-outline-warning text-white" type="submit">
                            <i className="bi-cart-fill me-2"></i>
                            Carro
                            <span className="badge bg-dark text-white ms-1 rounded-pill">
                                0
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
