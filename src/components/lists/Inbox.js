import React from 'react';
import Add from '../todo/Add';
import TodoList from '../todo/TodoList';

const Inbox = (props) => {
  return (
    <div>
      <h3 className="list-title">Inbox</h3>
      <Add addTodo={props.addTodo} statusVal="Inbox" />
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

export default Inbox;
