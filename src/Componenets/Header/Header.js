import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/Movies/MovieSlice';
// import user from '../../Images/User.png';
import './Header.scss';

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    if(term === " ") return alert("plaese enter search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Movies App</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submithandler}>
          <input type='text' value={term} placeholder='search for movies or shows' onChange={(e) => setTerm(e.target.value)} /> 
          <button type='submit' variant="contained">Search</button>
        </form>
      </div>
      {/* <div className='user-image'>
        <img src={user} alt='user' />
      </div> */}
    </div>
  )
}

export default Header