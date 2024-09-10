import React,  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import axios from 'axios';
import Card from '../Components/Card';
// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(GlobalContext);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setDentists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={`home ${state.theme}`}>
      <h1>Our Dentists</h1>
      <div className="card-grid">
        {dentists.map(dentist => (
          <Card key={dentist.id} className="dentist-card" />
        ))}
      </div>
    </div>
  );
}

export default Home;
