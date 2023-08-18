import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AcrossAppSlice, Notification, UserData } from "../interfaces";
// import type { RootState } from "../store";

// Define the initial state using that type
const initialState: AcrossAppSlice = {
    userData: {
        signed: false,
        email: ""
    },
    isLoading: false,
    notification: {
        notification: false,
        message: "",
        variant: "success",
    },
};

export const acrossAppSlice = createSlice({
    name: "acrossApp",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setNotification: (state, action: PayloadAction<Notification>) => {
            state.notification = action.payload;
        },
    },
});

export const { setUserData, setIsLoading, setNotification } = acrossAppSlice.actions;

export default acrossAppSlice.reducer;