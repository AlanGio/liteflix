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
}) => (
  <Box
    sx={{
      position: 'relative',
      height: '100vh',
      animation: 'fadeIn 0.5s',
      minHeight: 500
    }}
  >
    <Box
      sx={{
        background: [
          `linear-gradient(transparent, #242424), no-repeat center/cover url(${background})`,
          `linear-gradient(transparent, #333), no-repeat center/cover url(${background})`,
          `no-repeat center/cover url(${background})`
        ],
        backgroundImage: `url(${background})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        animation: ['none', 'none', 'shrink 7s infinite alternate'],
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
        top: 0,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          alignItems: ['center', 'center', 'flex-end'],
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          px: '6%',
          maxWidth: 1600
        }}
      >
        <Box
          key={title}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: ['center', 'center', 'flex-start'],
            height: '100%',
            mb: [4, 4, '15%'],
            mt: ['210px', '210px', 0],
            animation: 'fadeIn 1s',
            transition: 'all 0.5s ease-in',
            mr: [0, 0, 6],
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
              fontFamily: 'bebas-neue-pro',
              fontSize: [76, 76, 120],
              fontWeight: 600,
              lineHeight: ['77px', '77px', '100px'],
              letterSpacing: [12, 12, 16],
              color: '#64EEBC',
              textShadow: '0 0 50px #000',
              textAlign: ['center', 'center', 'left']
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: ['column', 'column', 'row'],
              gap: 3,
              mt: 4
            }}
          >
            <Button
              variant="contained"
              startIcon={<img src={Play} />}
              sx={{
                color: 'white',
                height: 56,
                px: 4,
                fontFamily: 'bebas-neue-pro',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '21.6px',
                letterSpacing: '4px',
                backgroundColor: '#242424',
                borderRadius: 0,
                minWidth: 248,
                '&:hover': {
                  backgroundColor: 'rgba(100, 238, 188, 0.8)',
                  animation: 'pulse 2s infinite',
                  color: '#242424',
                  '& img': {
                    filter: 'invert(100%)'
                  }
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
                fontFamily: 'bebas-neue-pro',
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
                  backgroundColor: 'rgba(36,36,36,0.8)',
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
            height: '100%',
            mt: [2, 2, 0]
          }}
        >
          <Slider onClickMovie={onClickMovie} />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default MainMovie;
