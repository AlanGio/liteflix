import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Slider from '../Slider';

import Play from '../../assets/playtriangle.svg';
import Plus from '../../assets/plus.svg';

interface MainMovieProps {
  title: string;
  background: string;
  onClickMovie: (id: number) => void;
}

const MainMovie: React.FC<MainMovieProps> = ({
  title,
  background,
  onClickMovie
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          animation: 'shrink 7s infinite alternate',
          transition: 'all 0.5s ease-in',
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
          height: '100%',
          width: '100%',
          top: 0
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: '100%',
            px: '6%'
          }}
        >
          <Box
            key={title}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              height: '100%',
              mb: '15%',
              animation: 'fadeIn 1s',
              transition: 'all 0.5s ease-in',
              '@keyframes fadeIn': {
                '0%': {
                  opacity: 0
                },
                '100%': {
                  opacity: 1
                }
              }
            }}
          >
            <Typography
              component="div"
              sx={{
                fontFamily: 'bebas-neue-pro',
                fontSize: '20px',
                lineHeight: '20px',
                letterSpacing: '4px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: 400,
                strokeWidth: '1px',
                stroke: 'black',
                mb: 2,
                textShadow: '0 0 50px #000'
              }}
            >
              Original de{' '}
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  letterSpacing: '4px',
                  fontSize: '20px',
                  color: '#fff',
                  fontFamily: 'bebas-neue-pro'
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
                fontWeight: 600,
                lineHeight: '100px',
                letterSpacing: '16px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                color: '#64EEBC',
                textShadow: '0 0 50px #000'
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<img src={Play} />}
                sx={{
                  color: 'white',
                  height: 56,
                  px: 4,
                  fontFamily: 'Bebas Neue',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: '21.6px',
                  letterSpacing: '4px',
                  backgroundColor: '#242424',
                  borderRadius: 0,
                  minWidth: 248,
                  '&:hover': {
                    backgroundColor: 'rgba(100, 238, 188, 0.7)',
                    animation: 'pulse 2s infinite'
                  }
                }}
              >
                Reproducir
              </Button>
              <Button
                variant="outlined"
                startIcon={<img src={Plus} />}
                sx={{
                  color: 'white',
                  height: 56,
                  px: 4,
                  fontFamily: 'Bebas Neue',
                  fontSize: '18px',
                  fontWeight: 400,
                  minWidth: 248,
                  lineHeight: '21.6px',
                  letterSpacing: '4px',
                  backgroundColor: 'rgba(36,36,36,0.5)',
                  border: '1px solid',
                  borderColor: 'rgba(255,255,255,0.5)',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: '#242424',
                    animation: 'pulse 2s infinite',
                    borderColor: '#ccc'
                  }
                }}
              >
                Mi Lista
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%'
            }}
          >
            <Slider onClickMovie={onClickMovie} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainMovie;
