import { useState, useEffect } from 'react';
import * as API from '../components/services/api';
import { Link } from 'react-router-dom';
const Movie = () => {
  const [value, setValue] = useState('');
  const [searchingMovie, setSearchingMovie] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(false);

  useEffect(() => {
    if (submitStatus) {
      const getSearch = async () => {
        const material = await API.getSearchedMovies(value);

        setSearchingMovie(material.results);
        setSubmitStatus(false);
        setValue('');
      };
      getSearch().catch(console.error);
    }
  }, [submitStatus, value]);

  const formSubmit = e => {
    e.preventDefault();
    setSubmitStatus(true);
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="">
          {' '}
          <input
            type="text"
            name="name"
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </label>
      </form>
      {searchingMovie.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`${id}`}> {title || name}</Link>{' '}
        </li>
      ))}
    </>
  );
};

export default Movie;
