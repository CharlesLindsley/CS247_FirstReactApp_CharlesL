import './App.css';
import React, {useState}  from 'react';
import TaskList from './components/TaskList.js';
import Task from './components/Task.js';
import trash from './trash_icon.png';
import moon from './moon.svg';

function App() {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);

    const submitHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
      setTaskList([{text: inputText, id: Math.random() }, ...taskList]);
      console.log(taskList);
      e.preventDefault();
    };

    const submitHandlerChange = (e) => {
      console.log('change: ', e.target.value);
      setInputText(e.target.value);
    };

    const canSubmit = inputText.length === 0;

    return (
      <div className='App'>
        <main>
          <h1>Task List</h1>
          <form onSubmit={submitHandler}>
            <input type='text' className="inputBox" 
            value={inputText}
            onChange={submitHandlerChange}
            >
            </input>
            <button className = 'formBtn' type='submit' disabled={canSubmit} onClick={submitHandler}>Create</button>
          </form>
        </main>

        {/*CL: COnditional render for the img*/}
        {taskList.length === 0 && 
        (<img src={moon} className='moonImg'></img>
        )};

        {/*CL: Conditional render for the TaskList*/}
        {!taskList.length % 2 === 0 && 
        (<TaskList taskList={taskList} 
                   setTaskL={setTaskList}></TaskList>)};
      </div>
    );
}


export default App;
