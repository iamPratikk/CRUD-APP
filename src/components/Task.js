import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import '../index.css';


const Task=({task,onDelete,onEdit})=>{
    // console.log(task);
return(
    <div>
    <div className='task' >
        <div>
            <p className='taskName' >
            <span className='textBold' >Task Name:  </span>{task.text}</p>
        
        
            <p className='taskDate' ><span>Date of Completion:  </span>{task.date}</p>
        </div>
        <div>
            <p><FaTimes onClick={() => onDelete(task.id)} className='delIcon' /></p>
            <p><FaPencilAlt onClick={() => onEdit(task.id,task.text,task.date)} className='editIcon' /></p>
        </div>
    </div>
    </div>
)
}
export default Task;