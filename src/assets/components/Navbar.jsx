import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext'; // Importamos el contexto de usuario

const Navbar = ({ countProducts, total, allProducts, onDeleteProduct, onCleanCart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { token, logout } = useUser(); // Obtenemos el token y el método logout
    const navigate = useNavigate(); // Hook para redirigir

    // Función para cerrar sesión y redirigir al home
    const handleLogout = () => {
        logout(); // Llamamos a la función de logout
        navigate("/"); // Redirigimos al usuario a la página de inicio
    };
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand text-white" to="/">
                    Clandestino.cl
                </Link>
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
                <div className="collapse navbar-collapse ms-auto flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/catalogo">Catálogo</Link>
                        </li>

                        {/* Mostrar solo si el usuario NO está autenticado */}
                        {!token && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/registrate">Registrarse</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/login">Iniciar Sesión</Link>
                                </li>
                            </>
                        )}

                        {/* Mostrar solo si el usuario está autenticado */}
                        {token && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/profile">Mi Perfil</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-white btn btn-link" onClick={handleLogout}>
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;