import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

/**
 * Esta función se encarga de enviar el formulario al servidor
 * @param {*} data 
 * @returns 
 */

const enviarFormulario = async (data) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Solicitud enviada :)");
    return await response.json();
  }
};

/**
 * @description Componente que muestra el detalle del formulario con los datos de cada uno de los campos que fue completado
 * @returns {JSX.Element}
 */

const Detalle = () => {
  const { state } = useContext(ContextoFormulario);

  const { nombre, apellido, email } = state?.entrenador;

  const {
    nombrePokemon,
    tipoPokemon,
    elementoPokemon,
    alturaPokemon,
    edadPokemon,
  } = state?.pokemon;

  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {nombrePokemon}</p>
        </div>
        <div className="fila">
          <p>Tipo: {tipoPokemon}</p>
        </div>
        <div className="fila">
          <p>Elemento: {elementoPokemon}</p>
        </div>
        <div className="fila">
          <p>Altura: {alturaPokemon}</p>
        </div>
        <div className="fila">
          <p>Edad: {edadPokemon}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => enviarFormulario(state)}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
