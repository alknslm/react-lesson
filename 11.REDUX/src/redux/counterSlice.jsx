import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 123,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => {
            state.value = state.value + 1;
        },
        decreament: (state) => {
            state.value = state.value - 1;
        }

    },
})

// Action creators are generated for each case reducer function
export const { increament, decreament } = counterSlice.actions // yukarda tanımlanan methodları erişime açmak için

export default counterSlice.reducer