import React from 'react'
import {connect} from 'react-redux'
import {saveTodo} from '../apis/todosApi'

class AddTodo extends React.Component {
  state = {
    todo: ''
  }
   
  handleChange = (e) => {
    return this.setState({todo: e.target.value})
  }
 
  handleSubmit = (e) => {
    e.preventDefault()
    saveTodo(this.state.todo, this.props.dispatch)
    this.setState({todo: ''})
  }

  render () {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} type='text' value={this.state.todo} onChange={this.handleChange} />
      </form>
      </>
    )
  }
}

export default connect()(AddTodo)
