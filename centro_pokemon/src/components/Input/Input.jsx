import React, { useState, useContext } from "react";
import ContextoFormulario from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const {
    handleNombreEntrenador,
    handleApellidoEntrenador,
    handleEmailEntrenador,
    handleNombrePokemon,
  } = useContext(ContextoFormulario);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [value, setValue] = useState("");

  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    const valor = e.target.value;
    setValue(valor);
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    switch (name) {
      case "nombre":
        handleNombreEntrenador(value);
        break;
      case "apellido":
        handleApellidoEntrenador(value);
        break;
      case "email":
        handleEmailEntrenador(value);
        break;
      case "nombrePokemon":
        handleNombrePokemon(value);
        break;
      default:
        break;
    }
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
