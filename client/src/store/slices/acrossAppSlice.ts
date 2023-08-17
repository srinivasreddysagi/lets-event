import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

// Define a type for the slice state
interface AcrossAppSlice {
    isLoading: boolean;
    notification: {
        notification: boolean;
        message: string;
        variant: string;
    };
}

// Define the initial state using that type
const initialState: AcrossAppSlice = {
    isLoading: false,
    notification: {
        notification: false,
        message: "",
        variant: "success",
    },
};

interface Notification {
    notification: boolean;
    message: string;
    variant: string;
}

export const acrossAppSlice = createSlice({
    name: "acrossApp",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setNotification: (state, action: PayloadAction<Notification>) => {
            state.notification = action.payload;
        },
    },
});

export const { setIsLoading, setNotification } = acrossAppSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default acrossAppSlice.reducer;