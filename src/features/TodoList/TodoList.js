import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, fetchTodos} from "./todoListSlice";
import TodoListItem from "./TodoListItem";

function TodoList() {
    const [title, setTitle] = useState();
    const todos = useSelector(state => state.todosList.todos);
    const loading = useSelector(state => state.todosList.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const id = Math.random().toString(24).slice(2);
        dispatch(addTodo({
            id,
            title,
            completed: false,
            userId: 1
        }));
    }

    const completed = todos.filter(t => t.completed);
    const incomplete = todos.filter(t => !t.completed);

    return (
        <section>
            <form onSubmit={onFormSubmit}>
                <input type="text" onChange={(e) => setTitle(e.target.value.trim())}/>
                <button type="submit">Add</button>
            </form>

            {loading && <p>Loading todos...</p>}

            <section>
                <h4>Todos</h4>

                <ul>
                    {incomplete.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
                </ul>
            </section>


            <section>
                <h4>Completed</h4>

                <ul>
                    {completed.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
                </ul>
            </section>

        </section>
    )
}

export default TodoList;
