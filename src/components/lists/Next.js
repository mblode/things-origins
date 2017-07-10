import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Next = (props) => {
  return (
    <div>
      <div className="page-header">
        <h3 className="list-title">Next</h3>
        <TodoForm addTodo={props.addTodo} statusVal="Next" />
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

export default Next;
