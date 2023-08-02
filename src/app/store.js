import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/slices/userSlice";
const store = configureStore({
    reducer: {
        user: userReducer
    },
});

export default store;