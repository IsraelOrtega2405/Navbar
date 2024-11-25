import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Portfolio from './Components/Portafolio/Portfolio';
import Contactos from './Components/Contactos/Contactos';
import Home from './Components/Home/Home'; // Importa el nuevo componente Home

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta raíz muestra Home */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Router>
  );
};

export default App;
