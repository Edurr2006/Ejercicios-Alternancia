import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar.jsx';
import Inicio from './pages/Inicio.jsx';
import Servicios from './pages/Servicios.jsx';
import Contacto from './pages/Contacto.jsx';
import './App.css';

function App() {
  // Estado para controlar el tema activo
  const [temaOscuro, setTemaOscuro] = useState(true);

  // Alterna entre modo oscuro y claro
  const toggleTema = () => setTemaOscuro(!temaOscuro);

  return (
    // La clase 'dark' o 'light' se aplica al contenedor principal
    <Router>
      <div className={`app-container ${temaOscuro ? 'theme-dark' : 'theme-light'}`}>
        <Navbar temaOscuro={temaOscuro} toggleTema={toggleTema} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 Mi Aplicación React - Ejercicios Alternancia</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
