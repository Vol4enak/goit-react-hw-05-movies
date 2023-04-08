import { useParams, Link, Outlet } from 'react-router-dom';
import * as API from '../components/services/api';
import { useEffect, useState } from 'react';
import { Block, BackBtn } from './MovieDetails.styled';
const Movie = () => {
  const [infoMovie, setInfoMovie] = useState([]);
  const [http, setHttp] = useState('');
  const [genr, setGenr] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const material = await API.getInfoForFilm(params.movieId);
      setInfoMovie(material);
      setHttp('https://image.tmdb.org/t/p/w300');
      setGenr(material.genres);
    };
    getMovie().catch(console.error);
  }, [params.movieId]);

  const { poster_path, title, original_title, vote_average, overview } =
    infoMovie;

  const getGenres = () => {
    let genre = genr.map(res => res.name);
    genre = genre.toString().replaceAll(',', ', ');
    return genre;
  };
  return (
    <div>
      <BackBtn to="/"> назад</BackBtn>
      <Block>
        <img src={http + poster_path} alt="" />
        <div>
          <h3>{title || original_title}</h3>
          <p>User score: {vote_average}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres</h5>
          <p>{getGenres()}</p>
        </div>
      </Block>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Movie;
