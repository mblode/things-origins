import React from 'react';
import TodoList from '../todo/TodoList';

const Logbook = (props) => {
  return (
    <div>
      <h3 className="list-title">Logbook</h3>
      <TodoList
        todos={props.todos}
        completeTodo={props.completeTodo}
        archiveTodo={props.archiveTodo}
        handleChange={props.handleChange}
        completedVal
        statusVal={props.statusVal}
      />
    </div>
  );
};

export default Logbook;
