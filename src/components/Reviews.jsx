import { useState, useEffect } from 'react';
import * as API from '../components/services/api';
const { useParams } = require('react-router-dom');
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const material = await API.getInfoByReviews(movieId);
      setReviews(material.results);
    };
    getMovie().catch(console.error);
  }, [movieId]);
  console.log(reviews.length);
  return (
    <ul>
      {reviews.length ? reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      )) : <p>We dont have any reviews</p>}
    </ul>
  );
};

export default Reviews;
