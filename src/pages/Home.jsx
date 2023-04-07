import { useEffect } from 'react';
import * as API from '../components/services/api';
const Home = () => {
  useEffect(() => {
    const getMovie = async () => {
      const material = await API.getMovie();
      console.log(material);
    };

    getMovie().catch(console.error);
  }, []);

    return <div> домашняя старница

  </div>;
};
export default Home;
