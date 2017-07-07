import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          Object.keys(this.props.todos)
          .filter(key => this.props.todos[key].completed === false)
          .filter(key => this.props.todos[key].archived === false)
          .filter(key => this.props.todos[key].status === this.props.statusVal)
          
          .map(key => <Todo key={key} index={key} details={this.props.todos[key]} completeTodo={this.props.completeTodo} archiveTodo={this.props.archiveTodo} changeStatus={this.props.changeStatus} />)
        }
      </ul>
    );
  }
}

export default TodoList;