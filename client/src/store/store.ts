import { configureStore } from "@reduxjs/toolkit";
import acrossApp from "./slices/acrossAppSlice";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        acrossApp,
    },
    middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;