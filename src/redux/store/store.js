import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../slices/cardSlice";
import unconfirmedCardSlice from "../slices/unconfirmedCardSlice";

export default configureStore({
    reducer: {
        card: cardSlice,
        unconfirmedCard: unconfirmedCardSlice,
    }
})