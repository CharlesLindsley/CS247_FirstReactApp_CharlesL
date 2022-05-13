import React from "react";
import Task from "./Task.js";

//CL: TaskList component
const TaskList = ({taskList}, {setTaskL}) => {
    return (
      <div className = 'taskListWrapper'>
        <ul className = 'taskList'>
        {taskList.map(task => (
            <Task 
                  taskText={task.text}
                  task={task}
                  taskList={taskList}
                  key={task.id} ></Task>
          ))}
        </ul>
      </div>
    );
};

export default TaskList;