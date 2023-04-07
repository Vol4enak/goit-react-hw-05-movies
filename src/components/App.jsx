import Home from 'pages/Home';
import Movie from 'pages/Movie';
import Cast from './Cast';
import Reviews from './Reviews';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>privet</div>} />
        <Route path="/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
