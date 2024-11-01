import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'
import productSlice from './productSlice'


export const store = configureStore({
    reducer : {
        counter : counterSlice,
        products : productSlice
    }
})