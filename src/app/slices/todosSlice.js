import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        }
    },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;