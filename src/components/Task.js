import React from 'react';
import TaskList from './TaskList.js';
import trash from '../trash_icon.png';

//CL: Task component
const Task = ({taskText}, {taskList}) => {
    /*CL: These keep showing up as undefined. . . */
    const deleteTask = (e) => {
      console.log(taskList);
      console.log(e);
    };
    return (
      <div className = 'task'>
        <input type="checkbox" className='checkBox'></input>
        <li className = 'taskItem'>
          {taskText}
        </li>
        <input type='image' src={trash} onClick={deleteTask} className='trashBtn' ></input>
      </div>
    );
};

export default Task;