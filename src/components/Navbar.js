import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Principal extends Component{
  render(){
    return(
      <body>
      <header class="site-header">
      <div class="contenedor">
          <div class="barra">
              <a  href="/">
                  <div class="img-logo tittleBlog"></div>
                  <h1 class="no-margin "></h1>

              </a>
              <nav class="navegacion">
              <Link to="/nosotros" alt="nos" className="nav-link">
                Nosotros
              </Link>
              <Link to="/trabajos" alt="tra" className="nav-link">
                Trabajos
              </Link>
              <Link to="/contacto" alt="con" className="nav-link">
                Contacto
              </Link>
              </nav>
          </div>
          <div class="texto-header">
              <h2 class="no-margin">Desarrollo de Software de calidad</h2>
              <p class="no-margin">Aportando las mejores soluciones informaticas del mercado</p>
          </div>

      </div>
      </header>


        </body>
        );
      }
    }
