import { Box, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        pt: 4,
        px: 10,
        height: '60px'
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
    </Box>
  );
};

export default Header;
