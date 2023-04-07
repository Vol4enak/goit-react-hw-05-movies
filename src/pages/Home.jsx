import { useEffect, useState } from 'react';
import * as API from '../components/services/api';
import { Link } from 'react-router-dom';
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
      <ul>
        {movie.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${id}`}> {title || name}</Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
