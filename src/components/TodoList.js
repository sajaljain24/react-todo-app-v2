import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/main-actions'
import TodoItem from './TodoItem'

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        var { tasks } = this.props;
        // console.log(tasks);
        let list = null;
        if (tasks) {
            list = tasks.map(item => <TodoItem tasks={item} />)
        }
        return (
            <div>
                {list}
            </div>
        )
    }
}
const stateAsProps = (reducers) => {

    return {
        tasks: reducers.mainReducer.tasks
    }
}
const actionAsProps = {
    fetchData: fetchData
}
export default connect(stateAsProps, actionAsProps)(TodoList);