import { Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'red' }}>D</span><span>H</span>
              <span style={{ fontWeight: '400', paddingLeft: '8px' }}>ODONTO</span>
    </Typography>
  )
}

export default Logo