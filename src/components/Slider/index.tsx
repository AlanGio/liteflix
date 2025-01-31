import { Box, Typography } from '@mui/material';
import useAxios from 'axios-hooks';
import React from 'react';
import PlayButton from '../../assets/play.svg';
import Star from '../../assets/star.svg';

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
}

interface SliderProps {
  onClickMovie: (id: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onClickMovie }) => {
  const [{ data, loading, error }] = useAxios(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleClickMovie = (id: number) => {
    onClickMovie(id);
  };

  return (
    <>
      <Box
        component="ul"
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: 'column',
          listStyleType: 'none',
          p: 0,
          pb: [6, 6, 0]
        }}
      >
        {data?.results.slice(0, 4).map((movie: Movie) => (
          <Box
            component="li"
            key={movie.id}
            onClick={() => handleClickMovie(movie.id)}
            sx={{
              width: [327, 327, 220],
              height: [172, 172, 146],
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease',
                '.image': {
                  boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)'
                },
                '.play': {
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: 1,
                  '& img': {
                    width: 24,
                    height: 24
                  }
                },
                '.rating': {
                  display: 'flex'
                }
              }
            }}
          >
            <Box
              className="image"
              sx={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                backgroundSize: 'cover',
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 1,
                boxShadow: '0px 0px 60px black'
              }}
            />
            <Box sx={{ width: '100%', p: 2 }}>
              <Box
                sx={{
                  filter: 'drop-shadow( -5px -5px 5px #000 )',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  width: '100%'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    width: '100%',
                    mb: 1,
                    '& img': {
                      width: 40,
                      height: 40
                    }
                  }}
                  className="play"
                >
                  <img src={PlayButton} alt="Play" />
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: 'bebas-neue-pro',
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: '16px',
                      letterSpacing: '2px',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      color: '#fff',
                      textShadow: '0 0 20px #000'
                    }}
                  >
                    {movie.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'none',
                    gap: 1,
                    justifyContent: 'space-between',
                    width: '100%',
                    mt: 2
                  }}
                  className="rating"
                >
                  <Box
                    sx={{
                      color: 'white',
                      letterSpacing: '2px'
                    }}
                  >
                    <img src={Star} /> {movie.vote_average}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontFamily: 'bebas-neue-pro',
                      letterSpacing: '2px'
                    }}
                  >
                    {movie.release_date.substring(0, 4)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Slider;
