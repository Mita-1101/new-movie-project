import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import searchToggleReducer from './searchToggleSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        searchToggle: searchToggleReducer
    }
})
 export default appStore ;