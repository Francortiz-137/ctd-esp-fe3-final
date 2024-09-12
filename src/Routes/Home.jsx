import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';

const Home = () => {
  const { state } = useContext(GlobalContext);
  const dentists = state.data;
  
  return (
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
