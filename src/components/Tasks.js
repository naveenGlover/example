import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Tasks = ({ tasks, onDelete, onChange }) => {
    const onchange = (task) => {
        task.checked = !task.checked
        onChange(task)

    }
    return (
        <ul className='Tasks'>
            {tasks.map((task) => (
                <li className='task' key={task.id} onDoubleClick={() => onchange(task)}> <span></span> <p className={task.checked ? "taskDone" : "taskPending"}>{task.name}</p><FaTimes className='delete-btn' onClick={() => onDelete(task.id)} /></li>
            ))}
        </ul>
    )
}

export default Tasks