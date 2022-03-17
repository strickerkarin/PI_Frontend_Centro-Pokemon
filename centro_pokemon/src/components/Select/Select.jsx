import React, { useContext } from "react";
import propTypes from "prop-types";
import { ContextoFormulario } from "../../context/ContextoFormulario";

/**
 * @description Componente que permite seleccionar el tipo de Pokemon
 * @author Karin
 * @param {{
 * name: string
 * label: string
 * options: Array
 * disabled: boolean
 * }} props
 */

const Select = ({ name, label, options = [], disabled = false }) => {
  const { dispatch } = useContext(ContextoFormulario);

  const onChange = (e) => {
    e.preventDefault();

    dispatch({
      type: "ACTUALIZAR_POKEMON",
      payload: {
        name: "tipoPokemon",
        valor: e.target.value,
      },
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} disabled={disabled}>
        <option value="">Selecciona el tipo de pokemon</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  options: propTypes.array,
  disabled: propTypes.bool,
};

export default Select;
