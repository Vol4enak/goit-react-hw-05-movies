import axios from 'axios';

export const getMovie = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=bcde96d2248e63a51f520e697b2ad108',
    {}
  );
  return response.data.results;
};

export const getInfoForFilm = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=bcde96d2248e63a51f520e697b2ad108&language=en-US`,
    {}
  );
  return response.data;
};
