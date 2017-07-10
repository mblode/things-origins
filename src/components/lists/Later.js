import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Later = (props) => {
  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">Later</h3>
        <TodoForm addTodo={props.addTodo} statusVal="Later" />
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          projects={props.projects}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          statusVal={props.statusVal}
        />
      </div>
    </div>
  );
};

export default Later;
