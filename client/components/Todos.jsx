import React from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../apis/todosApi'
import {receiveTodos} from '../actions/index'
import Todo from './Todo'

class Todos extends React.Component {
    
    componentDidMount () {
        fetchTodos()
        .then(todos => {
            this.props.dispatch(receiveTodos(todos))
        })
      }

    render () {
        return ( 
            <ul className="todo-list">
                {this.props.todos.map((task, id) => {
                    return <Todo key={id} id={id} task={task} />
                })}
            </ul>
        )
    }
}     

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todos)