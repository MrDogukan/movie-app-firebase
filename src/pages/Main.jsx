import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toastErrorNotify, toastWarnNotify } from "../helpers/toastify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const { currentUser } = useContext(AuthContext);

  const getMovie = async (apiUrl) => {
    setLoading(true);
    try {
      const { data } = await axios.get(apiUrl);
      // console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      toastErrorNotify(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchMovie && currentUser) {
      getMovie(SEARCH_API + searchMovie);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search movie");
    } else {
      toastWarnNotify("Please fill out the field");
    }
  };

  console.log(movies);
  return (
    <div className="text-center">
      <form className="search my-2  " onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a movie..."
          className="p-1 rounded-3 mx-lg-2"
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <button className="p-1 rounded-3 btn btn-danger" type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap  container">
        {loading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading</span>
          </div>
        ) : (
          movies?.map((item) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 my-2 mx-2">
                <MovieCard key={item.id} {...item} />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
};

export default Main;
