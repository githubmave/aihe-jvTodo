export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const requestTodos = () => {
    return {
        type: REQUEST_TODOS
    }
}

export const receiveTodos = (todos) => {
    return {
    type: RECEIVE_TODOS,
    todos: todos
    }
}
   
export const addTodo = (todo) => {
    console.log("addtodo action", todo)
    return {
        type: ADD_TODO,
        todo: todo
    }
}

export const deleteTodo = (id) => {
    console.log("action line:28 id", id)
    return {
        type: DELETE_TODO,
        id,
    }
}

export const updateTodo = (id, updatedTodo) => {
    return {
        type: UPDATE_TODO,
        updatedTodo,
        id
    }
}
    