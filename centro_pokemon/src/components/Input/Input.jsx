import React, { useState, useContext, useRef, useEffect } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";
import propTypes from "prop-types";

/**
 * @description Componente que gestiona los inputs del formulario
 * @author Karin Stricker
 * @param {{
 * nombre: string,
 *  label: string,
 * type: string,
 * shouldFocus: boolean,
 * isPokemon: boolean,
 * }} props
 * @returns {JSX.Element}
 */

const Input = ({
  name,
  label,
  type = "text",
  shouldFocus = false,
  isPokemon = false,
}) => {
  const ref = useRef();

  const { state, dispatch } = useContext(ContextoFormulario);

  const [value, setValue] = useState(state[name] || "");

  /**
   * @description Función que se ejecuta al cambiar el valor del input
   * @param {Event} e
   */

  const onChange = (e) => {
    setValue(e.target.value);
  };

  /**
   * Función que se ejecuta al perder el foco el input
   * @param {Event} e
   */

  const onBlur = (e) => {
    e.preventDefault();
    dispatch({
      type: isPokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR",
      payload: { name, valor: value },
    });
  };

  useEffect(() => {
    if (ref.current && shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string,
  shouldFocus: propTypes.bool,
  isPokemon: propTypes.bool,
};

export default Input;
