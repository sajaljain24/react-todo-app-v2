import React, { Component } from 'react'
import './Input.css'
import { connect } from 'react-redux'
import { addData } from '../actions/main-actions'

class Input extends Component {
    render() {
        var input = null;
        function setInput(value) {
            input = value;
        }
        const addTodo = () => {
            console.log(`Adding ${input}`);

            this.props.addData({
                item: input,
                done: false,
                id: Date.now()
            })
        }
        return (
            <div className="input" >
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit" onClick={addTodo}>Add!</button>
            </div>
        )
    }
}

export default connect(null, { addData })(Input);
