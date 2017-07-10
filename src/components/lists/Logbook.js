import React from 'react';
import TodoList from '../todo/TodoList';

const Logbook = (props) => {
  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">Logbook</h3>
      </div>
      <div className="page-content">
        <TodoList
          todos={props.todos}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          completedVal
          statusVal={props.statusVal}
        />
      </div>
    </div>
  );
};

export default Logbook;
