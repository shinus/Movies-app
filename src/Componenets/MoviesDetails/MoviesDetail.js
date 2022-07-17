import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MoviesDetail.scss'
import { useParams } from 'react-router-dom';
import { getSelectMovieOrShow, fetchAsyncMoviesorShowDetail, removeSelectedMovieOrShow } from '../../Features/Movies/MovieSlice';

const MoviesDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMoviesorShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID])
  return (
    <div className='movie-section'>
      {Object.keys(data).length === 0 ?
        (<div>...Loading</div>) : (
          <>
            <div className='section-left'>
              <div className='movie-title'>{data.Titlle}</div>
              <div className='movie-rating'>
                <span>
                  IMDB rating <i className='fa fa-star'></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB votes <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}
                </span>
                <span>
                  RunTime <i className='fa fa-film'></i> : {data.Runtime}
                </span>
                <span>
                  Year <i className='fa fa-calendar'></i> : {data.Year}
                </span>
              </div>
              <div className='movie-plot'>{data.Plot}</div>
              <div className='movie-info'>
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className='section-right'>
              <img src={data.Poster} alt={data.Title} />
            </div>
          </>
        )}
    </div>
  );
}

export default MoviesDetail