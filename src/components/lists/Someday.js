import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Someday = (props) => {
  return (
    <div>
      <h3 className="list-title">Someday</h3>
      <TodoForm addTodo={props.addTodo} statusVal="Someday" />
      <TodoList
        todos={props.todos}
        completeTodo={props.completeTodo}
        archiveTodo={props.archiveTodo}
        handleChange={props.handleChange}
        statusVal={props.statusVal}
      />
    </div>
  );
};

export default Someday;
