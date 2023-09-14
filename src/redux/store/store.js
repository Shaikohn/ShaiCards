import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../slices/authSlice'
import userSlice from '../slices/userSlice'
import cardSlice from "../slices/cardSlice";
import unconfirmedCardSlice from "../slices/unconfirmedCardSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        card: cardSlice,
        unconfirmedCard: unconfirmedCardSlice,
    }
})