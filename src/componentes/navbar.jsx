import { NavLink } from 'react-router-dom';

// Recibo las props temaOscuro y toggleTema desde App.jsx
const Navbar = ({ temaOscuro, toggleTema }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">MiApp</div>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Inicio</NavLink>
                <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')}>Servicios</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>Contacto</NavLink>
                {/* Botón que alterna el tema */}
                <button className="theme-toggle-btn" onClick={toggleTema}>
                    {temaOscuro ? '☀️ Claro' : '🌙 Oscuro'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
