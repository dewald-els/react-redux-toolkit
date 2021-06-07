import {useDispatch} from "react-redux";
import {completeTodo} from "./todoListSlice";

function TodoListItem({todo}) {

    const dispatch = useDispatch();

    const onItemClick = () => {
        dispatch(completeTodo(todo));
    }

    const styles = {};

    if (todo.completed === true) {
        styles.textDecoration = 'line-through';
    }

    return (
        <li style={styles} onClick={onItemClick}>{todo.title}</li>
    );
}

export default TodoListItem;
