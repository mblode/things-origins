import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Logbook = (props) => {
  return (
    <div>
      <h3 className="list-title">Logbook</h3>

      <div className="todo-list">
        {
          Object.keys(props.todos)
          .filter(key => props.todos[key].completed === true)
          .filter(key => props.todos[key].archived === false)
          .map(key => (<Todo
            key={key}
            index={key}
            details={props.todos[key]}
            completeTodo={props.completeTodo}
            dataChanged={props.dataChanged}
            archiveTodo={props.archiveTodo}
            handleChange={props.handleChange}
          />))
        }
      </div>
    </div>
  );
};

export default Logbook;
