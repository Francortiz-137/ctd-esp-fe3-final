import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes'; // Asegúrate de que la ruta sea correcta
import { GlobalContext } from '../Components/utils/global.context'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
        <li>
          <Link to={routes.favs}>Favs</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>
        Switch to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
};

export default Navbar;
