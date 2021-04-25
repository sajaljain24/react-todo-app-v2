// import React from 'react';
import React, { useState } from 'react'

import './TodoItem.css'

import Checkbox from '@material-ui/core/Checkbox';


const TodoItem = (props) => {

    let { tasks } = props;
    const [done, setdone] = useState(tasks.done)

    // console.log(tasks);
    const handleCheck = () => {
        setdone(!done);
    }
    return (
        <div className='todoItem'>
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{tasks.item}</p>
        </div>
    )
}



export default TodoItem;
