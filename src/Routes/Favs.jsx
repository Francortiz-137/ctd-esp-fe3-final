import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavDentists(savedFavs);
  }, []);

  return (
    <DentistList
      title="Favorite Dentists"
      dentists={favDentists}
      style={{
        backgroundColor: state.theme === 'light' ? '#f0f0f0' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff'
      }}
    />
  );
};

export default Favs;
