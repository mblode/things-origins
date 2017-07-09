import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Inbox = (props) => {
  return (
    <div>
      <h3 className="list-title">Inbox</h3>

      <TodoForm addTodo={props.addTodo} statusVal="Inbox" />

      <div className="todo-list">
        {
          Object.keys(props.todos)
          .filter(key => props.todos[key].completed === false)
          .filter(key => props.todos[key].archived === false)
          .filter(key => props.todos[key].status === 'Inbox')
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

export default Inbox;
