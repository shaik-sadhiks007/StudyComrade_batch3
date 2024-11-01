import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name : 'counter',
  initialState : {
    value : 0,
  },
  reducers : {
    increment : (state) => {
      // state.value += 1
      state.value = state.value + 1
    },
    decrement : (state) => {

      state.value -= 1

      // state.value = state.value + 1
    }

  }

})

export const {increment,decrement} = counterSlice.actions; // defining to redux that these are fun calls(actions)

export default counterSlice.reducer; // defining to redux that these are reducers (functions)
