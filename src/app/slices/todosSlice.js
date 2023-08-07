import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        setInitialTodos : (state, action) => {
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos]
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        },
        

    },
});

export const { addTodo } = todosSlice.actions;
export const { deleteTodo } = todosSlice.actions;
export const { completeTodo } = todosSlice.actions;
export const { setInitialTodos } = todosSlice.actions;
export default todosSlice.reducer;