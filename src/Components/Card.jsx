import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import { Link } from "react-router-dom";
import { Button, Typography, Card as MuiCard, CardActions, CardContent, CardMedia, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const isFav = state.favs.some(fav => fav.id === dentist.id);

  const handleToggleFav = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isFav) {
      dispatch({ type: 'REMOVE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <Box sx={{ 
          maxWidth: 345,
          minWidth: 290
        }}>
      <Link 
      to={`/details/${dentist.id}`} 
      style={{ textDecoration: 'none' }}
    >
      <MuiCard 
        sx={{ 
          backgroundColor: state.theme === 'light' ? '#ffffff' : '#1e1e1e',
          color: state.theme === 'light' ? '#000000' : '#ffffff',
          border: `1px solid ${state.theme === 'light' ? '#e0e0e0' : '#333333'}`,
          borderRadius: '16px',
          boxShadow: `0 4px 8px ${state.theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)'}`,
          transition: 'background-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#333333',
            boxShadow: `0 8px 16px ${state.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)'}`,
          }
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image='./images/doctor.jpg' 
          title={`doctor ${dentist.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {dentist.name}
          </Typography>
          <Typography variant="body2" sx={{ color: state.theme === 'light' ? 'text.secondary' : '#cccccc' }}>
            {dentist.username}
          </Typography>
          <Typography variant="body2" sx={{ color: state.theme === 'light' ? 'text.secondary' : '#cccccc' }}>
            {dentist.id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            onClick={handleToggleFav} 
            startIcon={isFav ? <StarIcon /> : <StarBorderIcon />}
            sx={{ color: state.theme === 'light' ? 'text.primary' : '#ffffff' }}
          >
            {isFav ? 'Remove fav' : 'Add fav'}
          </Button>
        </CardActions>
      </MuiCard>
    </Link>

    </Box>
        
  );
};

export default Card;
