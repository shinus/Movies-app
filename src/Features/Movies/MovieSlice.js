import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from "../../Common/apis/Movieapi";
import { APIkey } from "../../Common/apis/MovieapiKey";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAyncMovies', async (term) => {
 
    const response = await Movieapi
    .get(`?apikey=${APIkey}&s=${term}&type=movie`);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk('movies/fetchAyncShows', async (term) => {

    const response = await Movieapi
    .get(`?apikey=${APIkey}&s=${term}&type=series`);
    return response.data;
  }
);

export const fetchAsyncMoviesorShowDetail = createAsyncThunk('movies/fetchAsyncMoviesorShowDetail', async (id) => {
    const response = await Movieapi
    .get(`?apikey=${APIkey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
    movies: {}, 
    shows: {},
    SelectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.SelectMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, shows: payload}
        },
        [fetchAsyncMoviesorShowDetail.fulfilled]: (state, {payload}) => {
            console.log("fetched successfully");
            return {...state, SelectMovieOrShow: payload}
        },
    },
});

export const {removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.SelectMovieOrShow;
export default movieSlice.reducer;