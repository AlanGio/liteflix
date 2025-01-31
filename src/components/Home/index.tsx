import useAxios from 'axios-hooks';
import React from 'react';
import MainMovie from '../MainMovie';
import { CircularProgress } from '@mui/material';
const imgPathOriginal = 'https://image.tmdb.org/t/p/original';

const Home: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = React.useState<number | null>(null);
  const [{ data, loading, error }] = useAxios(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'
  );

  if (loading) return <CircularProgress sx={{ mt: '30%', color: 'white' }} />;
  if (error) return <p>Error!</p>;

  const movie = selectedMovie
    ? data.results.find((movie: { id: number }) => movie.id === selectedMovie)
    : data.results[0];

  return (
    <MainMovie
      title={movie.original_title}
      background={`${imgPathOriginal}${movie.backdrop_path}`}
      onClickMovie={setSelectedMovie}
    />
  );
};

export default Home;
