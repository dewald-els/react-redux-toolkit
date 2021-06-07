import {createSlice} from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: 'todosList',
    initialState: {
        loading: false,
        todos: []
    },
    reducers: {
        fetchTodos: (state, action) => {
            state.loading = true;
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
            state.loading = false;
        },
        addTodo:  (state, action) => {
            state.todos.push(action.payload);
        },
        completeTodo: (state, action) => {
            const { payload } = action;
            const idx = state.todos.findIndex(todo => todo.id === payload.id);
            state.todos[idx].completed = true;
        }
    }
})

export const {  setTodos, addTodo, completeTodo, fetchTodos } = todoListSlice.actions;


export default todoListSlice.reducer;
