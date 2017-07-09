import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Next = (props) => {
  return (
    <div>
      <h3 className="list-title">Next</h3>
      <TodoForm addTodo={props.addTodo} statusVal="Next" />
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

export default Next;
