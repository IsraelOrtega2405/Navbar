import React from 'react';
import './Home.css'; // Archivo CSS para estilizar la página de inicio

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Bienvenidos a Israel-Albert</h1>
        <p>
          Un proyecto innovador enfocado en la creación de páginas web modernas y soluciones de inteligencia artificial.
        </p>
      </div>

      <section className="presentation">
        <h2>Misión</h2>
        <p>
          Nuestra misión es proporcionar herramientas tecnológicas que permitan a los usuarios crear plataformas web 
          innovadoras, integrando inteligencia artificial para mejorar la experiencia del usuario.
        </p>

        <h2>Visión</h2>
        <p>
          Ser reconocidos como líderes en el desarrollo de soluciones tecnológicas que transformen la manera en que 
          las personas interactúan con la tecnología.
        </p>
      </section>
    </div>
  );
};

export default Home;
