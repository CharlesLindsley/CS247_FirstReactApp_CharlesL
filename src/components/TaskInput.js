import React from 'react'
import PropTypes from 'prop-types'

class TaskInput extends React.PureComponent{
    static propTypes = {
        onNewTask: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);

        this.state = {
            taskText: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            taskText: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onNewTask(this.state.taskText);

        this.setState({
            taskText: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type='text' 
                   className="inputBox" 
                   value={this.state.taskText}
                   onChange={this.handleChange}>
            </input>
            <button className = 'formBtn' 
                    type='submit'
                    disabled={this.state.taskText.trim().length === 0}
                    onClick={this.handleSubmit}

                    >Create</button>
            </form>
        )
    }
}

export {TaskInput};