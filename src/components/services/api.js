import axios from 'axios';


axios.defaults.baseURL =
  'https://api.themoviedb.org/3/trending/all/day?api_key=bcde96d2248e63a51f520e697b2ad108';

export const getMovie = async () => {
  const response = await axios.get('', {});
  return response.data.results;
};