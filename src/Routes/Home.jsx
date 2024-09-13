import { useState, useEffect } from 'react';
import { useDentistStates } from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';

const Home = () => {
  //traemos los datos desde el contexto
  const { state } = useDentistStates();
  const [isLoading, setIsLoading] = useState(true);
  const [dentists, setDentists] = useState([]);
  const noResultMsg = "No hay resultados 😥";

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
      noResults={noResultMsg}
    />
  );
};

export default Home;
