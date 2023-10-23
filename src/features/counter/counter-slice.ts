// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FieldState {
    value: string;
    isValid: boolean;
}

interface CounterState {
    value: number;
    MAC: FieldState;
    SN: FieldState;
}

const initialState: CounterState = {
    value: 0,
    MAC: {value: '', isValid: false},
    SN: {value: '', isValid: false}
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
        macUpdated(state, action: PayloadAction<FieldState>) {
            state.MAC = action.payload;
        },
        snUpdated(state, action: PayloadAction<FieldState>) {
            state.SN = action.payload;
        },
    },
});

export const {
    incremented,
    decremented,
    amountAdded,
    macUpdated,
    snUpdated
} = counterSlice.actions;
export default counterSlice.reducer;
