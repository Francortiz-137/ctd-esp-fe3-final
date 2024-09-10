import React, {useContext} from 'react'
import { GlobalContext } from '../Components/utils/global.context'; // Asegúrate de que la ruta sea correcta


const Footer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <footer className={`footer ${state.theme}`}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
