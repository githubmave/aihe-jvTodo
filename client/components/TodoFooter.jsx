import React from 'react'
import {connect} from 'react-redux'

class TodoFooter extends React.Component {
    render () {
        return (
            <footer>
                {/* ::before */}
                <span className="todo-count">
                    <strong>0 </strong>
                    items left
                </span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                {/* hide button if there are no completed items */}
                <button className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

export default connect()(TodoFooter)