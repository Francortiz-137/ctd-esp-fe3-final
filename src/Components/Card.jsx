import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context'; // Ajusta la ruta según corresponda
import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Card  as MuiCard, CardActions, CardContent, CardMedia} from '@mui/material';

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const isFav = state.favs.some(fav => fav.id === dentist.id);

  const handleToggleFav = (e) => {

    e.stopPropagation(); // Evitar que el click afecte al Link
    e.preventDefault(); // Evitar que se navegue cuando se hace click en el botón

    if (isFav) {
      dispatch({ type: 'REMOVE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    /* Para no renombrar nuestro componente Card, renombre el Card de material-ui a MuiCard*/
    <MuiCard component={Link} to={`/details/${dentist.id}`} 
        sx={{ maxWidth: 345, textDecoration: 'none'}} 
        className={`dentist-card ${state.theme}`}>
        
        <CardMedia
        sx={{ height: 250 }}
        image='./images/doctor.jpg'
        title="doctor {dentist.name}"
        />
        <CardContent>
          {/* En cada card deberan mostrar en name - username y el id */}
          <Typography gutterBottom variant="h5" component="div">
            {dentist.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {dentist.username}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {dentist.id}
          </Typography>
        </CardContent>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
  
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <CardActions>
          <Button 
            onClick={handleToggleFav} 
            startIcon={isFav ? <StarIcon /> : <StarBorderIcon />}
          >
            {isFav ? 'Remove fav' : 'Add fav'}
          </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
