import React from "react";
import { Task } from "./Task.js";
import {TaskInput} from "./TaskInput.js"
import {v4 as uuid} from "uuid"
import moon from "../moon.svg";

//CL: TaskList component
class TaskList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  handleComplete = (taskId) => {
    this.setState((state) => ({
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id !== taskId) return task;

        return {
          ...task,
          isComplete: true
        };
      })
    }))

    setTimeout(() => this.handleRemove(taskId), 4000);
  }

  handleRemove = (taskId) => {
    this.setState((state) =>({
      tasks: state.tasks.filter((task) => task.id !== taskId)
    }));
  }

  handleNewTask = (taskText) => {
    const newTask = {
      id: uuid(),
      text: taskText,
      isComplete: false
    };

    this.setState((state) => ({
      ...state,
      tasks: [newTask, ...state.tasks]
    }))
  }

  render(){
    return (
      <>
        <TaskInput onNewTask={this.handleNewTask}/>

        <div className = 'taskListWrapper'>
          <ul className = 'taskList'>
            {this.state.tasks.map((task) => (
              <Task key={task.id} 
                    task={task}
                    onRemove={this.handleRemove}
                    onComplete={this.handleComplete} />
            ))}
          </ul>
        </div>
        
        {this.state.tasks.length === 0 && <div className="moonContainer">
          <img className="moonImg" src={moon} alt="Moon Image"></img>
          <p>Task list is empty!</p>
        </div>}
      </>
    );
  }
}

export default TaskList;