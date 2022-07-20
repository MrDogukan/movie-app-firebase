import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {loading ? (
        <div className="spinner-border text-primary m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : null}
      {movies?.map((movie) => null)}
    </div>
  );
};

export default Main;
