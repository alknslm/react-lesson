import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice'
import userReducers from '../redux/userSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducers
    }
})
