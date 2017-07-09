import React from 'react';
import keydown from 'react-keydown';

@keydown
class Add extends React.Component  {
  constructor(props) {
    super(props);
    this.createTodo = this.createTodo.bind(this);
  }

  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      console.log(keydown.event.which);
    }
  }

  createTodo(event) {
    event.preventDefault();

    const todo = {
      text: '',
      notes: '',
      status: this.props.statusVal,
      time: 'Today',
      completed: false,
      archived: false,
    }

    this.props.addTodo(todo);
  }

  render() {
    return (
      <button title="New To-Do" className="btn btn-default btn-sm" onClick={(e) => this.createTodo(e)}>+</button>
    );
  }
}

export default Add;
