import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const isFav = state.favs.some(fav => fav.id === dentist.id);

  const handleToggleFav = () => {
    if (isFav) {
      dispatch({ type: 'REMOVE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <div className={`dentist-card ${state.theme}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src='../../public/images/doctor.jpg' width={200}/>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <p>{dentist.id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/details/${dentist.id}`}>View Details</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={handleToggleFav}>
        {isFav ? 'Remove fav' : 'Add fav'}
      </button>
    </div>
  );
};

export default Card;
