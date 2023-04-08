import Home from 'pages/Home';
import MoviesDetails from 'pages/MovieDetails';
import Movie from 'pages/Movie';
import Cast from './Cast';
import Reviews from './Reviews';
import { Route, Routes} from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
