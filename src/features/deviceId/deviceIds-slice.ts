// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FieldState {
    value: string;
    isValid: boolean;
}

interface DeviceIdState {
    macState: FieldState;
    snState: FieldState;
}

const initialState: DeviceIdState = {
    macState: {value: '', isValid: false},
    snState: {value: '', isValid: false}
};

const deviceIdsSlice = createSlice({
    name: 'deviceIds',
    initialState,
    reducers: {
        macUpdated(state, action: PayloadAction<FieldState>) {
            state.macState = action.payload;
        },
        snUpdated(state, action: PayloadAction<FieldState>) {
            state.snState = action.payload;
        },
    },
});

const deviceIdsReducer = deviceIdsSlice.reducer

export const {
    macUpdated,
    snUpdated
} = deviceIdsSlice.actions;
export {deviceIdsReducer};
