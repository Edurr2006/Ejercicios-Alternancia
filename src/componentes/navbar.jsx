import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">MiApp</div>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Inicio</NavLink>
                <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')}>Servicios</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>Contacto</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
