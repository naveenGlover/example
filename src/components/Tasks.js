import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Tasks = ({ tasks, onDelete, onChange }) => {
    const onchange = (task) => {
        task.checked = !task.checked
        onChange(task)

    }
    return (
        <ul className='Tasks'>
            {tasks.length != 0 ? tasks.map((task) => (
                <li className='task' key={task.id} > <input type='checkbox' className='checkbox-inp' onClick={() => onchange(task)} /> <p className={task.checked ? "taskDone" : "taskPending"}>{task.name}</p><FaTimes className='delete-btn' onClick={() => onDelete(task.id)} /></li>
            )) : <li className='noTodo'>No Todo's There</li>}
        </ul>
    )
}

export default Tasks