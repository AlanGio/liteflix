import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import useAxios from 'axios-hooks';
import React, { useEffect } from 'react';
import PlayButton from '../../assets/play.svg';
import Star from '../../assets/star.svg';

interface Movie {
  id: number;
  title: string;
  backdrop_path?: string;
  image?: string;
  vote_average?: number;
  release_date?: string;
}

interface SliderProps {
  onClickMovie: (id: number) => void;
}

const services = [
  'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20',
  'https://liteflix-5afefe60246f.herokuapp.com/movies'
];

const Slider: React.FC<SliderProps> = ({ onClickMovie }) => {
  const [{ data, loading, error }, sendForm] = useAxios(
    {
      url: services[0]
    },
    { manual: true }
  );

  const [category, setCategory] = React.useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(Number(event.target.value));
  };

  useEffect(() => {
    sendForm({
      url: services[category]
    });
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const handleClickMovie = (id: number) => {
    onClickMovie(id);
  };

  const movies = data ? (data?.results ? data.results : data.movies) : [];

  console.log(movies, 'movies');

  return (
    <>
      <Select
        id="demo-simple-select"
        value={category.toString()}
        onChange={handleChange}
        fullWidth
        sx={{
          color: '#fff',
          fontFamily: 'bebas-neue-pro',
          fontSize: 18,
          fontWeight: 600,
          lineHeight: '18px',
          letterSpacing: '4px',
          textAlign: 'center',
          boxShadow: '0',
          height: 40,
          backgroundColor: 'rgba(0,0,0,.5)',
          '& svg': {
            color: '#fff'
          },
          '& .MuiSelect-select': {
            border: '0',
            boxShadow: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >
        <MenuItem value={0}>Populares</MenuItem>
        <MenuItem value={1}>Mis Peliculas</MenuItem>
      </Select>
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
        {movies.slice(0, 4).map((movie: Movie) => {
          let imgBg = '';
          if (movie.backdrop_path) {
            imgBg = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
          }
          if (movie.image) {
            imgBg = movie.image;
          }

          return (
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
                  backgroundImage: `url(${imgBg})`,
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
                  {movie.vote_average && movie.release_date && (
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
                        <img src={Star} />{' '}
                        {movie.vote_average.toString().substring(0, 3)}
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
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Slider;
