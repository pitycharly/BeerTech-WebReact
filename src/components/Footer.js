import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Default extends Component {
  render() {
    console.log(this.props);
    return(
      <footer class="site-footer">
          <div class="contenedor">
              <div class="barra">
                  <div class="img-logo img-logo"></div>

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
          </div>
      </footer>
    );
  }
}
