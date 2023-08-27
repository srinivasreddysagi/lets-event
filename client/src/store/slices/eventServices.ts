import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
    EventServicesSlice,
    ProviderServices,
} from "../interfaces";

const initialState: EventServicesSlice = {
    providerServices: []
};

export const acrossAppSlice = createSlice({
    name: "eventServices",
    initialState,
    reducers: {
        setProviderServices: (
            state,
            action: PayloadAction<ProviderServices[]>
        ) => {
            state.providerServices = action.payload;
        },
    },
});

export const { setProviderServices } = acrossAppSlice.actions;

export default acrossAppSlice.reducer;