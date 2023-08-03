import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/slices/userSlice";
import todosReducer from "../app/slices/todosSlice"
const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer,
    },
});

export default store;