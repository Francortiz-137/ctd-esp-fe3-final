import React, { createContext, useReducer, useMemo, useEffect, useContext } from 'react';
import axios from 'axios';

// Estado inicial del contexto
export const initialState = {
  theme: 'light', // Tema inicial
  data: [], // Información traída de la API
  favs: [], // Estado para los favoritos
};

// Acciones del reducer
const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  ADD_FAV: 'ADD_FAV',
  REMOVE_FAV: 'REMOVE_FAV',
  SET_FAVS_FROM_STORAGE: 'SET_FAVS_FROM_STORAGE',
};

// Reducer para manejar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case actionTypes.ADD_FAV:
      const updatedFavsAdd = [...state.favs, action.payload];
      localStorage.setItem('favs', JSON.stringify(updatedFavsAdd));
      return {
        ...state,
        favs: updatedFavsAdd,
      };
    case actionTypes.REMOVE_FAV:
      const updatedFavsRemove = state.favs.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favs', JSON.stringify(updatedFavsRemove));
      return {
        ...state,
        favs: updatedFavsRemove,
      };
    case actionTypes.SET_FAVS_FROM_STORAGE:
      return {
        ...state,
        favs: action.payload,
      };
    default:
      return state;
  }
};

// Crear el contexto global
export const GlobalContext = createContext({});

// Proveedor del contexto global
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
