import { useParams } from 'react-router-dom';
import * as API from '../components/services/api';
import { useEffect, useState } from 'react';
const Movie = () => {
  const [infoMovie, setInfoMovie] = useState([]);
  const params = useParams();
  console.log(params);
  
  useEffect(() => {
    const getMovie = async () => {
      const material = await API.getInfoForFilm(params.movieId);
      console.log(material);
      setInfoMovie(material);
    };
    getMovie().catch(console.error);
  }, [params.movieId]);

  const { poster_path, title, name, vote_average, overview, id } =
    infoMovie;
  const zxc = "https://image.tmdb.org/t/p/w500" + poster_path;
  return (
    <div>
      <div key={id}>
        {zxc ? (
          <>
            <img src={zxc} alt="" />
            <h3>{title || name}</h3>
            <p>User score: {vote_average}</p>
            <h4>overview</h4>
            <p>{overview}</p>
            <h5>Genres</h5>
            <p></p>
          </>
        ) : (
          <h1>ЗАГРУЗКА</h1>
        )}
      </div>
    </div>
  );
};

export default Movie;
