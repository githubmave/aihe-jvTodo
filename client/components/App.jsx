import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Section from './Section'
import TodoFooter from './TodoFooter'

export default class App extends React.Component {
  render () {
    return (
      <Router>
      <>
        <header className="header">
          <h1>todos</h1>
          <AddTodo />
        </header>
        <section className="main"> 
          <Section />
          <Todos />
        </section>
        <footer className="footer">
          <TodoFooter />
        </footer>
      </>
      </Router>
    )
  }
}
