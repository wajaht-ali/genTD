import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementVal: ((state) => state.value += 1),
        decrementVal: ((state) => state.value -= 1),
        resetVal: ((state) => state.value = 0),
        incrementByVal: ((state, action) => state.value = state.value + action.payload),
    }
})

export const { incrementVal, incrementByVal, decrementVal, resetVal } = counterSlice.actions;
export default counterSlice.reducer;