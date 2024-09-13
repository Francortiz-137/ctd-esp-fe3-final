import React, { createContext, useReducer, useMemo, useEffect, useContext } from 'react';
import axios from 'axios';
import { actionTypes, initialState, reducer } from '../../reducers/reducer';


// Crear el contexto global
export const GlobalContext = createContext({});

// Proveedor del contexto global
export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Llamada a la API para obtener los datos
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: actionTypes.SET_DATA, payload: response.data });
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    dispatch({ type: actionTypes.SET_FAVS_FROM_STORAGE, payload: savedFavs });
  }, []);

  // Memorizar el contexto para evitar renders innecesarios
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useDentistStates = () => {
  return useContext(GlobalContext);
}
