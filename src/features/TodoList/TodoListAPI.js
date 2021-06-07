export const TodoListAPI = {
    fetchTodos(fetch) {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(r => r.json())
    }
}
