// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    MAC: string;
    SN: string;
}

const initialState: CounterState = {
    value: 0,
    MAC: 'AA:BB:CC:DD:EE:FF',
    SN: '---'
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // it's okay to do this because immer makes it immutable
            // under the hood
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
        macUpdated(state, action: PayloadAction<string>) {
            state.MAC = action.payload;
        },
        snUpdated(state, action: PayloadAction<string>) {
            state.SN = action.payload;
        },
    },
});

export const {
    incremented, amountAdded, macUpdated,
    snUpdated
} = counterSlice.actions;
export default counterSlice.reducer;
