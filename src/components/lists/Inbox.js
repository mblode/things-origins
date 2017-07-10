import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Inbox = (props) => {
  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">Inbox</h3>
        <TodoForm addTodo={props.addTodo} statusVal="Inbox" />
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          statusVal={props.statusVal}
        />
      </div>
    </div>
  );
};

export default Inbox;
