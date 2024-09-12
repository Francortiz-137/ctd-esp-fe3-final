import { useDentistStates }  from '../Components/utils/global.context';
import DentistList from '../Components/DentistList';

const Home = () => {
  const { state } = useDentistStates();
  const dentists = state.data;
  
  return (
    /*como la estructura se comparte con favs se crea un nuevo componente */
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
