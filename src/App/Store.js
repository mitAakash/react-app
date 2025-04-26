import { configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from "../services/posts";

export const Store = configureStore({
    reducer : {
        counter : counterReducer,
        [postApi.reducerPath]:postApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(postApi.middleware)
})
setupListeners(Store.dispatch)