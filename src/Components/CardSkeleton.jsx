import { Skeleton, Card as MuiCard, CardContent } from '@mui/material';

const CardSkeleton = () => {
  return (
    <MuiCard sx={{ width: 290 , borderRadius: '16px',}}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton width="60%" />
        <Skeleton width="40%" />
        <Skeleton width="80%" />
      </CardContent>
    </MuiCard>
  );
};

export default CardSkeleton;
