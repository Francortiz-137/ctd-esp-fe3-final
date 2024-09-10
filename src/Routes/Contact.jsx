import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(GlobalContext);
  return (
    <div className={`contact ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact