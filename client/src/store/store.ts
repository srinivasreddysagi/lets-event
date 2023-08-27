import { configureStore } from "@reduxjs/toolkit";
import acrossApp from "./slices/acrossAppSlice";
import eventServices from "./slices/eventServices";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        acrossApp,
        eventServices,
    },
    middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;