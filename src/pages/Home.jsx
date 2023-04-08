import { useEffect, useState } from 'react';
import * as API from '../components/services/api';
import { Link, useLocation } from 'react-router-dom';
import { Items, MovieList } from './Home.styled';



const Home = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const material = await API.getMovie();

      setmovie(material);
    };

    getMovie().catch(console.error);
  }, []);

  return (
    <div>
      <MovieList>
        {movie.map(({ id, title, name }) => (
          <li key={id}>
            <Items to={`movies/${id}`}>{title || name}</Items>{' '}
          </li>
        ))}
      </MovieList>
    </div>
  );
};
export default Home;
