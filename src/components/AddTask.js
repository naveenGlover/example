import React from 'react'

const AddTask = ({ addTask }) => {
    let form = document.getElementById('AddTask');
    const formOnSubmit = (e) => {
        e.preventDefault();
        if (document.getElementById('task').value !== '') {
            let task = {};
            task.name = document.getElementById('task').value;
            task.id = Math.floor((Math.random() * 10000) + 1);
            task.checked = false;
            addTask(task);
            document.getElementById('task').value = '';
        } else {
            alert("Please Eneter Task to add...!")
        }
    }
    return (
        <form id='AddTask' className='AddTask'>
            <input type="text" id='task' placeholder='Enter Task Todo...' />
            <button type='submit' value='submit' onClick={formOnSubmit}>Add</button>
        </form>
    )
}

export default AddTask