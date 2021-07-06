import {RECEIVE_TODOS, REQUEST_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO} from '../actions/index'

function todos (state = [], action) {
    switch(action.type) {
        case RECEIVE_TODOS:
            return action.todos

        case REQUEST_TODOS:
            return todos
         
        case ADD_TODO: 
        let {id, priority, task, completed} = action.todo
            return [...state, { id, priority, task, completed }]    

        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id == action.id) {
                    return action.updatedTodo
                }
                return todo
            })    

        case DELETE_TODO:
            console.log("reducer line:24 id", action.id)
            console.log(state)
            return state.filter(todo => todo.id != action.id)       

        default:
            return state
    }
}

export default todos
