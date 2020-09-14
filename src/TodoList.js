import React, { Component } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
    };
    this.createItem = this.createItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.update = this.update.bind(this);
  }

  removeItem(id) {
    this.setState({
      todoItems: this.state.todoItems.filter((item) => item.id !== id),
    });
  }

  createItem(newItem) {
    this.setState({ todoItems: [...this.state.todoItems, newItem] });
  }

  update(id, updatedTask) {
    const updatedTodoItems = this.state.todoItems.map((todo) => {
      if (id === todo.id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todoItems: updatedTodoItems });
  }

  render() {
    const items = this.state.todoItems.map((item) => (
      <TodoItem
        key={item.id}
        id={item.id}
        task={item.task}
        removeTodo={this.removeItem}
        update={this.update}
      />
    ));
    return (
      <div>
        <h1>Todo List !</h1>
        <h4>A simple Todo List app</h4>
        <ul>{items}</ul>
        <NewTodoForm createItem={this.createItem} />
      </div>
    );
  }
}

export default TodoList;
