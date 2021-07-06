  import React from 'react'
import {update, todoDelete} from '../apis/todosApi'
// import {receiveTodos} from '../actions/index'
// import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

class Todo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            updatedTodo: '',

        }
    }

    handleChange = (e) => {
        return this.setState({updatedTodo: e.target.value})
        //need to set the completed state of todo to true. 
        //this will add the className="completed" to the <li> of that todo
    }

    handleSubmit = (e) => {
        e.preventDefault()
        update(this.props.task.id, this.state.updatedTodo, this.props.dispatch)
        this.setState({edit: false})
    }

    doubleClickHandler = (e) => {
        this.setState({edit: true})
    }

    clickHandler = (e) => {
        console.log("Todo.jsx line:34 id", this.props.task.id)
        todoDelete(this.props.task.id, this.props.dispatch)
    }

    render () {
        return(
            <li>
                <div className="view">
                <input className='toggle' type="checkbox" onChange={this.handleChange}/>
                {this.state.edit == false && <label onDoubleClick={this.doubleClickHandler}>{this.props.task.task}</label>}
                {this.state.edit && 
                    <form onSubmit={this.handleSubmit}>
                    <input className="new-todo" 
                        placeholder={this.props.task.task} autoFocus={true} 
                        type='text' value={this.state.todo} onChange={this.handleChange} />
                    </form>}
                <button className="destroy" onClick={this.clickHandler}></button>
                </div>
            </li>
        )
    }
}
 
export default connect()(Todo)