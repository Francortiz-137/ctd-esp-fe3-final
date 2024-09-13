import { useEffect, useState } from 'react';
import { useDentistStates } from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';

const Favs = () => {
  const { state } = useDentistStates();
  const [favDentists, setFavDentists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const noResultMsg = "No hay favoritos 😥";

  // Obtener los favoritos desde localStorage
  useEffect(() => {
    // cargar los datos pasados 1 segundo para mostrar el skeleton
    const timer = setTimeout(() => {
      const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
      setFavDentists(savedFavs);
      setIsLoading(false);
    }, 1000); // 1 segundo

    // Limpiar el temporizador si el componente se desmonta antes de que termine
    return () => clearTimeout(timer);
  }, [state.data]);

  return (
      <DentistList
        title="Favorite Dentists"
        dentists={favDentists}
        isLoading={isLoading}
        noResults={noResultMsg}
      />
  );
};

export default Favs;
