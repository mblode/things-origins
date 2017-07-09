import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {
        Object.keys(props.todos)
        .filter(key => props.todos[key].completed === this.props.completedVal)
        .filter(key => props.todos[key].archived === this.props.archivedVal)
        .filter(key => props.todos[key].status === this.props.statusVal)
        .filter(key => props.todos[key].time === this.props.timeVal)
        .map(key => (<Todo
          key={key}
          index={key}
          details={props.todos[key]}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
        />))
      }
    </div>
  );
}

export default TodoList;
