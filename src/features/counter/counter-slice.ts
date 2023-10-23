// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            state.value++;
        },
        decremented(state) {
            state.value--;
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

const counterReducer = counterSlice.reducer

export const {
    incremented,
    decremented,
    amountAdded,
} = counterSlice.actions;
export {counterReducer};
