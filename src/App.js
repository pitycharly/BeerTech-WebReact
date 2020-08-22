import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import QueHacemos from "./components/QueHacemos";
import Footer from "./components/Footer";
import Trabajos from "./components/Trabajos";
import Contacto from "./components/Contacto"
class App extends Component {
  render(){
  return (
    <React.Fragment>
      <Navbar/>
        <Switch>
          <Route exact path = "/" component = {QueHacemos}/>
          <Route path = "/nosotros" component = {Nosotros} />
          <Route path = "/trabajos" component = {Trabajos} />
          <Route path = "/contacto" component = {Contacto} />
        </Switch>
        <Footer />
    </React.Fragment>
  );
  }
}

export default App;
