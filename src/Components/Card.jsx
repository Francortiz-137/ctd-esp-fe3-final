import { routes } from '../utils/routes';
import { useDentistStates } from '../Components/utils/global.context';
import { Link } from "react-router-dom";
import { Button, Typography, Card as MuiCard, CardActions, CardContent, CardMedia, CardActionArea, Box, Skeleton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CardSkeleton from './CardSkeleton';

const Card = ({ dentist }) => {
  const { state, dispatch } = useDentistStates();
  const isFav = state.favs.some(fav => fav.id === dentist.id);
  const url = `${routes.detail}/${dentist.id}`;

  const handleToggleFav = (e) => {
    if (isFav) {
      dispatch({ type: 'REMOVE_FAV', payload: dentist });
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };

  return (
    <>
      <MuiCard 
          sx={{ 
            backgroundColor: state.theme === 'light' ? '#ffffff' : '#1e1e1e',
            color: state.theme === 'light' ? '#000000' : '#ffffff',
            border: `1px solid ${state.theme === 'light' ? '#e0e0e0' : '#333333'}`,
            borderRadius: '16px',
            boxShadow: `0 4px 8px ${state.theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)'}`,
            minWidth: 290,
            transition: 'background-color 0.3s, box-shadow 0.3s', 
            '&:hover': {
              backgroundColor: state.theme === 'light' ? '#f5f5f5' : '#333333',
              boxShadow: `0 8px 16px ${state.theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)'}`,
              transform: 'scale(1.05)'
            }
          }}
        >
          <CardActionArea component={Link} to={url}>
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
                  {dentist.id}
                </Typography>
                <Typography variant="body2" sx={{ color: state.theme === 'light' ? 'text.secondary' : '#cccccc' }}>
                  {dentist.username}
                </Typography>
              </CardContent>
          </CardActionArea>
          
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
    </>
      
        
  );
};

export default Card;
