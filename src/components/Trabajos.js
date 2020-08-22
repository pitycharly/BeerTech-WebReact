import React, { Component } from 'react'

export default class Trabajos extends Component {
  render() {
    return(
        <main class="contenedor">
          <h2 class="centrar-texto">Ejemplos de nuestros trabajos</h2>

          <article class="curso grid">
              <div class="columnas-4">
                  <img src="img/e-commerce.jpg" alt="E-Commerce" />
              </div>
              <div class="columnas-8">
                  <h4 class="no-margin">Web E-Commerce</h4>


                  <p class="descripcion">Web E-Commerce para que publiques tus productos. Se incluye un carrito y pago electronico.  </p>
              </div>
          </article>

          <article class="curso grid">
              <div class="columnas-4">
                  <img src="img/portafolio.jpg" alt="Web portafolio" />
              </div>
              <div class="columnas-8">
                  <h4 class="no-margin">Web Portafolio.</h4>


                  <p class="descripcion">Pagina web de uso informativo y con herramienta de contactos.</p>
              </div>
          </article>


        </main>
      );
    }
  }
