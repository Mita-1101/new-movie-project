import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        recentMovies: null,
        popularMovies:null,
        comingMovies:null,
        movieTrailer: null
    },
    reducers: {
        addRecentMovies: (state, action) =>{
            state.recentMovies= action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies= action.payload;
        },
        addComingMovies: (state, action) =>{
            state.comingMovies = action.payload;
        },
        addMovieTrailer: (state, action) =>{
            state.movieTrailer= action.payload;
        }
    }
})

export const { addRecentMovies, addMovieTrailer, addPopularMovies, addComingMovies } = movieSlice.actions;
export default movieSlice.reducer;