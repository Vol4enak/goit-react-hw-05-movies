import { useState, useEffect } from 'react';
import * as API from '../components/services/api';
const { useParams } = require('react-router-dom');

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const material = await API.getInfoByCredits(movieId);
      setCast(material.cast);
    };
    getMovie().catch(console.error);
  }, [movieId]);


  return (
    <ul>
      {cast.map(({ character, name, profile_path, id }) => {
        let imgPreview = 'https://image.tmdb.org/t/p/w200';
        if (!profile_path) {
          profile_path = '/wp-content/uploads/2022/05/coming-soon.jpg';
          imgPreview = 'https://en9lish.com';
        }

        return (
          <li key={id}>
            <img
              src={imgPreview + profile_path}
              alt=""
              width={200}
              height={300}
            />
            <p>name: {name}</p>
            <p>character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
