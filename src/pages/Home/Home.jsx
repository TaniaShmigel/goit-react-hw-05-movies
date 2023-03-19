import { useEffect, useState } from 'react';
import { getTrending } from 'services/getApi';
import ListMovies from 'components/ListMovies';

const Home = () => {
  const [stateMovies, setStateMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    getTrending(abortController)
      .then(response => {
        setStateMovies(response.data.results);
      })
      .catch(error => {
        return error;
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {stateMovies && <ListMovies listMovies={stateMovies} />}
    </>
  );
};

export default Home;
