import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(GlobalContext);
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavDentists(savedFavs);
  }, []);

  return (
    <>
     <div className={`favs ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favDentists.map(dentist => (
          <div key={dentist.id} className={`dentist-card ${state.theme}`}>
            <h2>{dentist.name}</h2>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default Favs;
