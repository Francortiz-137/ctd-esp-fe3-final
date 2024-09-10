import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
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
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar