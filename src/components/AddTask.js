import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [value, setValue] = useState("");
    const [warning, setWarning] = useState(false);
    const errmsg = "Please Eneter Task name to add...!";
    const onChange = (event) => {
        setValue(event.target.value);
    }
    const formOnSubmit = (e) => {
        e.preventDefault();
        if ((value.trim()).length !== 0) {
            let task = {};
            task.name = document.getElementById('task').value;
            task.id = Math.floor((Math.random() * 10000) + 1);
            task.checked = false;
            addTask(task);
            setValue('');
            setWarning(false);
        } else {
            setWarning(true);
        }
    }
    return (
        <form id='AddTask' className='AddTask'>
            <input type="text" id='task' placeholder='Enter Task Todo...' onChange={onChange} value={value} />
            <button type='submit' value='submit' onClick={formOnSubmit}>Add</button>
            {warning ? <p className='warning'>{errmsg}</p> : ""}
        </form>
    )
}

export default AddTask