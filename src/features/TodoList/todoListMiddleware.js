import {TodoListAPI} from "./TodoListAPI";
import {setTodos} from "./todoListSlice";

export const todoListMiddleware = ({dispatch}) => next => async action => {

    const result = next(action);

    if (action.type === 'todosList/fetchTodos') {
        TodoListAPI.fetchTodos(fetch)
            .then(todos => {
                setTimeout(() => {
                    dispatch(setTodos(todos));
                }, 2000);
            })
            .catch(error => {
            })
    }

    return result;
}
