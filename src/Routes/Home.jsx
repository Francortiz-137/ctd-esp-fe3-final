import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setDentists(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Our Dentists</h1>
      <div className="card-grid">
        {dentists.map(dentist => (
          <div key={dentist.id} className="dentist-card">
            <h2>{dentist.name}</h2>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
            <Link to={`/details/${dentist.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
