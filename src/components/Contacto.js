import React, { Component } from 'react'

// importar emailjs para enviar correo
import emailjs from "emailjs-com";
//importar swal para popUps
import swal from 'sweetalert';




export default class Contacto extends Component {



  render() {

    /* funcion encargada de enviar un email  a traves de emailJs.
     'contacto_beertech' : ID DEL SERVICIO
     'datos_contacto' : ID PLANTILLA DE EMAIL
     'user_oegYyvxy57UCNV5jeXonc' : USER ID DE EMAILJS (ACCOUNTS -> Api Keys : User ID) */ 
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('contacto_beertech', 'datos_contacto', e.target, 'user_oegYyvxy57UCNV5jeXonc')
        .then((result) => {
          swal({
            title: "Mensaje enviado con exito",
            icon: "success",
            button: "Cerrar",
          });
          
        }, (error) => {
          swal("Error al enviar el mensaje", "Intentelo nuevamente", "error");
        });
        e.target.reset()

        
  
    }

    return(
      <main class="contenedor">
        <h2 class="centrar-texto">Contacto</h2>

        <div class="grid centrar-columnas">
            <div class="columnas-12">
                <img src="img/contacto.jpg" alt="imagen contacto" />
            </div>

            <div class="columnas-10 formulario-contacto">
                <form onSubmit={sendEmail}>
                    <div class="campo">
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Tu Nombre" name="name" />
                    </div>
                    <div class="campo">
                        <label for="email">E-Mail</label>
                        <input type="email" id="email" placeholder="Tu Correo Electrónico" name="email" />
                    </div>
                    <div class="campo mensaje">
                        <label for="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="message"></textarea>
                    </div>
                    <div class="campo enviar">
                        <input type="submit" value="Enviar Mail" class="btn btn-primario" />
                    </div>
                </form>
            </div>
        </div>

      </main>
    );
  }
}
