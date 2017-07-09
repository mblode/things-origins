import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {
        Object.keys(props.todos)
        .filter(function (key) {
          let completed = null;
          let archived = null;

          console.log(props.timeVal);

          if (props.completedVal !== 'undefined') {
            completed = props.todos[key].completed === false;
          } else {
            completed = props.todos[key].completed === props.completedVal;
          }

          if (props.archivedVal !== 'undefined') {
            archived = props.todos[key].archived === false;
          } else {
            archived = props.todos[key].archived === props.archivedVal;
          }

          return completed && archived && props.todos[key].status === props.statusVal;
        })
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
