import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShoppingCartSlice, Services } from "../interfaces";

const initialState: ShoppingCartSlice = {
    cartItems: [],
};

export const shoppingCart = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<Services[]>) => {
            state.cartItems = action.payload;
        },
    },
});

export const { setCartItems } = shoppingCart.actions;

export default shoppingCart.reducer;