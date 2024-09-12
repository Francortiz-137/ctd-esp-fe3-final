import { useDentistStates }  from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const { state } = useDentistStates();
  const [dentists, setDentists] = useState([]); 
  // Llamada a la API para obtener los datos
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setDentists(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    /*como la estructura se repetia con favs se crea un nuevo componente */
    <DentistList
      title="Our Dentists"
      dentists={dentists}
      style={{
        backgroundColor: state.theme === 'light' ? '#f0f0f0' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff'
      }}
    />
  );
}

export default Home;
