import Home from 'pages/Home';
import Movie from 'pages/Movie';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>privet</div>} />
        <Route path="/:movieId" element={<Movie />} />
      </Route>
    </Routes>
  );
};
