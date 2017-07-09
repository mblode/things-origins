import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Trash = (props) => {
  return (
    <div>
      <h3 className="list-title">Trash</h3>
      <button className="ml-3 mb-3 btn btn-primary btn-sm" onClick={() => props.emptyTrash()}>Empty Trash</button>
      <div className="todo-list">
        {
          Object.keys(props.todos)
          .filter(key => props.todos[key].archived === true)
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
      
    </div>
  );
};

export default Trash;
