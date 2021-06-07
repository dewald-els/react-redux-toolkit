import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import todoListReducer from "../features/TodoList/todoListSlice";

export default combineReducers({
    counter: counterReducer,
    todosList: todoListReducer
})
