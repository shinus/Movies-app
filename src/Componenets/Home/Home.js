import React, { useEffect } from 'react';
import MoviesListing from '../MoviesListing/MoviesListing';
// import movieapi from '../../Common/apis/Movieapi';
// import {APIkey} from '../../Common/apis/MovieapiKey';
import { useDispatch } from 'react-redux';
// import { addMovies } from '../../Features/Movies/MovieSlice';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/Movies/MovieSlice'

const Home = () => {
  
  const dispatch = useDispatch();
  const movietext = 'harry';
  const showtext = 'friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movietext));
    dispatch(fetchAsyncShows(showtext));
  },[dispatch])
  return (
    <div>
      <div className='banner-img'></div>
      <MoviesListing />
    </div>
  )
}

export default Home