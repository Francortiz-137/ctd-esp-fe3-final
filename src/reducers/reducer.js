
// Estado inicial del contexto
export const initialState = {
    theme: 'light', // Tema inicial
    data: [], // Información traída de la API
    favs: [], // Estado para los favoritos
  };
  
  // Acciones del reducer
 export const actionTypes = {
    TOGGLE_THEME: 'TOGGLE_THEME',
    SET_DATA: 'SET_DATA',
    ADD_FAV: 'ADD_FAV',
    REMOVE_FAV: 'REMOVE_FAV',
    SET_FAVS_FROM_STORAGE: 'SET_FAVS_FROM_STORAGE',
  };
  

// Reducer para manejar el estado
export const reducer = (state, action) => {
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
  