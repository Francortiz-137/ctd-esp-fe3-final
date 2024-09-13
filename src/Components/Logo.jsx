import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span style={{ color: theme.palette.primary.main }}>D</span>
      <span>H</span>
      <span style={{ fontWeight: '400', paddingLeft: '8px' }}>
        ODONTO
      </span>
    </Typography>
  );
};

export default Logo;
