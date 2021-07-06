import request from 'superagent'
import {addTodo, updateTodo, deleteTodo} from '../actions/index'

export function fetchTodos () {
    // dispatch(requestTodos())
    return request 
        .get('/api/v1')
        .then(res => res.body
             // dispatch(recieveTodos(res.body))
        )
}

export function saveTodo (todo, dispatch) {
    return request
        .post('/api/v1')
        .send({task: todo})
        .then((res) => {
            dispatch(addTodo(res.body))        
        })
}
     
export function update (id, updatedTodo, dispatch) {
    return request
        .patch(`/api/v1/${id}`)
        .send({task: updatedTodo})
        .then((res) => {
            dispatch(updateTodo(id, res.body))
        })
}

export function todoDelete (id, dispatch) {
    console.log("api line:32 id", id)
    return request
        .delete(`/api/v1/${id}`)
        .then((res) => {
            console.log("api, line: 36", res)
            dispatch(deleteTodo(id))
        })
        .catch(error => console.log(error))
}

// export default fetchTodos