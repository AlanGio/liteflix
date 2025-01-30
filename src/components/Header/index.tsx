import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const Header: React.FC = () => {
  return (
    <Box
      component={'header'}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        px: 10,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'bebas-neue-pro',
          fontSize: '34px',
          fontWeight: 600,
          lineHeight: '34px',
          letterSpacing: '4px',
          textAlign: 'left',
          color: '#64EEBC',
          textTransform: 'uppercase',
          textShadow: '0 0 40px #000'
        }}
      >
        Lite
        <Typography
          component="span"
          sx={{
            fontFamily: 'bebas-neue-pro',
            fontWeight: 400,
            fontSize: '34px',
            lineHeight: '34px',
            letterSpacing: '4px'
          }}
        >
          flix
        </Typography>
      </Typography>

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{
          color: '#fff',
          border: 'none',
          fontFamily: 'bebas-neue-pro',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '18px',
          letterSpacing: '4px'
        }}
      >
        Agregar Pelicula
      </Button>
    </Box>
  );
};

export default Header;
