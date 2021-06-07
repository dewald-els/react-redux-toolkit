import {applyMiddleware} from "@reduxjs/toolkit";
import {counterMiddleware} from "../features/Counter/counterMiddleware";
import {todoListMiddleware} from "../features/TodoList/todoListMiddleware";

export default applyMiddleware(
    counterMiddleware,
    todoListMiddleware
);
