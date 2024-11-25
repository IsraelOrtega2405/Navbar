import React from 'react';
import './Contactos.css';  // Asegúrate de importar el archivo CSS

const Contactos = () => {
  return (
    <div>
      <h2>Contactos</h2>
      
      {/* Sección de Israel Ortega Perez */}
      <div className="contact-section">
        <h3>Israel Ortega Perez</h3>
        <p>Redes Sociales:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/share/Vvfn3r71R9D3L46p/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/edgar2405ortega/profilecard/?igsh=d2d1cXA4enh1dXh5" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="tel:+525610309895">+525610309895</a>
          </li>
        </ul>
      </div>

      {/* Sección de Alberto Gualo Palomino */}
      <div className="contact-section">
        <h3>Alberto Gualo Palomino</h3>
        <p>Redes Sociales:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61569445580531&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/berth_x3?igsh=MTAyN3J4Nm5lMjNh" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="tel:+525564405956">+52 1 55 6440 5956</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contactos;
