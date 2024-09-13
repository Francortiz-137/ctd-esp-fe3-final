import { useState, useEffect } from 'react';
import { useDentistStates } from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';

const Home = () => {
  const { state } = useDentistStates();
  const [isLoading, setIsLoading] = useState(true);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // cargar los datos pasados 1 segundo para mostrar el skeleton
    const timer = setTimeout(() => {
      setDentists(state.data);
      setIsLoading(false);
    }, 1000); // 1 segundo

    // Limpiar el temporizador si el componente se desmonta antes de que termine
    return () => clearTimeout(timer);
  }, [state.data]);

  return (
    <DentistList
      title="Our Dentists"
      dentists={dentists}
      isLoading={isLoading}
      style={{
        backgroundColor: state.theme === 'light' ? '#f0f0f0' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff'
      }}
    />
  );
};

export default Home;
