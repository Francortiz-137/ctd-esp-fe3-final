import React, { createContext, useReducer, useMemo, useEffect } from 'react';
import axios from 'axios';

// Estado inicial del contexto
export const initialState = {
  theme: 'light', // Puedes iniciar con 'light' o 'dark'
  data: [], // Información traída de la API
};

// Acciones del reducer
const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_DATA: 'SET_DATA',
};

// Reducer para manejar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

// Crear el contexto global
export const GlobalContext = createContext(undefined);

// Proveedor del contexto global
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Llamada a la API para obtener los datos (ejemplo con axios)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: actionTypes.SET_DATA, payload: response.data });
      })
      .catch(error => console.error(error));
  }, []);

  // Memoizar el contexto para evitar renders innecesarios
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
