import { Box, Typography } from '@mui/material';
import React from 'react';

interface MainMovieProps {
  title: string;
  background: string;
}

const MainMovie: React.FC<MainMovieProps> = ({ title, background }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          animation: 'shrink 5s infinite alternate',
          '@keyframes shrink': {
            '0%': {
              transform: 'scale(1.05)'
            },
            '100%': {
              transform: 'scale(1)'
            }
          },
          position: 'relative',
          boxShadow: 'inset 0 0 400px 40px #000',
          zIndex: 0
        }}
      />

      <Box
        sx={{
          background: 'rgba(0, 0, 0, 0.2)',
          zIndex: 10,
          position: 'absolute',
          height: '90%',
          width: '100%',
          top: 0,
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <Box sx={{ p: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%'
            }}
          >
            <Typography
              component="div"
              sx={{
                fontFamily: 'Bebas Neue',
                fontSize: '20px',
                lineHeight: '20px',
                letterSpacing: '4px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                color: '#bbb',
                textTransform: 'uppercase',
                fontWeight: 400,
                strokeWidth: '1px',
                stroke: 'black',
                mb: 1
              }}
            >
              Original de{' '}
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: '4px',
                  fontSize: '20px',
                  color: '#fff',
                  fontFamily: 'Bebas Neue'
                }}
              >
                Liteflix
              </Typography>
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Bebas Neue',
                fontSize: '120px',
                fontWeight: 700,
                lineHeight: '100px',
                letterSpacing: '16px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                color: '#64EEBC'
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainMovie;
