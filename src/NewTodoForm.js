import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    {
      evt.preventDefault();
      this.props.createItem({ ...this.state, id: uuidv4() });
      this.setState({ task: '' });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="newTodo">New Todo </label>
          <input
            type="text"
            placeholder="New Todo"
            name="task"
            id="newTodo"
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
        </div>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
