import { createSlice } from "@reduxjs/toolkit";

const searchToggleSlice = createSlice({
    name: 'searchToggle',
    initialState: {
        showSearch: false,
        movieResult: [],
       
        
    },
    reducers : {
        toggleSearchView: (state) => {
            state.showSearch = !state.showSearch;
        },
        addMovieResult: (state, action) => {
            state.movieResult = action.payload;
           
        },
        deleteMovieResult: (state) =>{
            state.movieResult = []
        }
    },
})

export const { toggleSearchView, addMovieResult, deleteMovieResult } = searchToggleSlice.actions;
export default searchToggleSlice.reducer;
