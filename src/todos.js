let todos = []

const setTodos = (newTodos) => {
    todos = newTodos
}

const getTodos = () => {
    return todos
}

const addTodo = (todo) => {
    todos = [...todos, todo]
}

const removeTodo = (index) => {
    todos = [...todos.slice(0, index), ...todos.slice(index+1)]
}

const updateTodo = (index, newTodo) => {
    todos = [...todos.slice(0, index), newTodo, ...todos.slice(index+1)]
}

export { setTodos, getTodos, addTodo, removeTodo, updateTodo }
