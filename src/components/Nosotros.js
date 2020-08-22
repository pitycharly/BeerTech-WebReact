import React, { Component } from 'react'

export default class Nosotros extends Component {
  render() {
    return(
    <main class="contenedor">
        <h2 class="centrar-texto">Sobre Nosotros</h2>
        <div class="grid">
            <div class="columnas-6">
                <img src="img/contacto.jpg_large" alt="Imagen Nosotros" />
            </div>
            <div class="columnas-6">
                <p>
                    Somos un equipo de desarrolladores con buena sinergia de trabajo que busca seguir creciendo en esta
                    industria ofreciendo nuestros servicios para facilitar la gestión de su emprendimiento.
                    <br />
                    <br />
                    Ofrecemos una comunicación fluida cliente-desarrollador, así también asesorandolo en el equipo necesario para sus necesidades.
                </p>
            </div>
        </div>
    </main>
  );
  }
}
