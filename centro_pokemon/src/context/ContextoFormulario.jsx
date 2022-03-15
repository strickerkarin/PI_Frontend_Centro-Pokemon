import React, { createContext, useReducer } from "react";
import propTypes from "prop-types";

export const ContextoFormulario = createContext();

/**
 * @description Provider del contexto del formulario que provee el estado
 * @author Karin Stricker
 * @param {{children: React.ReactNode}} props
 * @returns {JSX.Element}
 */

export const ProviderFormulario = ({ children }) => {
  /**
   * @description Estado inicial del formulario
   * @type {{entrenador: {nombre: string, apellido: string, email: string}, pokemon: {nombrePokemon: string, tipoPokemon: string, elementoPokemon: string, alturaPokemon: string, edadPokemon: string}}}
   */
  const initialState = {
    entrenador: {
      nombre: "",
      apellido: "",
      email: "",
    },
    pokemon: {
      nombrePokemon: "",
      tipoPokemon: "",
      elementoPokemon: "",
      alturaPokemon: "",
      edadPokemon: "",
    },
  };

  /**
   * @description Función reductora para el estado del formulario que actualiza el estado según la acción que se le solicite
   * @author Karin Stricker
   * @param {initialState} state
   * @param {{type: string,
   * payload : {
   * [string]: string,
   * }} action
   * @returns {initialState}
   *
   */

  const reducer = (state, action) => {
    switch (action.type) {
      case "ACTUALIZAR_ENTRENADOR":
        return {
          ...state,
          entrenador: {
            ...state.entrenador,
            ...(state.entrenador[action.payload.name] = action.payload.valor),
          },
        };
      case "ACTUALIZAR_POKEMON":
        return {
          ...state,
          pokemon: {
            ...state.pokemon,
            ...(state.pokemon[action.payload.name] = action.payload.valor),
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * @description Función que recibe los parámetros del formulario y ejecuta la acción correspondiente
   * @author Karin Stricker
   * @param {string} type
   * @param {{[string]: string}} valorInput
   */

  return (
    <ContextoFormulario.Provider value={{ state, dispatch }}>
      {children}
    </ContextoFormulario.Provider>
  );
};

ProviderFormulario.propTypes = {
  children: propTypes.node.isRequired,
};
