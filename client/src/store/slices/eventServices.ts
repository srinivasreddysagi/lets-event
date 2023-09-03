import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EventServicesSlice, Services } from "../interfaces";

const initialState: EventServicesSlice = {
    providerServices: [],
    seekerServices: [],
};

export const eventServices = createSlice({
    name: "eventServices",
    initialState,
    reducers: {
        setProviderServices: (state, action: PayloadAction<Services[]>) => {
            state.providerServices = action.payload;
        },
        setSeekerServices: (state, action: PayloadAction<Services[]>) => {
            state.seekerServices = action.payload;
        },
    },
});

export const { setProviderServices, setSeekerServices } = eventServices.actions;

export default eventServices.reducer;