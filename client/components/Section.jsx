import React from 'react'
import {connect} from 'react-redux'

class Section extends React.Component {
    render () {
        return (
            <>
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">
                    {/* {::before}
                    {fucntion to mark all as complete} */}
                </label>
            </>
        )
    }
}

export default connect()(Section)