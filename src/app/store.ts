import {configureStore} from '@reduxjs/toolkit';

import {counterReducer} from '../features/counter/counter-slice';
import {deviceIdsReducer} from "../features/deviceId/deviceIds-slice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        deviceId: deviceIdsReducer,
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
