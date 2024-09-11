import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import { Container } from '@mui/material';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams();
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(response => setDentist(response.data))
      .catch(error => console.error(error));
  }, [params.id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <Container mt={0}>
        <div className={`detail ${state.theme}`}>
      <h1>Detail Dentist {params.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="dentist-info">
        <p><strong>Name:</strong> {dentist.name}</p>
        <p><strong>Email:</strong> {dentist.email}</p>
        <p><strong>Phone:</strong> {dentist.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
      </div>
    </div>
    </Container>
    
  )
}

export default Detail