import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';
import { toastErrorNotify } from '../helpers/toastify';
const MovieDetail = () => {
  
  const [details,setDetails]=useState({})
  const {id}=useParams()
  const {title,poster_path,overview,release_date,vote_average,vote_count}=details
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

    const fetchData = async() =>{
      try {
        const {data}=await axios.get(movieDetailBaseUrl)
        setDetails(data)
      } 
      catch (error) {
        toastErrorNotify(error.message)
      }}

    useEffect(() => {
      fetchData()
    }, [movieDetailBaseUrl])
    
    // console.log(details);

  return (
    <div className="container py-5">
    <h1 className="text-center fw-bold">{title}</h1>
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 detailImg">
          <img
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8 d-flex flex-column ">
          <div className="card-body">
            <h5 className="card-title fw-bold text-center">Overview</h5>
            <p className="card-text">{overview}</p>
          </div>
          <ul className="list-group ">
            <li className="list-group-item">
              <span className='fw-bold'>Release Date :</span> {release_date}
            </li>
            <li className="list-group-item"> <span className='fw-bold'>Rate :</span>{vote_average}</li>
            <li className="list-group-item">
             <span className='fw-bold'>Total Vote :</span>{vote_count}
            </li>
            <li className="list-group-item" >
              <Link to={-1}> Go Back</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
}

export default MovieDetail